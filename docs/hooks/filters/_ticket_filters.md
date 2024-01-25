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

</explain-block>