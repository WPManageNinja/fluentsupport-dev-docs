<explain-block title="fluent-support/_fluent_support_pro_filters">

[//]: # (0)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_file_storage_integration_settings</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve file storage integration settings data and modify it.

**Parameters**

- '$settings' (array) File storage integration settings data

**Usage**

```php
add_filter('fluent_support/file_storage_integration_settings_' . $settingsKey, function ($settings) {
    // ...do something
    return $settings
}, 10, 1)
```

**Note:** `$settingsKey` It contains the file upload driver name, such as Dropbox, Google Drive, etc.

**Reference**

`apply_filters('fluent_support_pro/file_storage_integration_settings_' . $settingsKey, [
    'fieldsConfig' => null,
    'settings'     => null
])
`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/UploadIntegrationController.php`
</div>

</details>

[//]: # (1)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_file_storage_integration_settings_save</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve file upload related message and settings data and modify it.

**Parameters**

- '$message' (array) Message related to saving file upload settings
- 'settings' (array) Data for saving file upload settings

**Usage**

```php
add_filter('fluent_support/file_storage_integration_settings_save_' . $settingsKey, 
function($message, $settings) {
    // ...do something
    return $message
}, 10, 2)
```
**Note:** `$settingsKey` It contains the file upload driver name, such as Dropbox, Google Drive, etc.

**Reference**

`apply_filters('fluent_support_pro/file_storage_integration_settings_save_' . $settingsKey, [
            'message' => __('Sorry, upload driver not found')
        ], $settings)`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/UploadIntegrationController.php`
</div>

</details>

[//]: # (2)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_search_doc_query</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the search query used for document and modify it.

**Parameters**

- '$search' (string) Search query used for document

**Usage**

```php
add_filter('fluent_support/search_doc_query', function($search) {
    // ...do something
    return $search
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/search_doc_query', $search)`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/DocSuggestionController.php`
</div>

</details>

[//]: # (3)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_search_doc_post_types</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the document types data and modify it.

**Parameters**

- '$docsPostType' (array) Document types

**Usage**

```php
add_filter('fluent_support/search_doc_post_types', function($docsPostType) {
    // ...do something
    return $docsPostType
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/search_doc_post_types', $ticketConfig['docs_post_types'])`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/DocSuggestionController.php`
</div>

</details>

[//]: # (4)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_doc_search_args</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the document search arguments and modify it.

**Parameters**

- '$searchArgs' (array) Document search arguments

**Usage**

```php
add_filter('fluent_support/doc_search_args', function($searchArgs) {
    // ...do something
    return $searchArgs
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/doc_search_args', [
    'post_type'   => $postTypes,
    's'           => $search,
    'numberposts' => $ticketConfig['post_limits']
])`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/DocSuggestionController.php`
</div>

</details>

[//]: # (5)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_search_doc_result</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the document search result and modify it.

**Parameters**

- '$result' (array) Document search result

**Usage**

```php
add_filter('fluent_support/search_doc_result', function($result) {
    // ...do something
    return $result
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/search_doc_result', $result)`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/DocSuggestionController.php`
</div>

</details>

[//]: # (6)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_email_piping_raw_data</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the payload and mailbox data and modify it.

**Parameters**

- '$data' (array) Payload data
- '$box' (object) Mailbox data

**Usage**

```php
add_filter('fluent_support/email_piping_raw_data', function($data, $box) {
    // ...do something
    return $data
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support_pro/email_piping_raw_data', $data, $box)`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/EmailBoxController.php`
</div>

</details>

[//]: # (7)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_email_piping_data</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the payload, formatted payload and mailbox data and modify it.

**Parameters**

- '$formattedData' (array) formatted payload data
- '$data' (array) Payload data
- '$box' (object) Mailbox data

**Usage**

```php
add_filter('fluent_support/email_piping_data', function($formattedData, $data, $box) {
    // ...do something
    return $formattedData
}, 10, 3)
```

**Reference**

`apply_filters('fluent_support_pro/email_piping_data', $formattedData, $data, $box)`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/EmailBoxController.php`
</div>

</details>

[//]: # (8)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_all_doc_post_types</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the document post types and modify it.

**Parameters**

- '$postTypes' (array) Document post types

**Usage**

```php
add_filter('fluent_support/all_doc_post_types', function($postTypes) {
    // ...do something
    return $postTypes
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/all_doc_post_types', get_post_types([
    'public'             => true,
    'publicly_queryable' => true
]))`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/TicketFormController.php`
</div>

</details>

[//]: # (9)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_custom_field_types</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the list of custom field types and modify it.

**Parameters**

- '$fieldTypes' (array) List of custom field types

**Usage**

```php
add_filter('fluent_support/custom_field_types', function($fieldTypes) {
    // ...do something
    return $fieldTypes
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/custom_field_types', $fieldTypes)`

<b>`$fieldTypes` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating the custom form field types.</b>

This filter is located in <br>
`fluent-support-pro/app/Services/CustomFieldsService.php`
</div>

</details>

[//]: # (10)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_render_custom_field_options</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the public field, customer data, and modify it..

**Parameters**

- '$publicField' (array) Public field
- '$customer' (object) Customer data

**Usage**

```php
add_filter('fluent_support/render_custom_field_options_' . $fieldType['type'], function( $publicField, $customer) {
    // ...do something
    return $publicField
}, 10, 2)
```
**Note:** `$fieldType['type']` the type of field, whether it be text,email, user, etc.

**Reference**

`apply_filters('fluent_support/render_custom_field_options_' . $fieldType['type'], $publicField, $customer)`


This filter is located in <br>
`fluent-support-pro/app/Services/CustomFieldsService.php`
</div>

</details>

[//]: # (11)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_custom_field_renders_type</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the field types and modify it..

**Parameters**

- '$fieldTypes' (array) Field types

**Usage**

```php
add_filter('fluent_support/custom_field_renders_type', function( $fieldTypes) {
    // ...do something
    return $fieldTypes
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/custom_field_renders_type', $fieldTypes)`


This filter is located in <br>
`fluent-support-pro/app/Services/CustomFieldsService.php`
</div>

</details>

[//]: # (12)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_partial_match</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve ticket partially match data modify it..

**Parameters**

- '$partialMatch' (boolean) Ticket partially match or not

**Usage**

```php
add_filter('fluent_support/ticket_partial_match', function( $partialMatch) {
    // ...do something
    return $partialMatch
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/ticket_partial_match', true)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>

</details>

[//]: # (13)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_enable_custom_piping</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve custom piping permission modify it..

**Parameters**

- '$enableCustomPiping' (boolean) Enable custom piping or not

**Usage**

```php
add_filter('fluent_support/enable_custom_piping', function( $enableCustomPiping) {
    // ...do something
    return $enableCustomPiping
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/enable_custom_piping', false)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>

</details>

[//]: # (14)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_slack_api_data</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve Slack integration settings, message data, and modify them.

**Parameters**

- '$data' (array) Slack Integration Settings data
- '$message' (array) Data for slack message
**Usage**

```php
add_filter('fluent_support/slack_api_data', function($data, $message) {
    // ...do something
    return $data
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/slack_api_data', $data, $message)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/Slack/SlackApi.php`
</div>

</details>

[//]: # (15)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_disable_woo_menu</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the wooCommerce menu permission to disable it or not and modify it.

**Parameters**

- '$data' (boolean) Disable wooCommerce menu or not

**Usage**

```php
add_filter('fluent_support/disable_woo_menu', function($data) {
    // ...do something
    return $data
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/disable_woo_menu', false)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/WooCommerce.php`
</div>

</details>

[//]: # (16)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_woo_menu_link_position</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the support page link position in WooCommerce customer menu and modify it.

**Parameters**

- '$supportTicketPosition' (boolean) Support page link position in WooCommerce customer menu

**Usage**

```php
add_filter('fluent_support/woo_menu_link_position', function($supportTicketPosition) {
    // ...do something
    return $supportTicketPosition
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/woo_menu_link_position', 3)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/WooCommerce.php`
</div>

</details>

[//]: # (16)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_woo_menu_label</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the support page link label in WooCommerce customer menu and modify it.

**Parameters**

- '$supportLabel' (string) Support page link label in WooCommerce customer menu

**Usage**

```php
add_filter('fluent_support/woo_menu_label', function($supportLabel) {
    // ...do something
    return $supportLabel
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/woo_menu_label', $supportLabel)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/WooCommerce.php`
</div>

</details>


</explain-block>

