<explain-block title="fluent-support/other_useful_filters">

[//]: # (0)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_exportable_tickets_data</summary>
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
    return $data
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/exportable_tickets_data', $data, $tickets)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/PrivacyHandler.php`
</div>

</details>

[//]: # (1)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_exportable_conversations_data</summary>
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
    return $data
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/exportable_conversations_data', $data, $conversations)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/PrivacyHandler.php`
</div>

</details>

[//]: # (2)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_exportable_customer_data</summary>
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
    return $data
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/exportable_customer_data', $data, $customer)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/PrivacyHandler.php`
</div>

</details>

[//]: # (3)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_recaptcha_v3_ref_score</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve reCAPTCHA v3 threshold value data and modify it.

**Parameters**

- '$refScore' (integer) reCAPTCHA v3 threshold value (The score is compared with the reCAPTCHA value provided by Google, which is determined based on interactions with your site ) 

**Usage**

```php
add_filter('fluent_support/recaptcha_v3_ref_score', function ($refScore) {
    // ...do something
    return $refScore
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/recaptcha_v3_ref_score', 0.5)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/ReCaptchaHandler.php`
</div>

</details>

[//]: # (4)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_storage_drivers_info</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve storage driver information and modify it.

**Parameters**

- '$drivers' (array) Storage driver information  

**Usage**

```php
add_filter('fluent_support/storage_drivers_info', function ($drivers) {
    // ...do something
    return $drivers
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/storage_drivers_info', $drivers)`

<b>`$drivers` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating information about Storage drivers, including the local driver, Dropbox driver, etc.</b>

This filter is located in <br>
`fluent-support/app/Http/Controllers/SettingsController.php`
</div>

</details>

[//]: # (5)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_allowed_customer_profile_picture_file_type</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve customer profile picture file types and modify it.

**Parameters**

- '$fileTypes' (array) Customer profile picture file types

**Usage**

```php
add_filter('fluent_support/allowed_customer_profile_picture_file_type', function ($fileTypes) {
    // ...do something
    return $fileTypes
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/allowed_customer_profile_picture_file_type', array('jpeg', 'jpe', 'jpg', 'png'))`

This filter is located in <br>
`fluent-support/app/Services/AvatarUploder.php`
</div>

</details>


[//]: # (6)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_uploaded_file_name_prefix</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve file name prefix and modify it.

**Parameters**

- '$prefix' (string) File name prefix
**Usage**

```php
add_filter('fluent_support/uploaded_file_name_prefix', function ($prefix) {
    // ...do something
    return $prefix
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/uploaded_file_name_prefix', $prefix)`

This filter is located in <br>
`fluent-support/app/Services/Includes/FileSystem.php`
</div>

</details>

[//]: # (7)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_smartcode_fallback</summary>
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
    return $matches
}, 10, 2)
```

**Reference**

`apply_filters('fluentsupport/smartcode_fallback', $matches[0], $data)`

This filter is located in <br>
`fluent-support/app/Services/Parser/ShortcodeParser.php`
</div>

</details>

[//]: # (8)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_smartcode_fallback_callback</summary>
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
    return $matches
}, 10, 4)
```
**Note:** `$dataKey` Unique key or identifier associated with the specific data being processed.

**Reference**

`apply_filters('fluentsupport/smartcode_fallback_callback_' . $dataKey, $matches[0], $valueKey, $defaultValue, $data)`

This filter is located in <br>
`fluent-support/app/Services/Parser/ShortcodeParser.php`
</div>

</details>

[//]: # (9)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_strict_subjects</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the strict subjects and modify it.

**Parameters**

- '$subjects' (array) Email based subjects

**Usage**

```php
add_filter('fluent_support/strict_subjects', function ($subjects) {
    // ...do something
    return $subjects
}, 10, 1)
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

</details>

[//]: # (10)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_migrator_class_mapper</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the Ticket migration class mapper data and modify it.

**Parameters**

- '$classMapper' (array) Ticket migration class mapper

**Usage**

```php
add_filter('fluent_support/migrator_class_mapper', function ($classMapper) {
    // ...do something
    return $classMapper
}, 10, 1)
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

</details>


[//]: # (11)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_allow_share_essential</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the permission for share essential data and modify it.

**Parameters**

- '$allowShareEssential' (boolean) Permission to share essential data or not

**Usage**

```php
add_filter('fluentsupport_allow_share_essential', function ($allowShareEssential) {
    // ...do something
    return $allowShareEssential
}, 10, 1)
```

**Reference**

`apply_filters('fluentsupport_allow_share_essential', Helper::getOption('_share_essential', 'no') == 'yes')`

This filter is located in <br>
`fluent-support/app/Services/Tickets/Importer/MigratorService.php`
</div>

</details>



</explain-block>