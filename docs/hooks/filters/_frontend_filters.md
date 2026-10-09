<explain-block title="fluent_support_customer_portal_invalid_permission_message">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve invalid permission message and modify it.

**Parameters**

- '$message' (string) Invalid permission message

**Usage**

```php
add_filter('fluent_support/customer_portal_invalid_permission_message', function ($message) {
    // ...do something
    return $message;
}, 10, 1);
```

**Reference**

`apply_filters(
            'fluent_support/customer_portal_invalid_permission_message',
         esc_html__('You don\'t have permission to access customer support portal', 'fluent-support')
        )
`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/CustomerPortalHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_agent_permission_error_message">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the error message for agent permissions and modify it.

**Parameters**

- '$message' (string) Agent permission error message

**Usage**

```php
add_filter('fluent_support/customer_portal_agent_permission_error_message', function ($message) {
    // ...do something
    return $message;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/customer_portal_agent_permission_error_message',$msg)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/CustomerPortalHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_user_portal_access_config">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the user portal access config data and modify it.

**Parameters**

- '$config' (array) Customer portal access settings data

**Usage**

```php
add_filter('fluent_support/user_portal_access_config', function ($config) {
    // ...do something
    return $config;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/user_portal_access_config', [
                'status'  => true,
                'message' => $invalidPermissionMessage
            ])`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/CustomerPortalHandler.php`,<br>
`fluent-support/app/Http/Policies/PortalPolicy.php`
</div>
</explain-block>

<explain-block title="fluent_support_customer_portal_vars">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the customer portal localize data and modify it.

**Parameters**

- '$vars' (array) Customer portal localize data

**Usage**

```php
add_filter('fluent_support/customer_portal_vars', function ($vars) {
    // ...do something
    return $vars;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/customer_portal_vars', $vars)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/CustomerPortalHandler.php`,<br>
`fluent-support/app/Services/ProfileInfoService.php`
</div>
</explain-block>

<explain-block title="fluent_support_can_customer_create_ticket">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve whether a customer can create a ticket, along with customer and ticket data and allows you to modify it.

**Parameters**

- '$canCreate' (boolean) Customer can create ticket or not
- '$customer' (object) Customer data
- '$data' (array) Ticket data

**Usage**

```php
add_filter('fluent_support/can_customer_create_ticket', function ($canCreate, $customer, $data) {
    // ...do something
    return $vars;
}, 10, 3);
```

**Reference**

`apply_filters('fluent_support/can_customer_create_ticket', true, $customer, $data)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/CustomerPortalController.php`,<br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_can_customer_create_response">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve whether a customer can create a response, along with customer, ticket along with response data and allows you to modify it.

**Parameters**

- '$canCreate' (boolean) Customer can create ticket or not
- '$customer' (object) Customer data
- '$ticket' (object) Ticket data
- '$data' (array) Ticket response data

**Usage**

```php
add_filter('fluent_support/can_customer_create_response', function ($canCreate, $customer, $ticket,  $data) {
    // ...do something
    return $canCreate;
}, 10, 4);
```

**Reference**

`apply_filters('fluent_support/can_customer_create_response', true, $ticket->customer, $ticket, $data)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/CustomerPortalController.php`,<br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_person_user_edit_url">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve user profile edit link data and modify it.

**Parameters**

- '$userEditUrl' (string) User profile edit link
- '$instance' (object) Instance of Person class

**Usage**

```php
add_filter('fluent_support/person_user_edit_url', function ($userEditUrl, $instance) {
    // ...do something
    return $userEditUrl;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/person_user_edit_url', $userEditUrl, $this)`


This filter is located in <br>
`fluent-support/app/Models/Person.php`
</div>
</explain-block>

<explain-block title="fluent_support_customer_extra_widgets">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add widgets to the customer profile panel on the ticket and customer pages. AI agents read the same widgets through the MCP <code>get-ticket</code> tool. See <a href="/modules/custom_widget">Custom Widget</a> for a full guide.

**Parameters**

- '$widgets' (array) Widgets keyed by widget key. Each widget has a 'header' or 'title', and 'body_html' for the agent UI or 'mcp' (plain data) for AI agents
- '$customer' (object) Customer data
- '$context' (array|null) Since 2.4.5: ['format' => 'html'|'mcp', 'keys' => string[]|null]. 'format' is what the caller wants, 'keys' the widget keys it asked for (null = all). Check it with `ProfileInfoService::isMcpWidgetRequest($context)` and `ProfileInfoService::wantsWidget($context, $key)`, guarded with `$context &&` for older versions that pass no context

**Usage**

```php
add_filter('fluent_support/customer_extra_widgets', function ($widgets, $customer, $context = null) {
    // ...do something
    return $widgets;
}, 10, 3);
```

