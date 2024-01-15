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

<summary class="fs-docs-title">fluent_support_before_ticekt_create</summary>
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

**Note:** `$conversationType` is a dynamically assigned conversation type. Here, `$person->person_type denotes` the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/' . $conversationType . '_added_by_' . $person->person_type, $response, $ticket, $person)`

This action is located in <br>
`fluent-support/app/Models/Conversation.php`
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
`fluent-support/app/Models/Ticket.php`
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
- '$fallbackBox' (object) Fallback Mailbox data

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
- '$fallbackBox' (object) Fallback Mailbox data

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





      













