<explain-block title="fluent_support_before_assigning_role">
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

</explain-block>

<explain-block title="fluent_support_after_assigning_role">

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

</explain-block>

<explain-block title="fluent_support_attachment_uploaded_as_temp">
<hr>
<div class="fs-docs-content">
This action is triggered when attachment uploaded as temporary

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
</explain-block>

<explain-block title="fluent_support_workflow_triggered">
<hr>
<div class="fs-docs-content">
This action is triggered after a workflow is executed for a ticket.

**Parameters**
- '$workflow' (object) Workflow object
- '$ticket' (object) Ticket object
- '$actor' (object) Customer or agent who triggered the workflow
- '$context' (array) Additional workflow context data

**Usage**

```php
add_action('fluent_support/workflow_triggered', function ($workflow, $ticket, $actor, $context) {
     // ...do something
}, 10, 4);
```

**Reference**

`do_action('fluent_support/workflow_triggered', $workflow, $ticket, $actor, $context)`

This action is located in <br>
`fluent-support-pro/app/Hooks/Handlers/WorkflowHandler.php`,<br>
`fluent-support-pro/app/Http/Controllers/WorkflowsController.php`

</div>
</explain-block>

<explain-block title="fluent_support_customer_created">
<hr>
<div class="fs-docs-content">
This action is triggered after a new customer record is created in Fluent Support.

**Parameters**
- '$customer' (object) Customer object

**Usage**

```php
add_action('fluent_support/customer_created', function ($customer) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/customer_created', $customer)`

This action is located in <br>
`fluent-support/app/Models/Customer.php`,<br>
`fluent-support/app/Http/Controllers/TicketController.php`
</div>

</explain-block>

<explain-block title="fluent_support_after_creating_any_response">
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
`fluent-support/app/Models/Conversation.php`,<br>
`fluent-support/app/Services/Tickets/ResponseService.php`

</div>
</explain-block>

<explain-block title="fluent_support_before_delete_email_box">
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
</explain-block>

<explain-block title="fluent_support_mailbox_deleted">
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
</explain-block>

<explain-block title="fluent_support_telegram_payload_error">
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

</explain-block>

<explain-block title="fluent_support_slack_signature_verification_failed">
<hr>
<div class="fs-docs-content">
This action is triggered when Slack webhook signature verification fails.

**Parameters**
- '$reason' (string) Verification failure reason

**Usage**

```php
add_action('fluent_support/slack_signature_verification_failed', function ($reason) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/slack_signature_verification_failed', $reason)`

This action is located in <br>
`fluent-support-pro/app/Services/Integrations/WebhookSignatureVerifier.php`

</div>
</explain-block>

<explain-block title="fluent_support_delete_remote_attachment_third_party_in_use">
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
</explain-block>

<explain-block title="fluent_support_verify_dropbox_code">
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
</explain-block>

<explain-block title="fluent_support_run_action_from_any_saved_action">
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

**Note:** `$action->action_name` represents the type of action.

**Reference**

`do_action('fluent_support/run_action_' . $action->action_name, $action, $this->workflow, $this->ticket)`

This action is located in <br>
`fluent-support-pro/app/Services/Workflow/ActionRunner.php`

</div>
</explain-block>

<explain-block title="fluent_support_ai_response_success">
<hr>
<div class="fs-docs-content">
This action is triggered after an AI provider successfully generates a response. Use it to log usage, enforce limits, or record token consumption per agent or ticket.

**Parameters**
- '$ticketId' (integer) ID of the ticket for which the response was generated
- '$prompt' (string) The prompt sent to the AI provider
- '$tokens' (integer) Number of tokens consumed by the request
- '$providerName' (string) The active provider name, e.g. `'openai'`, `'gemini'`, `'anthropic'`, `'FluentBot'`

**Usage**

```php
add_action('fluent_support/ai_response_success', function ($ticketId, $prompt, $tokens, $providerName) {
     // log token usage per provider
}, 10, 4);
```

**Reference**