**Reference**

`apply_filters('fluent_support/customer_extra_widgets', $widgets, $customer, self::widgetContext($context))`


This filter is located in <br>
`fluent-support/app/Services/ProfileInfoService.php`
</div>
</explain-block>



<explain-block title="fluent_support_enable_email_claim">
<hr>
<div class="fs-docs-content">
This filter hook allows you to turn off the support email claim feature. When a signed-in customer's WordPress account email differs from the email on their support record, the Customer Portal offers to move the support record to the account email. Fluent Support mails a confirmation link to the new address, and the link only works for the signed-in account that asked for it.

Returning `false` hides the portal prompt and makes existing confirmation links resolve as disabled.

**Parameters**

- '$enabled' (boolean) Whether customers may claim their account email from the portal. Default `true`

**Usage**

```php
add_filter('fluent_support/enable_email_claim', '__return_false');
```

**Reference**

`apply_filters('fluent_support/enable_email_claim', true)`

This filter is located in <br>
`fluent-support/app/Services/EmailClaimService.php`
</div>
</explain-block>

<explain-block title="fluent_support_link_customer_on_user_register">
<hr>
<div class="fs-docs-content">
This filter hook allows you to control whether a newly registered WordPress account takes over existing unlinked customer records with the same email. By default, on `user_register` Fluent Support links every customer record that has the new user's email and no WordPress user yet, so the new account sees the tickets that address already opened.

This is safe on a default WordPress install because the credentials are mailed to that inbox. Sites that let visitors register with a password they choose, without confirming the email, may want to turn it off.

**Parameters**

- '$shouldLink' (boolean) Whether to link matching unclaimed customer records. Default `true`
- '$user' (object) The `WP_User` that was just registered

**Usage**

```php
add_filter('fluent_support/link_customer_on_user_register', function ($shouldLink, $user) {
    // Don't link accounts created through a custom signup form
    if (get_user_meta($user->ID, 'created_via_custom_signup', true)) {
        return false;
    }
    return $shouldLink;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/link_customer_on_user_register', true, $user)`

This filter is located in <br>
`fluent-support/app/Services/ProfileInfoService.php`
</div>
</explain-block>

<explain-block title="fluent_support_woo_menu_label">
<hr>
<div class="fs-docs-content">
This filter hook allows you to change the label of the Support tab that Fluent Support adds to the WooCommerce My Account menu. The tab is added only when WooCommerce is active and the Customer Portal destination in Global Settings is WooCommerce Account Navigation (`ticket_link_portal` is `woocommerce`). The tab opens the `support-tickets` endpoint, which renders the `[fluent_support_portal]` shortcode.

**Parameters**

- '$label' (string) The menu label. Default `Support` (translatable)

**Usage**

```php
add_filter('fluent_support/woo_menu_label', function ($label) {
    return __('Help Desk', 'my-textdomain');
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/woo_menu_label', __('Support', 'fluent-support'))`

This filter is located in <br>
`fluent-support/app/Services/Integrations/IntegrationInit.php`
</div>
</explain-block>

<explain-block title="fluent_support_woo_menu_link_position">
<hr>
<div class="fs-docs-content">
This filter hook allows you to change where the Support tab sits in the WooCommerce My Account menu. The value is a zero-based index into the menu items. If it is equal to or larger than the number of menu items, the tab is placed just before the last item (normally Log out). Same conditions as `fluent_support/woo_menu_label`.

**Parameters**

- '$position' (integer) Zero-based position of the Support tab. Default `3`

**Usage**

```php
add_filter('fluent_support/woo_menu_link_position', function ($position) {
    return 1; // right after Dashboard
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/woo_menu_link_position', 3)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/IntegrationInit.php`
</div>
</explain-block>

<explain-block title="fluent_support_disable_fc_menu">
<hr>
<div class="fs-docs-content">
This filter hook allows you to stop Fluent Support from adding its Support tab to the FluentCart customer dashboard. The tab is added when FluentCart is active and the Customer Portal destination in Global Settings is FluentCart Account Navigation (`ticket_link_portal` is `fluent_cart`). The filter runs on WordPress `init`, so add it earlier (for example in a plugin file or on `plugins_loaded`).

The FluentCart purchase widget in the ticket sidebar is not affected.

**Parameters**

- '$disable' (boolean) Return `true` to skip the FluentCart dashboard tab. Default `false`

**Usage**

```php
add_filter('fluent_support/disable_fc_menu', '__return_true');
```

**Reference**

`apply_filters('fluent_support/disable_fc_menu', false)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/FluentCart/FluentCart.php`
</div>
</explain-block>
