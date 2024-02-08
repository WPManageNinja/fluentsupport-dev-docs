<explain-block title="fluent-support/ticket_filters">

[//]: # (0)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_create_validation_rules</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve validation rules for ticket and modify it.

**Parameters**

- '$rules' (array) Validation rules for ticket

**Usage**

```php
add_filter('fluent_support/ticket_create_validation_rules', function ($rules) {
    // ...do something
    return $rules
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/ticket_create_validation_rules', $rules)`

This filter is located in <br>
`fluent-support/app/Http/Requests/TicketRequest.php`
</div>

</details>

[//]: # (1)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_create_validation_messages</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve validation messages for a ticket and modify it.

**Parameters**

- '$messages' (array) Validation messages for a ticket

**Usage**

```php
add_filter('fluent_support/ticket_create_validation_messages', function ($messages) {
    // ...do something
    return $messages
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/ticket_create_validation_messages', $messages)`

This filter is located in <br>
`fluent-support/app/Http/Requests/TicketRequest.php`
</div>

</details>

[//]: # (2)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_customer_ticket_priorities</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve customer ticket priority list and modify it.

**Parameters**

- '$priorities' (array) Customer ticket priority list

**Usage**

```php
add_filter('fluent_support/customer_ticket_priorities', function ($priorities) {
    // ...do something
    return $priorities
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/customer_ticket_priorities', [
            'normal'   => __('Normal', 'fluent-support'),
            'medium'   => __('Medium', 'fluent-support'),
            'critical' => __('Critical', 'fluent-support')
        ])`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>

</details>

[//]: # (3)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_admin_ticket_priorities</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve admin ticket priority list and modify it.

**Parameters**

- '$priorities' (array) Admin ticket priority list

**Usage**

```php
add_filter('fluent_support/admin_ticket_priorities', function ($priorities) {
    // ...do something
    return $priorities
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/admin_ticket_priorities', [
            'normal'   => __('Normal', 'fluent-support'),
            'medium'   => __('Medium', 'fluent-support'),
            'critical' => __('Critical', 'fluent-support')
        ])`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>

</details>

[//]: # (4)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_status_groups</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve ticket status groups and modify it.

**Parameters**

- '$statusGroups' (array) Ticket status groups

**Usage**

```php
add_filter('fluent_support/ticket_status_groups', function ($statusGroups) {
    // ...do something
    return $statusGroups
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/ticket_status_groups', [
            'open'   => ['new', 'active'],
            'active' => ['active'],
            'closed' => ['closed'],
            'new'    => ['new'],
            'all'    => []
        ])`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>

</details>

[//]: # (5)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_changeable_ticket_statuses</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve changeable ticket status groups and modify it.

**Parameters**

- '$ticketStatus' (array) Changeable ticket status groups

**Usage**

```php
add_filter('fluent_support/changeable_ticket_statuses', function ($ticketStatus) {
    // ...do something
    return $ticketStatus
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/changeable_ticket_statuses', $ticketStatus)`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>

</details>

[//]: # (6)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_statuses</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve ticket statuses and modify it.

**Parameters**

- '$ticketStatuses' (array) Ticket statuses

**Usage**

```php
add_filter('fluent_support/ticket_statuses', function ($ticketStatuses) {
    // ...do something
    return $ticketStatuses
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/ticket_statuses', [
            'new'    => __('New', 'fluent-support'),
            'active' => __('Active', 'fluent-support'),
            'closed' => __('Closed', 'fluent-support'),
        ])`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>

</details>

[//]: # (7)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_accepted_ticket_mimes</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve accepted mimes and modify it.

**Parameters**

- '$mimes' (array) Accepted mimes

**Usage**

```php
add_filter('fluent_support/accepted_ticket_mimes', function ($mimes) {
    // ...do something
    return $mimes
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/accepted_ticket_mimes', $mimes)`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>

</details>

[//]: # (8)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_mime_groups</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve mime groups and modify it.

**Parameters**

- '$mimeGroups' (array) Mime groups

**Usage**

```php
add_filter('fluent_support/mime_groups', function ($mimeGroups) {
    // ...do something
    return $mimeGroups
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/mime_groups', $mimeGroups)`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>

</details>

[//]: # (9)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_portal_base_url</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve portal base url and modify it.

**Parameters**

- '$baseUrl' (string) Portal base url

**Usage**

```php
add_filter('fluent_support/portal_base_url', function ($baseUrl) {
    // ...do something
    return $baseUrl
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/portal_base_url', $baseUrl)`

This filter is located in <br>
`fluent-support/app/Services/Helper.php`
</div>

</details>

[//]: # (10)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_can_user_add_tags_to_customer</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve user can add tags permission and  modify it.

**Parameters**

- '$canAddTags' (boolean) User can add tags or not permission

**Usage**

```php
add_filter('fluent_support/can_user_add_tags_to_customer', function ($canAddTags) {
    // ...do something
    return $canAddTags
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/can_user_add_tags_to_customer', $canAddTags)`

This filter is located in <br>
`fluent-support/app/Models/Ticket.php`
</div>

</details>

[//]: # (11)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_custom_field_render</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve custom fields data and modify it.

**Parameters**

- '$value' (string) Custom fields value
- '$scope' (string) Specifies whether it is for admin or public use

**Note:** `$fieldType` represents the type of custom field, whether it is a text field, number field, etc.

**Usage**

```php
add_filter('fluent_support/custom_field_render_' . $fieldType , function ($value, $scope) {
    // ...do something
    return $value
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/custom_field_render_' . $fieldType, $value, $scope)`

This filter is located in <br>
`fluent-support/app/Models/Ticket.php`
</div>

</details>

[//]: # (12)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_custom_fields</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve custom fields and modify it.

**Parameters**

- '$customFields' (array) Custom fields

**Usage**

```php
add_filter('fluent_support/ticket_custom_fields', function ($customFields) {
    // ...do something
    return $customFields
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/ticket_custom_fields', [])`

This filter is located in <br>
`fluent-support/app/Models/Ticket.php`
</div>

</details>

[//]: # (13)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_disabled_ticket_fields</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve disable ticket fields and modify it.

**Parameters**

- '$fields' (array) Disable ticket fields

**Usage**

```php
add_filter('fluent_support/disabled_ticket_fields', function ($fields) {
    // ...do something
    return $fields
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/disabled_ticket_fields', [])`

This filter is located in <br>
`fluent-support/app/Models/Ticket.php`,
`fluent-support/app/Http/Controllers/UploaderController.php`,
`fluent-support/app/Services/CustomerPortalService.php`,
`fluent-support-pro/app/Hooks/filters.php`
</div>

</details>

[//]: # (14)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_create_ticket_data</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve ticket and customer data and modify it.

**Parameters**

- '$ticketData' (array) Ticket data
- 'customer' (object) Customer data

**Usage**

```php
add_filter('fluent_support/create_ticket_data', function ($ticketData, $customer) {
    // ...do something
    return $ticketData
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/create_ticket_data', $ticketData, $customer)`

This filter is located in <br>
`fluent-support/app/Models/Ticket.php`,
`fluent-support/app/Services/Integrations/CreateTicketAction.php`,
`fluent-support/app/Services/CustomerPortalService.php`,
`fluent-support/app/Services/Integrations/FluentForm/FeedIntegration.php`,
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`

</div>

</details>

[//]: # (15)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_previous_ticket_widgets_limit</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve previous ticket widgets limit and modify it.

**Parameters**

- '$limit' (integer) Previous ticket widgets limit

**Usage**

```php
add_filter('fluent_support/previous_ticket_widgets_limit', function ($limit) {
    // ...do something
    return $limit
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/previous_ticket_widgets_limit', 10)`

This filter is located in <br>
`fluent-support/app/Models/Ticket.php`
</div>

</details>

[//]: # (16)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_fst_menu_url_base</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve fluent support admin url base data and modify it.

**Parameters**

- '$urlBase' (string) Fluent support admin url base

**Usage**

```php
add_filter('fluent_support/fst_menu_url_base', function ($urlBase) {
    // ...do something
    return $urlBase
}, 10, 1)
```

**Reference**

`$urlBase = apply_filters(
    'fst_menu_url_base',
    admin_url('admin.php?page=fluent-support#/')
)`

This filter is located in <br>
`fluent-support/app/Services/Tickets/TicketStats.php`
</div>

</details>

[//]: # (16)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_fst_menu_url_base</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve list of quick links data and modify it.

**Parameters**

- '$quickLinks' (array) List of quick links

**Usage**

```php
add_filter('fluent_support/fst_menu_url_base', function ($quickLinks) {
    // ...do something
    return $quickLinks
}, 10, 1)
```

**Reference**

`apply_filters('fst_quick_links', $quickLinks))`

<b>`$quickLinks` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating the quick links data such as active tickets, total tickets, etc.</b>


This filter is located in <br>
`fluent-support/app/Services/Tickets/TicketStats.php`
</div>

</details>

</explain-block>