<explain-block title="fluent_support_file_storage_integration_settings">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve file storage integration settings data and modify it.

**Parameters**

- '$settings' (array) File storage integration settings data

**Usage**

```php
add_filter('fluent_support_pro/file_storage_integration_settings_' . $settingsKey, function ($settings) {
    // ...do something
    return $settings;
}, 10, 1);
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
</explain-block>

<explain-block title="fluent_support_file_storage_integration_settings_save">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve file upload related message and settings data and modify it.

**Parameters**

- '$message' (array) Message related to saving file upload settings
- 'settings' (array) Data for saving file upload settings

**Usage**

```php
add_filter('fluent_support_pro/file_storage_integration_settings_save_' . $settingsKey, 
function($message, $settings) {
    // ...do something
    return $message;
}, 10, 2);
```
**Note:** `$settingsKey` It contains the file upload driver name, such as Dropbox, Google Drive, etc.

**Reference**

`apply_filters('fluent_support_pro/file_storage_integration_settings_save_' . $settingsKey, [
            'message' => __('Sorry, upload driver not found')
        ], $settings)`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/UploadIntegrationController.php`
</div>
</explain-block>

<explain-block title="fluent_support_search_doc_query">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the search query used for document and modify it.

**Parameters**

- '$search' (string) Search query used for document

**Usage**

