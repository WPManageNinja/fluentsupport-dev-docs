
<explain-block title="fluent_support_parse_smartcode_data">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve smart code data.

**Parameters**

- '$response' (array) Response of a ticket
- '$customer' (array) Ticket and its associate data

**Usage**

```php
add_filter('fluent_support/parse_smartcode_data', function ($response, $data) {
    // ...do something
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/parse_smartcode_data', $data['content'], [
                'customer' => $ticket->customer,
                'agent'    => $person
            ])
`


This filter is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`,
`fluent-support/app/Hooks/Handlers/EmailNotificationHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_reset_waiting_since">
<hr>
<div class="fs-docs-content">
This filter hook enables you to retrieve the reset waiting state and response data, providing you with the ability to customize the data.

**Parameters**

- '$state' (boolean) The reset waiting since state for a ticket
- '$content' (string) Conversation data

**Usage**

```php
add_filter('fluent_support/reset_waiting_since', function ($state, $content) {
    // ...do something
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/reset_waiting_since', true, $content)`


This filter is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`,
`fluent-support/app/Model/Tickets/Conversation.php`
</div>
</explain-block>

<explain-block title="fluent_support_response_content_before_use_anywhere">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve response data before it is used anywhere, providing you with the ability to customize the data.

**Parameters**

- '$content' (string) Conversation data

**Usage**

```php
add_filter('fluent_support/response_content_before_use_anywhere', function ($content) {
    // ...do something
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/response_content_before_use_anywhere', $content)`


This filter is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`
</div>
</explain-block>

<explain-block title="fluent_support_before_creating_any_response">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve ticket, person and response data before creating the response.

**Parameters**

- '$response' (array) Response data
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_filter('fluent_support/new_' . $person_type . '_' . $convoType, function ($response, $ticket, $person) {
    // ...do something
}, 10, 3)
```

**Note:** `$person->person_type` contains the type of a person, whether it be an agent, user, etc., with `$convoType` being a dynamically assigned conversation type.

**Reference**

`apply_filters('fluent_support/new_' . $person->person_type . '_' . $convoType, $response, $ticket, $person)`


This filter is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_close_internal_note">
<hr>
<div class="fs-docs-content">
This filter hook enables you to retrieve and modify internal notes and ticket data.

**Parameters**

- '$internalNote' (string) Internal note message
- '$ticket' (object) Ticket data

**Usage**

```php
add_filter('fluent_support/ticket_close_internal_note', function ($internalNote, $ticket) {
    // ...do something
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/ticket_close_internal_note', $internalNote, $ticket)`


This filter is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`
</div>
</explain-block>


