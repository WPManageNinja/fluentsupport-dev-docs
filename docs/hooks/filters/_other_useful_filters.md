<explain-block title="fluent_support_exportable_tickets_data">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve Exportable data and modify it.

**Parameters**

- '$data' (array) Exportable data
- '$tickets' (object) Ticket data

**Usage**

```php
add_filter('fluent_support/exportable_tickets_data', function ($data, $tickets) {
    // ...do something
    return $data;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/exportable_tickets_data', $data, $tickets)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/PrivacyHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_exportable_conversations_data">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve Exportable conversation data and modify it.

**Parameters**

- '$data' (array) Exportable data
- '$conversations' (object) Conversation data

**Usage**

```php
add_filter('fluent_support/exportable_conversations_data', function ($data, $conversations) {
    // ...do something
    return $data;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/exportable_conversations_data', $data, $conversations)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/PrivacyHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_exportable_customer_data">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve exportable customer data and modify it.

**Parameters**

- '$data' (array) Exportable data
- '$customer' (object) Customer data

**Usage**

```php
add_filter('fluent_support/exportable_customer_data', function ($data, $customer) {
    // ...do something
    return $data;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/exportable_customer_data', $data, $customer)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/PrivacyHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_recaptcha_v3_ref_score">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve reCAPTCHA v3 threshold value data and modify it.

**Parameters**

- '$refScore' (integer) reCAPTCHA v3 threshold value (The score is compared with the reCAPTCHA value provided by Google, which is determined based on interactions with your site ) 

**Usage**

```php
add_filter('fluent_support/recaptcha_v3_ref_score', function ($refScore) {
    // ...do something
    return $refScore;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/recaptcha_v3_ref_score', 0.5)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/ReCaptchaHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_storage_drivers_info">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve storage driver information and modify it.

**Parameters**

- '$drivers' (array) Storage driver information  

**Usage**

```php
add_filter('fluent_support/storage_drivers_info', function ($drivers) {
    // ...do something
    return $drivers;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/storage_drivers_info', $drivers)`

<b>`$drivers` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating information about Storage drivers, including the local driver, Dropbox driver, etc.</b>

This filter is located in <br>
`fluent-support/app/Http/Controllers/SettingsController.php`
</div>
</explain-block>

<explain-block title="fluent_support_allowed_customer_profile_picture_file_type">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve customer profile picture file types and modify it.

**Parameters**

- '$fileTypes' (array) Customer profile picture file types

**Usage**

```php
add_filter('fluent_support/allowed_customer_profile_picture_file_type', function ($fileTypes) {
    // ...do something
    return $fileTypes;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/allowed_customer_profile_picture_file_type', array('jpeg', 'jpe', 'jpg', 'png'))`

This filter is located in <br>
`fluent-support/app/Services/AvatarUploder.php`
</div>
</explain-block>

<explain-block title="fluent_support_uploaded_file_name_prefix">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve file name prefix and modify it.

**Parameters**

- '$prefix' (string) File name prefix
**Usage**

```php
add_filter('fluent_support/uploaded_file_name_prefix', function ($prefix) {
    // ...do something
    return $prefix;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/uploaded_file_name_prefix', $prefix)`

This filter is located in <br>
`fluent-support/app/Services/Includes/FileSystem.php`
</div>

</explain-block>

<explain-block title="fluent_support_smartcode_fallback">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve Smartcode data and modify it.

**Parameters**

- '$matches' (string) Smartcode data
- '$data' (object) Customer data
**Usage**

```php
add_filter('fluent_support/smartcode_fallback', function ($matches, $data) {
    // ...do something
    return $matches;
}, 10, 2);
```

**Reference**

`apply_filters('fluentsupport/smartcode_fallback', $matches[0], $data)`

This filter is located in <br>
`fluent-support/app/Services/Parser/ShortcodeParser.php`
</div>
</explain-block>

<explain-block title="fluent_support_smartcode_fallback_callback">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve fallback behavior for smartcodes and modify it.

**Parameters**

- '$matches' (string) Smartcode data
- '$valueKey' (string) Key associated with the original value
- '$defaultValue' (string) The default value to fall back on if the smartcode cannot be resolved
- '$data' (object) Customer data

**Usage**

```php
add_filter('fluentsupport/smartcode_fallback_callback_' . $dataKey, function ($matches, $valueKey, $defaultValue, $data) {
    // ...do something
    return $matches;
}, 10, 4);
```
**Note:** `$dataKey` Unique key or identifier associated with the specific data being processed.

**Reference**

`apply_filters('fluentsupport/smartcode_fallback_callback_' . $dataKey, $matches[0], $valueKey, $defaultValue, $data)`

This filter is located in <br>
`fluent-support/app/Services/Parser/ShortcodeParser.php`
</div>
</explain-block>

<explain-block title="fluent_support_strict_subjects">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the strict subjects and modify it.

**Parameters**

- '$subjects' (array) Email based subjects

**Usage**

```php
add_filter('fluent_support/strict_subjects', function ($subjects) {
    // ...do something
    return $subjects;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/strict_subjects', [
            'ticket_replied_by_agent_email_to_customer',
            'ticket_closed_by_agent_email_to_customer',
            'ticket_created_email_to_customer'
        ])`

This filter is located in <br>
`fluent-support/app/Services/EmailNotification/Settings.php`
</div>
</explain-block>

<explain-block title="fluent_support_migrator_class_mapper">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the Ticket migration class mapper data and modify it.

**Parameters**

- '$classMapper' (array) Ticket migration class mapper

**Usage**

```php
add_filter('fluent_support/migrator_class_mapper', function ($classMapper) {
    // ...do something
    return $classMapper;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/migrator_class_mapper', [
            'awesome-support' => 'AwesomeSupportTickets',
            'support-candy'   => 'SupportCandyTickets',
            'js-helpdesk'     => 'JSHelpdeskTickets',
        ])`

This filter is located in <br>
`fluent-support/app/Services/Tickets/Importer/MigratorService.php`
</div>
</explain-block>

<explain-block title="fluent_support_allow_share_essential">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the permission for share essential data and modify it.

**Parameters**

- '$allowShareEssential' (boolean) Permission to share essential data or not

**Usage**

```php
add_filter('fluentsupport_allow_share_essential', function ($allowShareEssential) {
    // ...do something
    return $allowShareEssential;
}, 10, 1);
```

**Reference**

`apply_filters('fluentsupport_allow_share_essential', Helper::getOption('_share_essential', 'no') == 'yes')`

This filter is located in <br>
`fluent-support/app/Services/Tickets/Importer/MigratorService.php`
</div>
</explain-block>

<explain-block title="fluent_support_can_customer_access_portal">
<hr>
<div class="fs-docs-content">
This filter hook allows you to control whether a customer is permitted to access the Customer Portal. Return `false` to block access for a specific customer.

**Parameters**

- `$canAccess` (boolean) Whether access is allowed — default `true`
- `$customer` (object) The customer object requesting access

**Usage**

```php
add_filter('fluent_support/can_customer_access_portal', function ($canAccess, $customer) {
    // block suspended customers
    if ($customer->status === 'blocked') {
        return false;
    }
    return $canAccess;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/can_customer_access_portal', true, $customer)`

This filter is located in <br>
`fluent-support/app/Http/Controllers/CustomerPortalController.php`
</div>
</explain-block>

<explain-block title="fluent_support_can_customer_access_ticket">
<hr>
<div class="fs-docs-content">
This filter hook allows you to control whether a customer can perform a specific action on a ticket in the Customer Portal. Use it to implement custom access rules beyond the default ownership check.

**Parameters**

- `$canAccess` (boolean) Whether access is allowed — default `true`
- `$customer` (object) The customer requesting access
- `$ticket` (object) The ticket being accessed
- `$action` (string) The action being attempted, e.g. `'view'`, `'reply'`

**Usage**

```php
add_filter('fluent_support/can_customer_access_ticket', function ($canAccess, $customer, $ticket, $action) {
    // only allow viewing, not replying to closed tickets
    if ($action === 'reply' && $ticket->status === 'closed') {
        return false;
    }
    return $canAccess;
}, 10, 4);
```

**Reference**

`apply_filters('fluent_support/can_customer_access_ticket', true, $customer, $ticket, $action)`

This filter is located in <br>
`fluent-support/app/Services/CustomerPortalService.php`
</div>
</explain-block>

<explain-block title="fluent_support_menu_items">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add, remove, or reorder the primary navigation items in the Fluent Support admin menu.

**Parameters**

- `$menuItems` (array) Array of menu item definitions

**Usage**

```php
add_filter('fluent_support/menu_items', function ($menuItems) {
    $baseUrl = admin_url('admin.php?page=fluent-support#/');
    $menuItems['my_custom_page'] = [
        'key'       => 'my_custom_page',
        'label'     => 'Custom Page',
        'permalink' => $baseUrl . 'custom-page',
    ];
    return $menuItems;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/menu_items', $menuItems)`

This filter is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>
</explain-block>

<explain-block title="fluent_support_settings_menu_items">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add, remove, or reorder the items in the Global Settings sidebar menu.

**Parameters**

- `$menu` (array) Array of settings menu item definitions

**Usage**

```php
add_filter('fluent_support/settings_menu_items', function ($menu) {
    $menu[] = [
        'title'      => 'My Settings',
        'route_name' => 'my_settings',
        'icon'       => 'myIcon',
    ];
    return $menu;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/settings_menu_items', $menu)`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>
</explain-block>

<explain-block title="fluent_support_portal_admin_base_url">
<hr>
<div class="fs-docs-content">
This filter hook allows you to override the base URL used for admin-side ticket links that point into the Customer Portal.

**Parameters**

- `$url` (string) The default portal base URL

**Usage**

```php
add_filter('fluent_support/portal_admin_base_url', function ($url) {
    return 'https://support.mysite.com/tickets/';
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/portal_admin_base_url', $url)`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_import_chunk_limit">
<hr>
<div class="fs-docs-content">
This filter hook allows you to control how many tickets are processed per chunk during a migration import. Lower values reduce memory usage on constrained servers; higher values speed up large imports.

**Parameters**

- `$limit` (integer) Number of tickets per import chunk — default `20`

**Usage**

```php
add_filter('fluent_support/ticket_import_chunk_limit', function ($limit) {
    return 10; // process fewer tickets at a time on low-memory servers
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/ticket_import_chunk_limit', 20)`

This filter is located in <br>
`fluent-support/app/Services/Tickets/Importer/BaseImporter.php`
</div>
</explain-block>

<explain-block title="fluent_support_fs_tickets_updated_since">
<hr>
<div class="fs-docs-content">
This filter hook allows you to set the earliest date from which tickets are fetched during a migration. Tickets updated before this date are skipped.

**Parameters**

- `$date` (string) ISO 8601 date string — default `'2010-01-19T02:00:00Z'`

**Usage**

```php
add_filter('fluent_support/fs_tickets_updated_since', function ($date) {
    return '2023-01-01T00:00:00Z'; // only import tickets updated after Jan 2023
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/fs_tickets_updated_since', '2010-01-19T02:00:00Z')`

This filter is located in <br>
`fluent-support/app/Services/Tickets/Importer/BaseImporter.php`
</div>
</explain-block>

<explain-block title="fluent_support_truncate_uploaded_file_names">
<hr>
<div class="fs-docs-content">
This filter hook allows you to enable automatic truncation of long uploaded file names before they are saved to disk. When enabled, file names exceeding a safe length are shortened to prevent filesystem issues.

**Parameters**

- `$truncate` (boolean) Whether to truncate file names — default `false`

**Usage**

```php
add_filter('fluent_support/truncate_uploaded_file_names', function ($truncate) {
    return true;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/truncate_uploaded_file_names', false)`

This filter is located in <br>
`fluent-support/app/Services/Includes/FileSystem.php`
</div>
</explain-block>

<explain-block title="fluent_support_external_attachment_url">
<hr>
<div class="fs-docs-content">
This filter hook allows you to override the public URL used to serve a ticket attachment. Use it when attachments are stored on an external service (CDN, S3, etc.) and the default URL needs to be rewritten.

**Parameters**

- `$url` (string) The attachment's full URL as stored
- `$attachment` (object) The attachment object

**Usage**

```php
add_filter('fluent_support/external_attachment_url', function ($url, $attachment) {
    // rewrite to a signed CDN URL
    return my_cdn_sign($url);
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/external_attachment_url', $attachment->full_url, $attachment)`

This filter is located in <br>
`fluent-support/app/Hooks/Handlers/ExternalPages.php`
</div>
</explain-block>

<explain-block title="fluent_support_customer_page_ticket_widgets_limit">
<hr>
<div class="fs-docs-content">
This filter hook allows you to control the maximum number of previous tickets shown in the customer profile sidebar widget.

**Parameters**

- `$limit` (integer) Maximum number of tickets to show — default `20`

**Usage**

```php
add_filter('fluent_support/customer_page_ticket_widgets_limit', function ($limit) {
    return 10;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/customer_page_ticket_widgets_limit', 20)`

This filter is located in <br>
`fluent-support/app/Models/Traits/CustomerTrait.php`
</div>
</explain-block>