```php
add_filter('fluent_support/search_doc_query', function($search) {
    // ...do something
    return $search;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/search_doc_query', $search)`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/DocSuggestionController.php`
</div>
</explain-block>

<explain-block title="fluent_support_search_doc_post_types">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the document types data and modify it.

**Parameters**

- '$docsPostType' (array) Document types

**Usage**

```php
add_filter('fluent_support/search_doc_post_types', function($docsPostType) {
    // ...do something
    return $docsPostType;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/search_doc_post_types', $ticketConfig['docs_post_types'])`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/DocSuggestionController.php`
</div>
</explain-block>

<explain-block title="fluent_support_doc_search_args">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the document search arguments and modify it.

**Parameters**

- '$searchArgs' (array) Document search arguments

**Usage**

```php
add_filter('fluent_support/doc_search_args', function($searchArgs) {
    // ...do something
    return $searchArgs;
}, 10, 1);
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
</explain-block>

<explain-block title="fluent_support_search_doc_result">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the document search result and modify it.

**Parameters**

- '$result' (array) Document search result

**Usage**

```php
add_filter('fluent_support/search_doc_result', function($result) {
    // ...do something
    return $result;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/search_doc_result', $result)`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/DocSuggestionController.php`
</div>

</explain-block>

<explain-block title="fluent_support_email_piping_raw_data">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the payload and mailbox data and modify it.

**Parameters**

- '$data' (array) Payload data
- '$box' (object) Mailbox data

**Usage**

```php
add_filter('fluent_support_pro/email_piping_raw_data', function($data, $box) {
    // ...do something
    return $data;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support_pro/email_piping_raw_data', $data, $box)`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/EmailBoxController.php`
</div>
</explain-block>

<explain-block title="fluent_support_email_piping_data">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the payload, formatted payload and mailbox data and modify it.

**Parameters**

- '$formattedData' (array) formatted payload data
- '$data' (array) Payload data
- '$box' (object) Mailbox data

**Usage**

```php
add_filter('fluent_support_pro/email_piping_data', function($formattedData, $data, $box) {
    // ...do something
    return $formattedData;
}, 10, 3);
```

**Reference**

`apply_filters('fluent_support_pro/email_piping_data', $formattedData, $data, $box)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_all_doc_post_types">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the document post types and modify it.

**Parameters**

- '$postTypes' (array) Document post types

**Usage**

```php
add_filter('fluent_support/all_doc_post_types', function($postTypes) {
    // ...do something
    return $postTypes;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/all_doc_post_types', get_post_types([
    'public'             => true,
    'publicly_queryable' => true
]))`


This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/TicketFormController.php`
</div>

</explain-block>

<explain-block title="fluent_support_custom_field_types">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the list of custom field types and modify it.

**Parameters**

- '$fieldTypes' (array) List of custom field types

**Usage**

```php
add_filter('fluent_support/custom_field_types', function($fieldTypes) {
    // ...do something
    return $fieldTypes;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/custom_field_types', $fieldTypes)`

<b>`$fieldTypes` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating the custom form field types.</b>

This filter is located in <br>
`fluent-support-pro/app/Services/CustomFieldsService.php`
</div>
</explain-block>

<explain-block title="fluent_support_render_custom_field_options">
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
    return $publicField;
}, 10, 2);
```
**Note:** `$fieldType['type']` the type of field, whether it be text,email, user, etc.

**Reference**

`apply_filters('fluent_support/render_custom_field_options_' . $fieldType['type'], $publicField, $customer)`


This filter is located in <br>
`fluent-support-pro/app/Services/CustomFieldsService.php`
</div>
</explain-block>

<explain-block title="fluent_support_custom_field_renders_type">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the field types and modify it..

**Parameters**

- '$fieldTypes' (array) Field types

**Usage**

```php
add_filter('fluent_support/custom_field_renders_type', function( $fieldTypes) {
    // ...do something
    return $fieldTypes;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/custom_field_renders_type', $fieldTypes)`


This filter is located in <br>
`fluent-support-pro/app/Services/CustomFieldsService.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_partial_match">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve ticket partially match data modify it..

**Parameters**

- '$partialMatch' (boolean) Ticket partially match or not

**Usage**

```php
add_filter('fluent_support/ticket_partial_match', function( $partialMatch) {
    // ...do something
    return $partialMatch;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/ticket_partial_match', true)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_enable_custom_piping">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve custom piping permission modify it..

**Parameters**

- '$enableCustomPiping' (boolean) Enable custom piping or not

**Usage**

```php
add_filter('fluent_support/enable_custom_piping', function( $enableCustomPiping) {
    // ...do something
    return $enableCustomPiping;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/enable_custom_piping', false)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_slack_api_data">
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
    return $data;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/slack_api_data', $data, $message)`


This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/Slack/SlackApi.php`
</div>
</explain-block>

<explain-block title="fluent_support_advanced_filter_options">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the advanced filter options data and modify it.

**Parameters**

- '$groups' (array) Advanced filter options data

**Usage**

```php
add_filter('fluent_support/advanced_filter_options', function($groups) {
    // ...do something
    return $groups;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/advanced_filter_options', $groups)`


This filter is located in <br>
`fluent-support-pro/app/Services/ProHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_outgoing_webhook_data">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the outgoing webhook data and modify it.

**Parameters**

- '$data' (array) Formatted Ticket data
- '$action' (object) Workflow action data
- '$ticket' (object) Ticket data

**Usage**

```php
add_filter('fluent_support/outgoing_webhook_data', function($data, $action, $ticket) {
    // ...do something
    return $groups;
}, 10, 3);
```

**Reference**

`apply_filters('fluent_support/outgoing_webhook_data', $data, $action, $this->ticket)`


This filter is located in <br>
`fluent-support-pro/app/Services/Workflow/ActionRunner.php`
</div>
</explain-block>

<explain-block title="fluent_support_workflow_ticket_created_supported_conditions">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the workflow ticket created supported conditions data and modify it.

**Parameters**

- '$supportedConditions' (array) Ticket created supported conditions data

**Usage**

```php
add_filter('fluent_support/workflow_ticket_created_supported_conditions', function($supportedConditions) {
    // ...do something
    return $supportedConditions;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/workflow_ticket_created_supported_conditions', $supportedConditions)`

<b>`$supportedConditions` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating the ticket created supported conditions data.</b>

This filter is located in <br>
`fluent-support-pro/app/Services/Workflow/WorkflowHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_workflow_response_added_by_customer_">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the response added by customer supported conditions data and modify it.

**Parameters**

- '$supportedConditions' (array) Response added by customer supported conditions data

**Usage**

```php
add_filter('fluent_support/workflow_response_added_by_customer_supported_conditions', function($supportedConditions) {
    // ...do something
    return $supportedConditions;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/workflow_response_added_by_customer_supported_conditions', $supportedConditions)`

<b>`$supportedConditions` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating the response added by customer supported conditions data.</b>

This filter is located in <br>
`fluent-support-pro/app/Services/Workflow/WorkflowHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_workflow_ticket_closed_supported_conditions">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the ticket closed supported conditions data and modify it.

**Parameters**

- '$supportedConditions' (array) Ticket closed supported conditions data

**Usage**

```php
add_filter('fluent_support/workflow_ticket_closed_supported_conditions', function($supportedConditions) {
    // ...do something
    return $supportedConditions;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/workflow_ticket_closed_supported_conditions', $supportedConditions)`

<b>`$supportedConditions` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating the ticket closed supported conditions data.</b>

This filter is located in <br>
`fluent-support-pro/app/Services/Workflow/WorkflowHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_workflow_conditions">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the Workflow conditions data and modify it.

**Parameters**

- '$conditions' (array) Workflow conditions data

**Usage**

```php
add_filter('fluent_support/workflow_conditions', function($conditions) {
    // ...do something
    return $conditions;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/workflow_conditions', $conditions)`

This filter is located in <br>
`fluent-support-pro/app/Services/Workflow/WorkflowHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_workflow_actions">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the Workflow actions data and modify it.

**Parameters**

- '$actions' (array) Workflow actions data
- '$workFlow' (array) Workflow data

**Usage**

```php
add_filter('fluent_support/workflow_actions', function($actions, $workFlow) {
    // ...do something
    return $actions;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/workflow_actions', $actions, $workFlow)`

This filter is located in <br>
`fluent-support-pro/app/Services/Workflow/WorkflowHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_full_match">
<hr>
<div class="fs-docs-content">
This filter hook allows you to enable or disable exact-subject ticket matching when piping in a reply-by-email message, alongside the existing `fluent_support/ticket_partial_match` filter.

**Parameters**

- `$fullMatch` (boolean) Whether to attempt a full-subject match — default `true`

**Usage**

```php
add_filter('fluent_support/ticket_full_match', function ($fullMatch) {
    return false;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/ticket_full_match', true)`

This filter is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_verify_webhook_signature_by_platform">
<hr>
<div class="fs-docs-content">
This filter hook allows you to cryptographically verify an incoming Telegram or Slack webhook payload before it's processed. `{platform}` is `telegram` or `slack`. When no callback is registered for a platform, verification is skipped and the existing token-based validation is used instead.

**Parameters**

- `$verified` (boolean) Default `false`
- `$request` (object) The current request, containing the raw webhook payload

**Usage**

```php
add_filter('fluent_support/verify_webhook_signature_telegram', function ($verified, $request) {
    return my_verify_telegram_signature($request);
}, 10, 2);
```

**Note:** `{platform}` is the incoming webhook's platform slug (`telegram` or `slack`).

**Reference**

`apply_filters('fluent_support/verify_webhook_signature_' . $platform, false, $request)`

This filter is located in <br>
`fluent-support/app/Http/Controllers/ChatMessageParserController.php` (fired from Core),<br>
`fluent-support-pro/app/Services/Integrations/WebhookSignatureVerifier.php` (Pro-side implementation)
</div>
</explain-block>

<explain-block title="fluent_support_ai_audit_batch_limit">
<hr>
<div class="fs-docs-content">
This filter hook allows you to override how many candidate tickets are pulled per batch when generating AI ticket audits (mood/sentiment analysis) for a date range.

**Parameters**

- `$limit` (integer) Maximum tickets per audit batch — default `200`

**Usage**

```php
add_filter('fluent_support/ai_audit_batch_limit', function ($limit) {
    return 50;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/ai_audit_batch_limit', 200)`

This filter is located in <br>
`fluent-support-pro/app/Modules/Reporting/AuditService.php`
</div>
</explain-block>

<explain-block title="fluent_support_generate_ticket_audit">
<hr>
<div class="fs-docs-content">
This filter hook allows you to override the AI prompt used to generate a ticket's mood/sentiment audit. The default prompt instructs the AI to return a JSON object with `mood`, `score`, and `summary` fields.

**Parameters**

- `$prompt` (string) The default audit prompt sent to the AI provider

**Usage**

```php
add_filter('fluent_support/generate_ticket_audit', function ($prompt) {
    return $prompt . "\nAlso flag any mention of a refund request.";
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/generate_ticket_audit', $prompt)`

This filter is located in <br>
`fluent-support-pro/app/Modules/Reporting/AuditService.php`
</div>
</explain-block>

<explain-block title="fluent_support_doc_post_categories">
<hr>
<div class="fs-docs-content">
This filter hook allows you to modify the list of documentation post categories offered in the "Search Docs" AI settings, alongside `fluent_support/all_doc_post_types`.

**Parameters**

- `$postCategories` (array) Hierarchical category options, keyed for a flat select dropdown

**Usage**

```php
add_filter('fluent_support/doc_post_categories', function ($postCategories) {
    // ...do something
    return $postCategories;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/doc_post_categories', $this->getHierarchicalCategoryOptions())`

This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/TicketFormController.php`
</div>
</explain-block>

<explain-block title="fluent_support_doc_post_categories_limit">
<hr>
<div class="fs-docs-content">
This filter hook allows you to override how many documentation categories are loaded when building the "Search Docs" category select in settings. This caps query/response cost on sites with very large category taxonomies.

**Parameters**

- `$limit` (integer) Maximum categories to load — default `500`

**Usage**

```php
add_filter('fluent_support/doc_post_categories_limit', function ($limit) {
    return 100;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/doc_post_categories_limit', 500)`

This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/TicketFormController.php`
</div>
</explain-block>

<explain-block title="fluent_support_license_grace_period_days">
<hr>
<div class="fs-docs-content">
This filter hook allows you to override the number of grace-period days allowed after a license check fails to report a value, before Pro features are restricted.

**Parameters**

- `$graceDays` (integer) Grace period in days — default `15`

**Usage**

```php
add_filter('fluent_support/license_grace_period_days', function ($graceDays) {
    return 30;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/license_grace_period_days', 15)`

This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/LicenseController.php`
</div>
</explain-block>

<explain-block title="fluent_support_max_webhook_payload_size">
<hr>
<div class="fs-docs-content">
This filter hook allows you to override the maximum accepted payload size (in bytes) for an incoming email-box webhook, to protect against memory exhaustion from oversized requests.

**Parameters**

- `$maxPayloadSize` (integer) Maximum payload size in bytes — default `5242880` (5 MB)

**Usage**

```php
add_filter('fluent_support/max_webhook_payload_size', function ($maxPayloadSize) {
    return 10 * 1024 * 1024; // 10 MB
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/max_webhook_payload_size', 5 * 1024 * 1024)`

This filter is located in <br>
`fluent-support-pro/app/Http/Controllers/EmailBoxController.php`
</div>
</explain-block>


