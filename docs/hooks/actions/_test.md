<!-- <explain-block title="fluent-support/_ticket_actions">

[//]: # (0)
<details  class="fs-docs-collapse">


### <summary id="title" class="fs-docs-title"> Title</summary>
<hr>
<div class="fs-docs-content">
This action will run to get the ticket and customer data before ticket create.

**Parameters**

- '$ticket' (object) Ticket object
- '$customer' (object) Customer object

**Usage**

```php
add_action('fluent_support/before_ticket_create', function ($ticket, $customer) {
     // ...do something
}, 20, 2);
```

**Reference**

`do_action('fluent_support/before_ticket_create', $ticketData, $customer)`

This action is located in <br>
`fluent-support/app/Http/Services/CustomerPortalService.php`,
`fluent-support/app/Http/Models/Ticket.php`, 
`fluent-support/app/Services/Integrations/FluentForm/FeedIntegration` ,
`fluent-support/app/Services/Integrations/FluentCrm/CreateTicketAction` ,
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler`
</div>

</details>
</explain-block> -->




<explain-block title="fs-docs-title/webhook_request_args">
<hr>
You can modify webhook request arguments using the filter.

**Parameters**

- `$payload` (array) Webhook Request Payload
- `$settings` (array) Webhook Feed
- `$formData` (array) Form Data
- `$form` (object) Form Object
- `$entryId` (int) Submission ID

**Usage**

```php
add_filter('fluentform/webhook_request_args', function ($payload, $settings, $formData, $form, $entryId) {
    // Do your stuff here
    
    return $payload;
}, 10, 5);

```

**Reference**

`apply_filters('fluentform/webhook_request_args', $payload, $settings, $formData, $form, $entry->id);`

This filter is located in FluentFormPro\src\Integrations\WebHook\NotifyTrait -> notify($feed, $formData, $entry, $form)

</explain-block>

<explain-block title="webhook_request_args">

You can modify webhook request arguments using the filter.

**Parameters**

- `$payload` (array) Webhook Request Payload
- `$settings` (array) Webhook Feed
- `$formData` (array) Form Data
- `$form` (object) Form Object
- `$entryId` (int) Submission ID

**Usage**

```php
add_filter('fluentform/webhook_request_args', function ($payload, $settings, $formData, $form, $entryId) {
    // Do your stuff here
    
    return $payload;
}, 10, 5);

```

**Reference**

`apply_filters('fluentform/webhook_request_args', $payload, $settings, $formData, $form, $entry->id);`

This filter is located in FluentFormPro\src\Integrations\WebHook\NotifyTrait -> notify($feed, $formData, $entry, $form)

</explain-block>