`do_action('fluent_support/ai_response_success', $ticketId, $prompt, $tokens, $providerName)`

This action is located in <br>
`fluent-support/app/Services/Integrations/AI/BaseAIProvider.php`,<br>
`fluent-support/app/Services/Integrations/FluentBot/FluentBotAPI.php`
</div>

</explain-block>

<explain-block title="fluent_support_mcp_loaded">
<hr>
<div class="fs-docs-content">
This action is triggered after the MCP module has registered all its tools and is fully initialised. Use it to register additional tools or modify MCP state after the default toolkit is in place.

**Parameters**

None.

**Usage**

```php
add_action('fluent_support/mcp_loaded', function () {
     // MCP is ready — register extra tools or modify state
}, 10, 0);
```

**Reference**

`do_action('fluent_support/mcp_loaded')`

This action is located in <br>
`fluent-support/app/Modules/MCP/MCPInit.php`
</div>

</explain-block>

<explain-block title="fluent_support_mcp_tool_exception">
<hr>
<div class="fs-docs-content">
This action is triggered when an MCP tool's execute callback throws an exception during a tool call, in both Core and Pro-registered tools. Use it to log or alert on runtime failures without exposing exception details to the AI client.

**Parameters**
- '$context' (array) Exception context — `['exception' => Throwable, 'tool' => string, 'params' => array]`

**Usage**

```php
add_action('fluent_support/mcp_tool_exception', function ($context) {
     // log $context['exception'], $context['tool'], $context['params']
}, 10, 1);
```

**Reference**

`do_action('fluent_support/mcp_tool_exception', ['exception' => $e, 'tool' => $toolName, 'params' => $params])`

This action is located in <br>
`fluent-support/app/Modules/MCP/AbilitiesRegistrar.php`,<br>
`fluent-support-pro/app/Modules/MCP/AbilitiesRegistrar.php`
</div>
</explain-block>

<explain-block title="fluent_support_tickets_query_by_permission_ref">
<hr>
<div class="fs-docs-content">
This action is triggered to let listeners scope a tickets query by the current agent's permissions before it runs. It receives the query builder by reference — mutate it directly rather than returning a value.

**Parameters**
- '$ticketsQuery' (object) Ticket query builder, passed by reference
- '$userId' (integer|boolean) User ID to scope by, or `false` to use the current user

**Usage**

```php
add_action('fluent_support/tickets_query_by_permission_ref', function (&$ticketsQuery, $userId) {
     // mutate $ticketsQuery directly
}, 10, 2);
```

**Note:** Registered internally by `PermissionFilterManager::filterAgentTickets()` to scope the query to tickets the current agent can access. It's fired from ticket listing, notification queries, and several MCP tool query paths.

**Reference**

`do_action_ref_array('fluent_support/tickets_query_by_permission_ref', [&$ticketsQuery, $userId])`

This action is located in <br>
`fluent-support/app/Http/Controllers/TicketController.php`,<br>
`fluent-support/app/Hooks/Handlers/PermissionFilterManager.php`,<br>
`fluent-support/app/Services/Notifications/NotificationQueryService.php`,<br>
`fluent-support/app/Modules/MCP/Tools/ManagementTools.php`, `CustomerTools.php`, `TicketTools.php`,<br>
`fluent-support-pro/app/Http/Controllers/WorkflowsController.php`
</div>
</explain-block>

<explain-block title="fluent_support_customer_portal_tickets_query">
<hr>
<div class="fs-docs-content">
This action is triggered to let listeners modify the customer's own ticket list query in the Customer Portal before it runs.

**Parameters**
- '$ticketsQuery' (object) Ticket query builder, passed by reference
- '$customer' (object) The customer viewing their ticket list
- '$request' (object) The current request

**Usage**

```php
add_action('fluent_support/customer_portal/tickets_query', function (&$ticketsQuery, $customer, $request) {
     // mutate $ticketsQuery directly
}, 10, 3);
```

**Reference**

