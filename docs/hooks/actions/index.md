# Fluent Support Actions Hooks

###

<Badge type="info" text="Fluent Support Core" /> <Badge type="tip" text="Intermediate" />

[//]: # (what is hook?)
**Hooks** are a way of interacting/modifying specific, pre-defined code.

**Action hooks** provide a way for running a function at a specific point in the execution of WordPress.
Callback functions for an Action do not return anything back to the calling Action hook.
Fluent Support has a lot of action hooks. You can use these hooks to customize the plugin. You can also use these hooks to
extend the plugin’s
functionality.

## Available Action Hooks
There are a lot of action hooks in Fluent Support core and Fluent Support Pro.
Here You can find the proper guidelines, handy code snippets, full code examples and code reference of using all action hooks.

## Fluent Support Core Actions

[//]: # (0)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_ticket_create</summary>
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

[//]: # (1)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_ticekt_create</summary>
<hr>
<div class="fs-docs-content">
This action will run to get the ticket and customer data.

**Parameters**

- '$ticket' (object) Ticket object
- '$customer' (object) Customer object

**Usage**

```php
add_action('fluent_support/ticket_created', function ($ticket, $customer) {
     // ...do something
}, 20, 2);
```

**Reference**

`do_action('fluent_support/ticket_created', $ticket, $customer)`

This action is located in <br>
`fluent-support/app/Http/Services/CustomerPortalService.php`,
`fluent-support/app/Http/Models/Ticket.php`, 
`fluent-support/app/Services/Integrations/FluentForm/FeedIntegration` ,
`fluent-support/app/Services/Integrations/FluentCrm/CreateTicketAction` ,
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler`

</div>

</details>

[//]: # (2)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_admin_app_loaded</summary>
<hr>
<div class="fs-docs-content">
This action fires after fluent support admin app is loaded.

**Parameters**
- '$app' (object) App Instance

**Usage**

```php
add_action('fluent_support/admin_app_loaded', function ($app) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/admin_app_loaded', $app)`

This action is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (3)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_when_admin_app_is_loading</summary>
<hr>
<div class="fs-docs-content">
This action fires when fluent support admin app is loading.

**Parameters**
- '$app' (object) App Instance

**Usage**

```php
add_action('fluent_support_loading_app', function ($app) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support_loading_app', $app`

This action is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (4)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_signup_validation</summary>
<hr>
<div class="fs-docs-content">
This action fires before fluent support user signup.

**Parameters**
- '$formData' (array) User form data

**Usage**

```php
add_action('fluent_support/before_signup_validation', function ($formData) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/before_signup_validation', $formData)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (5)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_signup_validation</summary>
<hr>
<div class="fs-docs-content">
This action fires after fluent support user signup.

**Parameters**
- '$formData' (array) User form data

**Usage**

```php
add_action('fluent_support/after_signup_validation', function ($formData) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/after_signup_validation', $formData)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (6)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_creating_user</summary>
<hr>
<div class="fs-docs-content">
This action fires after creating a WP user from ticket sign up form.

**Parameters**
- '$formData' (array) User form data

**Usage**

```php
add_action('fluent_support/after_creating_user', function () {
     // ...do something
});
```

**Reference**

`do_action('fluent_support/after_creating_user')`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (7)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_creating_user</summary>
<hr>
<div class="fs-docs-content">
This action is triggered before the creation of a WordPress user from the ticket sign-up form.

**Parameters**
- '$userName' (string) Username of the user
- '$password' (string) Password for the user account
- '$email' (string) Email address associated with the user account

**Usage**

```php
add_action('fluent_support/before_creating_user', function ($userName, $password, $email) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/before_creating_user', $userName, $password, $email)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (8)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_updating_user</summary>
<hr>
<div class="fs-docs-content">
This action is triggered before updating user data.

**Parameters**
- '$data' (array) User data

**Usage**

```php
add_action('fluent_support/before_updating_user', function ($data) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/before_updating_user', $data)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (9)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_updating_user</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after updating user data.

**Parameters**
- '$data' (array) User data

**Usage**

```php
add_action('fluent_support/after_updating_user', function ($data) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/after_updating_user', $data)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (10)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_assigning_role</summary>
<hr>
<div class="fs-docs-content">
This action is triggered before assigning a role to a user.

**Parameters**
- '$user' (array) User data

**Usage**

```php
add_action('fluent_support/before_assigning_role', function ($user) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/before_assigning_role', $user)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (11)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_assigning_role</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after assigning a role to a user.

**Parameters**
- '$user' (array) User data

**Usage**

```php
add_action('fluent_support/after_assigning_role', function ($user) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/after_assigning_role', $user)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (12)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_logging_in_user</summary>
<hr>
<div class="fs-docs-content">
This action is triggered before a user logs in.

**Parameters**
- '$userId' (integer) User ID

**Usage**

```php
add_action('fluent_support/before_logging_in_user', function ($userId) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/before_logging_in_user', $userId)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (13)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_logging_in_user</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a user logs in.

**Parameters**
- '$userId' (integer) User ID

**Usage**

```php
add_action('fluent_support/after_logging_in_user', function ($userId) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/after_logging_in_user', $userId)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>

</details>

[//]: # (14)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_attachment_uploaded_as_temp</summary>
<hr>
<div class="fs-docs-content">
This action is triggered when attachment uploaded as temporary. asdet

**Parameters**
- '$attachment' (object) Attachment data
- 'ticketId' (integer) Ticket ID

**Usage**

```php
add_action('fluent_support/attachment_uploaded_as_temp', function ($attachment, $ticketId) {
     // ...do something
}, 10, 2);
```

**Reference**

`do_action('fluent_support/attachment_uploaded_as_temp', $attachment, $ticketId)`

This action is located in <br>
`fluent-support/app/Http/Controllers/UploaderController.php`
</div>

</details>

[//]: # (15)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_creating_any_response</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after creating any response.

**Parameters**
- '$createdResponse' (object) Response data
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/' . $conversationType . '_added_by_' . $person->person_type,
function($createdResponse, $ticket, $person) {
   // Do your stuff here
}, 20, 3);
```

**Note:** `$conversationType` is a dynamically assigned conversation type (some hooks use it as `$convoType`). Here, `$person->person_type denotes` the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/' . $conversationType . '_added_by_' . $person->person_type, $response, $ticket, $person)`

This action is located in <br>
`fluent-support/app/Models/Conversation.php`,
`fluent-support/app/Services/Tickets/ResponseService.php`

</div>

</details>

[//]: # (16)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_ticket_created</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after creating any customer.

**Parameters**
- '$customer' (object) Customer data

**Usage**

```php
add_action('fluent_support/customer_created', function ($customer) {
     // ...do something
}, 10, 1);
```
**Reference**

`do_action('fluent_support/customer_created', $customer)`

This action is located in <br>
`fluent-support/app/Models/Customer.php`
</div>

</details>

[//]: # (17)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_when_ticket_is_being_deleted</summary>
<hr>
<div class="fs-docs-content">
This action is triggered when a ticket is being deleted.

**Parameters**
- '$ticket' (object) Ticket data

**Usage**

```php
add_action('fluent_support/deleting_ticket', function ($ticket) {
     // ...do something
}, 10, 1);
```
**Reference**

`do_action('fluent_support/deleting_ticket', $this)`

This action is located in <br>
`fluent-support/app/Models/Ticket.php`,
`fluent-support/app/Services/Tickets/TicketService.php`
</div>

</details>

[//]: # (18)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_ticket_tag_added</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket tag is added

**Parameters**
- '$tagId' (integer) Tag ID
- '$ticket' (object) Ticket data


**Usage**

```php
add_action('fluent_support/ticket_tag_added', function ($tagId, $ticket) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_tag_added', $tagId, $this)`

This action is located in <br>
`fluent-support/app/Models/Ticket.php`
</div>

</details>

[//]: # (19)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_ticket_tag_removed</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket tag is removed

**Parameters**
- '$tagId' (integer) Tag ID
- '$ticket' (object) Ticket data


**Usage**

```php
add_action('fluent_support/ticket_tag_removed', function ($tagId, $ticket) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_tag_removed', $tagId, $this)`

This action is located in <br>
`fluent-support/app/Models/Ticket.php`
</div>

</details>


[//]: # (21)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_agent_assigned_to_ticket</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket is assigned to an agent.

**Parameters**
- '$ticket' (integer) Ticket data
- '$customer' (object) Customer data
- '$agent' (object) Agent data


**Usage**

```php
add_action('fluent_support/agent_assigned_to_ticket', function ($ticket, $customer, $agent) {
     // ...do something
}, 10, 3);
```
**Reference**

`do_action('fluent_support/agent_assigned_to_ticket', $ticket->agent, $ticket, $assigner)`

This action is located in <br>
`fluent-support/app/Models/Ticket.php`,
`fluent-support/app/Services/Tickets/ResponseService.php`,
`fluent-support-pro/app/Services/Workflow/ActionRunner.php`
</div>

</details>

[//]: # (22)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_delete_email_box</summary>
<hr>
<div class="fs-docs-content">
This action is triggered before deleting a mailbox.

**Parameters**
- '$box' (object) Mailbox data
- '$fallbackBox' (object) Fallback mailbox data

**Usage**

```php
add_action('fluent_support/before_delete_email_box', function ($box, $fallbackBox) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/before_delete_email_box', $box, $fallbackBox)`

This action is located in <br>
`fluent-support/app/Services/MailerInbox/MailBoxService.php`

</div>

</details>

[//]: # (23)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_mailbox_deleted</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after deleting a mailbox.

**Parameters**
- '$mailBoxId' (integer) Mailbox ID
- '$fallbackBox' (object) Fallback mailbox data

**Usage**

```php
add_action('fluent_support/mailbox_deleted', function ($mailBoxId, $fallbackBox) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/mailbox_deleted', $mailBoxId, $fallbackBox)`

This action is located in <br>
`fluent-support/app/Services/MailerInbox/MailBoxService.php`

</div>

</details>

[//]: # (24)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_move_tickets</summary>
<hr>
<div class="fs-docs-content">
This action is triggered before moving tickets.

**Parameters**
- '$data' (array) Mailbox ID
- '$oldBox' (object) Current mailbox data
- '$newBox' (object) Data for the new mailbox where selected tickets will be moved

**Usage**

```php
add_action('fluent_support/before_move_tickets', function ($data, $oldBox, $newBox) {
     // ...do something
}, 10, 3);
```
**Reference**

`do_action('fluent_support/before_move_tickets', $data, $oldBox, $newBox)`

This action is located in <br>
`fluent-support/app/Services/MailerInbox/MailBoxService.php`

</div>

</details>

[//]: # (25)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_tickets_moved</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after tickets are moved.

**Parameters**
- '$data' (array) Details about mailbox data
- '$oldBox' (object) Current mailbox data
- '$newBox' (object) Data for the new mailbox where selected tickets will be moved

**Usage**

```php
add_action('fluent_support/tickets_moved', function ($data, $oldBox, $newBox) {
     // ...do something
}, 10, 3);
```
**Reference**

`do_action('fluent_support/tickets_moved', $data, $oldBox, $newBox)`

This action is located in <br>
`fluent-support/app/Services/MailerInbox/MailBoxService.php`

</div>

</details>

[//]: # (26)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_telegram_payload_error</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a Telegram payload error.

**Parameters**
- '$responseData' (array) Telegram response data
- '$payload' (array) Telegram payload data

**Usage**

```php
add_action('fluent_support/telegram_payload_error', function ($responseData, $payload) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/telegram_payload_error', $responseData, $payload)`

This action is located in <br>
`fluent-support/app/Services/ThirdParty/HandleTelegramEvent.php`

</div>

</details>

[//]: # (27)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_closed</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after ticket is closed.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_closed', function ($ticket, $person) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_closed', $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`,
`fluent-support/app/Services/Tickets/TicketService.php`

</div>

</details>

[//]: # (28)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_ticket_closed_by_any_person</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after ticket closed by any person.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_closed_by_' . $person->person_type, function($ticket, $person) {
   // Do your stuff here
}, 20, 3);
```

**Note:** `$person->person_type denotes` the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/ticket_closed_by_' . $person->person_type, $ticket, $person)`

This action is located in <br>
`fluent-support/app/Models/ResponseService.php`,
`fluent-support/app/Services/Tickets/TicketService.php`

</div>

</details>

[//]: # (29)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_reopen</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket is reopened.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_reopen', function ($ticket, $person) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_reopen', $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>

</details>

[//]: # (30)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_ticket_reopen_by_any_person</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket is reopened by any person.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_reopen_by_' . $person->person_type, function($ticket, $person) {
   // Do your stuff here
}, 20, 3);
```

**Note:** `$person->person_type denotes` the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/ticket_reopen_by_' . $person->person_type, $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>

</details>

[//]: # (31)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_agent_change</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket agent is changed.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_agent_change', function ($ticket, $person) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_agent_change', $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>

</details>

[//]: # (32)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_agent_change</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket agent is changed.

**Parameters**
- '$agent' (object) Agent data
- '$ticketData' (array) Ticket data

**Usage**

```php
add_action('fluent_support/ticket_deleted', function ($agent, $ticketData) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_deleted', $agent, $ticketData)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>

</details>

[//]: # (33)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_loaded</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after fluent support loaded.

**Parameters**
- '$application' (object) Application data

**Usage**

```php
add_action('fluent_support_loaded', function ($application) {
     // ...do something
}, 10, 1);
```
**Reference**

`do_action('fluent_support_loaded', $application)`

This action is located in <br>
`fluent-support/boot/app.php`

</div>

</details>

[//]: # (34)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_addons_loaded</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after fluent support addons loaded.

**Parameters**
- '$application' (object) Application data

**Usage**

```php
add_action('fluent_support_addons_loaded', function ($application) {
     // ...do something
}, 10, 1);
```
**Reference**

` do_action('fluent_support_addons_loaded', $application)`

This action is located in <br>
`fluent-support/boot/app.php`

</div>

</details>

[//]: # (35)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_delete_remote_attachment_third_party_in_use</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after delete remote attachment.

**Parameters**
- '$attachment' (object) attachment data
- '$ticketID' (integer) Ticket ID

**Usage**

```php
add_action('fluent_support/delete_remote_attachment_' . $attachment->driver, function ($attachment,$ticketID) {
     // ...do something
}, 10, 2);
```

**Note:** `$attachment->driver` the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/delete_remote_attachment_' . $attachment->driver, $attachment, $ticket->id)`

This action is located in <br>
`fluent-support/app/Hooks/CleanupHandler.php`

</div>

</details>

[//]: # (36)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_verify_dropbox_code</summary>
<hr>
<div class="fs-docs-content">
This action is triggered to handle Dropbox authorization.

**Parameters**
- '$code' (string) Dropbox verification code 

**Usage**

```php
add_action('fluent_support_pro/verify_dropbox_code', function ($code) {
     // ...do something
}, 10, 1);
```
**Reference**

`do_action('fluent_support_pro/verify_dropbox_code', $code)`

This action is located in <br>
`fluent-support-pro/app/Http/Controllers/AuthorizeController.php`

</div>

</details>

[//]: # (37)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_ticket_create_from_email</summary>
<hr>
<div class="fs-docs-content">
This action is triggered before ticket create from email.

**Parameters**
- '$responseOrTicketData' (array) It is either ticket data or response data
- '$customer' (object) Customer data

**Usage**

```php
add_action('fluent_support/before_ticket_create_from_email', function ($responseOrTicketData, $customer) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/before_ticket_create_from_email', $responseOrTicketData, $customer)`

This action is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`

</div>

</details>

[//]: # (38)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_ticket_create_from_email</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after creating a ticket from email.

**Parameters**
- '$createdTicket' (object) Ticket data
- '$customer' (object) Customer data

**Usage**

```php
add_action('fluent_support/after_ticket_create_from_email', function ($createdTicket, $customer) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/after_ticket_create_from_email', $createdTicket, $customer)`

This action is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`

</div>

</details>

[//]: # (39)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_merge</summary>
<hr>
<div class="fs-docs-content">
This action is triggered when a ticket is merged.

**Parameters**
- '$ticket' (object) Ticket data
- '$mergedTicket' (object) Ticket data that will be merged

**Usage**

```php
add_action('fluent_support/ticket_merge', function ($ticket, $mergedTicket) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_merge', $ticket, $mergedTicket)`

This action is located in <br>
`fluent-support-pro/app/Services/ProTicketService.php`

</div>

</details>

[//]: # (40)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_ticket_split</summary>
<hr>
<div class="fs-docs-content">
This action is triggered before a ticket is split.

**Parameters**
- '$actualTicketId' (string) Ticket ID
- '$conversationId' (integer) Conversation ID
- 'data' (array) New ticket data

**Usage**

```php
add_action('fluent_support/before_ticket_split', function ($actualTicketId, $conversationId, $data) {
     // ...do something
}, 10, 3);
```
**Reference**

`do_action('fluent_support/before_ticket_split', $actualTicketId, $conversationId, $data)`

This action is located in <br>
`fluent-support-pro/app/Services/ProTicketService.php`

</div>

</details>

[//]: # (41)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_ticket_split</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket is split.

**Parameters**
- '$actualTicketId' (string) Ticket ID
- '$newTicket' (object) Ticket data


**Usage**

```php
add_action('fluent_support/after_ticket_split', function ($actualTicketId, $newTicket) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/after_ticket_split', $actualTicketId, $newTicket)`

This action is located in <br>
`fluent-support-pro/app/Services/ProTicketService.php`

</div>

</details>

[//]: # (42)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_run_action_from_any_saved_action</summary>
<hr>
<div class="fs-docs-content">
This action is triggered when an action runs.

**Parameters**
- '$action' (string) Action name
- '$workflow' (object) Workflow data
- '$ticket' (object) Ticket data

**Usage**

```php
add_action('fluent_support/run_action_' . $action->action_name, function ($action, $workflow, $ticket) {
     // ...do something
}, 10, 3);
```

**Note:** `$action->action_name` represents the type of action name.

**Reference**

`do_action('fluent_support/run_action_' . $action->action_name, $action, $this->workflow, $this->ticket)`

This action is located in <br>
`fluent-support-pro/app/Services/Workflow/ActionRunner.php`

</div>

</details>

[//]: # (43)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_pro_loaded</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after fluent support pro loaded.

**Parameters**
- '$app' (object) Application data

**Usage**

```php
add_action('fluent_support_pro_loaded', function ($app) {
     // ...do something
}, 10, 1);
```
**Reference**

`do_action('fluent_support_pro_loaded', $app)`

This action is located in <br>
`fluent-support-pro/fluent-support-pro.php`

</div>

</details>



