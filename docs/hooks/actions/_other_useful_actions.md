<explain-block title="fluent-support/_other_useful_actions">

[//]: # (0)
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

[//]: # (1)
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



[//]: # (2)
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

[//]: # (3)
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

**Note:** `$conversationType` is a dynamically assigned conversation type (some hooks use it as `$convoType`). Here, `$person->person_type` contain the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/' . $conversationType . '_added_by_' . $person->person_type, $response, $ticket, $person)`

This action is located in <br>
`fluent-support/app/Models/Conversation.php`,
`fluent-support/app/Services/Tickets/ResponseService.php`

</div>

</details>

[//]: # (4)
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

[//]: # (5)
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

[//]: # (6)
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


[//]: # (7)
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

[//]: # (8)
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


[//]: # (9)
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

</explain-block>