`do_action_ref_array('fluent_support/customer_portal/tickets_query', [&$ticketsQuery, $customer, $request])`

This action is located in <br>
`fluent-support/app/Http/Controllers/CustomerPortalController.php`
</div>
</explain-block>

<explain-block title="fluent_support_finalize_file_upload_by_driver">
<hr>
<div class="fs-docs-content">
This action is triggered after an attachment's local file is finalized on a ticket, letting a remote storage driver push it off-server.

**Parameters**
- '$attachment' (object) Attachment record, passed by reference
- '$ticketId' (integer) Ticket ID the attachment belongs to

**Usage**

```php
add_action('fluent_support/finalize_file_upload_amazon_s3', function (&$attachment, $ticketId) {
     // upload to S3 and update $attachment with the remote path/url
}, 10, 2);
```

**Note:** `{driver}` is the active storage driver slug — Pro ships `amazon_s3`, `cloudflare_r2`, `dropbox`, and `google_drive`.

**Reference**

`do_action_ref_array('fluent_support/finalize_file_upload_' . $storageDriver, [&$attachment, $ticket->id])`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`,<br>
`fluent-support/app/Services/Tickets/ResponseService.php`,<br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`,<br>
`fluent-support-pro/app/Services/FileUploadIntegration/AmazonS3/Bootstrap.php`, `CloudflareR2/Bootstrap.php`, `Dropbox/Bootstrap.php`, `GoogleDrive/Bootstrap.php`
</div>
</explain-block>

<explain-block title="fluent_support_attachment_uploaded_as_temp_by_driver">
<hr>
<div class="fs-docs-content">
This action is triggered after an attachment is uploaded as a temporary file for a specific storage driver, in addition to the generic `fluent_support/attachment_uploaded_as_temp` action above.

**Parameters**
- '$attachment' (object) Attachment record, passed by reference
- '$ticketId' (integer) Ticket ID

**Usage**

```php
add_action('fluent_support/attachment_uploaded_as_temp_dropbox', function (&$attachment, $ticketId) {
     // ...do something
}, 10, 2);
```

**Note:** `{driver}` is the active storage driver slug — Pro ships `amazon_s3`, `cloudflare_r2`, `dropbox`, and `google_drive`.

**Reference**

`do_action_ref_array('fluent_support/attachment_uploaded_as_temp_' . $driver, [&$attachment, $ticketId])`

This action is located in <br>
`fluent-support/app/Http/Controllers/UploaderController.php`,<br>
`fluent-support-pro/app/Services/FileUploadIntegration/AmazonS3/Bootstrap.php`, `CloudflareR2/Bootstrap.php`, `Dropbox/Bootstrap.php`, `GoogleDrive/Bootstrap.php`
</div>
</explain-block>

<explain-block title="fluent_support_update_verification_failed">
<hr>
<div class="fs-docs-content">
This action is triggered when a plugin update package fails signature/source verification and the update is blocked.

**Parameters**
- '$slug' (string) The plugin slug being updated
- '$code' (string) Machine-readable rejection code
- '$message' (string) Human-readable rejection message shown to the user

**Usage**

```php
add_action('fluent_support/update_verification_failed', function ($slug, $code, $message) {
     // log or alert on a blocked update
}, 10, 3);
```

**Reference**

`do_action('fluent_support/update_verification_failed', $this->slug, $code, $message)`

This action is located in <br>
`fluent-support-pro/app/Services/PluginManager/UpdateVerifier.php`
</div>
</explain-block>

<explain-block title="fluent_support_verify_google_code">
<hr>
<div class="fs-docs-content">
This action is triggered to handle Google Drive authorization.

**Parameters**
- '$code' (string) Google OAuth verification code

**Usage**

```php
add_action('fluent_support_pro/verify_google_code', function ($code) {
     // ...do something
}, 10, 1);
```
**Reference**

`do_action('fluent_support_pro/verify_google_code', $code)`

This action is located in <br>
`fluent-support-pro/app/Http/Controllers/AuthorizeController.php`

</div>
</explain-block>