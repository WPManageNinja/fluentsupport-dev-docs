# Remote Portal

<Badge type="tip" text="Fluent Support Pro 2.4.5+" />

Remote Portal runs the helpdesk on one WordPress site and the customer portal on another:

| Site | Plugins | Role |
|---|---|---|
| **Support site** | Fluent Support + Fluent Support Pro | Stores every ticket. Agents work here. |
| **Main site** | Fluent Support Client (the connector) | Shows the portal to logged-in customers and serves customer data back to the support site. |

The connector calls the support site's REST API with an Application Password for one agent (or administrator) there, and files tickets on behalf of the main site's logged-in customer, matched by email. The support site calls back to the main site with an API token to fetch [customer widgets](#customer-widgets-from-the-main-site).

The user guide covers the setup screens: [Remote Portal](https://docs.fluentsupport.com/remote-portal). This page covers the `wp-config.php` connection, the hooks on both sites, and how widgets travel between them.

::: info
Remote Portal replaces the standalone **Fluent Support Server** plugin. While that plugin is active, Remote Portal stays off and shows a notice. Deactivate it and connect again.
:::

## The connection user

The main site acts on the support site as one WordPress user. It must be an administrator, or an agent with all three permissions:

- Sensitive Data (`fst_sensitive_data`)
- Manage Other Tickets (`fst_manage_other_tickets`)
- Manage Settings (`fst_manage_settings`)

Restrict that agent to the mailbox the portal uses to limit what the main site can reach. Mailbox restrictions apply to every portal request.

## Connect with wp-config.php

Instead of a one-time connection key, both sites can read the connection from constants. The support site's **Settings > Remote Portal > Use wp-config.php instead** writes both snippets with a new token.

The token must be the same on both sites: 32 to 128 letters and digits, for example from `openssl rand -hex 32`.

### Support site

```php
define('FLUENT_SUPPORT_PORTAL_BASE_URL', 'https://example.com/support'); // the portal page on the main site
define('FLUENT_SUPPORT_REMOTE_API_TOKEN', 'TOKEN');
```

| Constant | Required | Meaning |
|---|---|---|
| `FLUENT_SUPPORT_PORTAL_BASE_URL` | yes | The customer portal page on the main site. Its scheme, host and port identify the main site. Ticket emails link here. |
| `FLUENT_SUPPORT_REMOTE_API_TOKEN` | yes | Sent on widget calls to the main site. |
| `FLUENT_SUPPORT_REMOTE_API_URL` | no | The main site's REST base, only if it is not `/wp-json`. It must be on the main site. |
| `FLUENT_SUPPORT_REMOTE_PORTAL` | no | `true` or `false` forces Remote Portal on or off. With the constants above it is on unless this is `false`. |
| `FLUENT_SUPPORT_ADMIN_PORTAL_BASE_URL` | no | The admin ticket URL used in links, if not the default. |

### Main site

```php
define('FLUENT_SUPPORT_SERVER_URL', 'https://support.example.com');
define('FLUENT_SUPPORT_SERVER_USERNAME', 'USERNAME');
define('FLUENT_SUPPORT_SERVER_PASSWORD', 'APPLICATION PASSWORD');
define('FLUENT_SUPPORT_REMOTE_API_TOKEN', 'TOKEN');
```

| Constant | Required | Meaning |
|---|---|---|
| `FLUENT_SUPPORT_SERVER_URL` | yes | The support site. |
| `FLUENT_SUPPORT_SERVER_USERNAME` | yes | The connection user on the support site. |
| `FLUENT_SUPPORT_SERVER_PASSWORD` | yes | That user's Application Password. |
| `FLUENT_SUPPORT_REMOTE_API_TOKEN` | yes | Checked on widget calls from the support site. |
| `FLUENT_SUPPORT_SERVER_API_URL` | no | The support site's REST base, only if it is not `/wp-json`. |

Then open **Settings > FluentSupport Client** on the main site, choose the portal page and save. The connector loads the mailbox list and the admin portal link from the support site.

### How constant mode behaves

- Nothing from the constants is written to the database. Remove them to fall back to a connection made with a key. While they are set, the user and token of an earlier key connection are ignored.
- The connection key, **Disconnect**, token rotation and portal URL changes are refused on both sites. Change the constants instead.
- No connect call names a user, so the support site accepts any administrator or agent with the three permissions. The username in the main site's `wp-config.php` decides who it is.

## HTTPS and local sites

Both sites require HTTPS and verify certificates, unless the site sets `WP_ENVIRONMENT_TYPE` to `local` or `development`:

```php
define('WP_ENVIRONMENT_TYPE', 'local');
```

Each side has a filter to override certificate checks; see [the hooks](#hooks-on-the-support-site) below.

## Customer widgets from the main site

When an agent opens a ticket on the support site, Fluent Support Pro asks the main site for the customer's widgets. The connector runs the same [`fluent_support/customer_extra_widgets`](/modules/custom_widget) filter **on the main site** and returns the result, so a widget written for Fluent Support also works on a main site that runs only the connector.

On the main site, the filter receives:

- `$widgets` (array): empty to start.
- `$customer` (object): `user_id` (the customer's user ID on the main site, `0` if unknown) and `email`. Fluent Support's own `Customer` model is not available there.
- `$context` (array): `format` (`html` or `mcp`) and `keys` (the widget keys asked for, or `null` for all), the same as on the support site.

```php
// On the main site, where only Fluent Support Client runs.
add_filter('fluent_support/customer_extra_widgets', function ($widgets, $customer, $context = null) {
    if (!\FluentSupportClient\Classes\DataProviderHandler::wantsWidget($context, 'my_plan')) {
        return $widgets;
    }

    $user = $customer->user_id ? get_user_by('ID', $customer->user_id) : get_user_by('email', $customer->email);
    if (!$user) {
        return $widgets;
    }

    $plan = get_user_meta($user->ID, 'my_plan', true);

    if (\FluentSupportClient\Classes\DataProviderHandler::isMcpWidgetRequest($context)) {
        $widgets['my_plan'] = ['title' => 'Plan', 'mcp' => ['plan' => $plan]];
    } else {
        $widgets['my_plan'] = ['header' => 'Plan', 'body_html' => '<p>' . esc_html($plan) . '</p>'];
    }

    return $widgets;
}, 10, 3);
```

On the support site, every widget from the main site is keyed `<key>_remote` (here `my_plan_remote`), so it never collides with a widget of the same name on the support site. A caller that asks for specific keys must use the `_remote` suffix; the support site strips it before calling the main site.

The connector ships widgets for FluentCart (purchases, subscriptions, licenses), Easy Digital Downloads and FluentCRM.

### When the main site is down

The support site waits up to 8 seconds for widgets. After a failed call it skips widget calls for one minute, so ticket views stay fast while the main site is down. **Test connection** on the settings page always calls through.

## Hooks on the support site

<explain-block title="fluent_support/remote_portal_connected">
<hr>
<div class="fs-docs-content">
This action fires after a main site connects with a connection key and the connection is saved.

**Parameters**

- `$siteUrl` (string) The main site's URL
- `$userId` (int) The connection user's ID on the support site

**Usage**

```php
add_action('fluent_support/remote_portal_connected', function ($siteUrl, $userId) {
    // ...do something
}, 10, 2);
```

**Reference**

`do_action('fluent_support/remote_portal_connected', $siteUrl, get_current_user_id())`

This action is located in <br>
`fluent-support-pro/app/Http/Controllers/RemotePortalController.php`
</div>
</explain-block>

<explain-block title="fluent_support/remote_portal_disconnected">
<hr>
<div class="fs-docs-content">
This action fires after the connection is cleared, either from the support site's settings page or when the main site disconnects.

**Parameters**

- `$userId` (int) The user who disconnected: the administrator on the settings page, or the connection user when the main site disconnects

**Usage**

```php
add_action('fluent_support/remote_portal_disconnected', function ($userId) {
    // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/remote_portal_disconnected', get_current_user_id())`

This action is located in <br>
`fluent-support-pro/app/Http/Controllers/RemotePortalController.php`,<br>
`fluent-support-pro/app/Http/Controllers/RemotePortalSettingsController.php`
</div>
</explain-block>

<explain-block title="fluent_support/remote_portal_ssl_verify">
<hr>
<div class="fs-docs-content">
Whether the support site verifies the main site's TLS certificate on widget calls. Defaults to `true`, or `false` when `WP_ENVIRONMENT_TYPE` is `local` or `development`.

**Parameters**

- `$verify` (bool) Whether to verify the certificate
- `$url` (string) The URL being called

**Usage**

```php
add_filter('fluent_support/remote_portal_ssl_verify', function ($verify, $url) {
    return $verify;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/remote_portal_ssl_verify', !self::isDevSite(), $url)`

This filter is located in <br>
`fluent-support-pro/app/Modules/RemotePortal/RemoteSiteClient.php`
</div>
</explain-block>

<explain-block title="fluent_support_pro/remote_portal_connector_download_url">
<hr>
<div class="fs-docs-content">
The download link for the connector plugin shown on **Settings > Remote Portal**.

**Parameters**

- `$url` (string) Defaults to `https://fluentapi.wpmanageninja.com/addons/download/fluent-support-client/latest.zip`

**Usage**

```php
add_filter('fluent_support_pro/remote_portal_connector_download_url', function ($url) {
    return 'https://example.com/fluent-support-client.zip';
});
```

**Reference**

`apply_filters('fluent_support_pro/remote_portal_connector_download_url', $url)`

This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/RemotePortalSettingsController.php`
</div>
</explain-block>

These existing hooks also apply to Remote Portal:

- [`fluent_support/customer_portal_vars`](/hooks/filters/#frontend-filters) also filters the portal settings sent to the main site. Those settings are built once for all remote customers, so a callback must not depend on the current user there.
- `fluent_support/portal_base_url` returns the main site's portal page while a main site is connected, so ticket links in emails point there. Pro hooks it at priority `100`.

## Hooks on the main site

These run in the Fluent Support Client plugin.

<explain-block title="fluent_support_client/doc_sources">
<hr>
<div class="fs-docs-content">
Help articles the portal suggests while a customer writes a ticket. The connector ships with no sources, so nothing is searched until you add some. Return an array keyed by the **product ID on the support site**.

**Parameters**

- `$sources` (array) Each value is `['type' => 'wedocs', 'parent_id' => 318]` (weDocs on the main site: that doc and its children) or `['type' => 'rest', 'site_url' => 'https://docs.example.com']` (a site that serves `wp/v2/docs`)

**Usage**

```php
add_filter('fluent_support_client/doc_sources', function ($sources) {
    $sources[1] = ['type' => 'wedocs', 'parent_id' => 318];
    $sources[10] = ['type' => 'rest', 'site_url' => 'https://docs.example.com'];

    return $sources;
});
```

Up to 5 articles are shown, and each product and search pair is cached for 6 hours. The customer's subject is sent to a `rest` site as the search term, so only list sites you trust with it.

**Reference**

`apply_filters('fluent_support_client/doc_sources', [])`

This filter is located in <br>
`fluent-support-client/includes/Controllers/DocsRestController.php`
</div>
</explain-block>

<explain-block title="fluent_support_client/api_ssl_verify">
<hr>
<div class="fs-docs-content">
Whether the main site verifies the support site's TLS certificate. Defaults to `true`, or `false` when `WP_ENVIRONMENT_TYPE` is `local` or `development`.

**Parameters**

- `$verify` (bool) Whether to verify the certificate
- `$url` (string) The URL being called

**Usage**

```php
add_filter('fluent_support_client/api_ssl_verify', function ($verify, $url) {
    return $verify;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support_client/api_ssl_verify', !$isDevSite, $url)`

This filter is located in <br>
`fluent-support-client/includes/Classes/Api.php`
</div>
</explain-block>

`fluent_support/customer_extra_widgets` also runs on the main site; see [Customer widgets from the main site](#customer-widgets-from-the-main-site).
