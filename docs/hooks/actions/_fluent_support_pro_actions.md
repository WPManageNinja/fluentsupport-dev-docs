### Email Piping Actions

<explain-block title="fluent_support_pro_email_bounced">
<hr>
<div class="fs-docs-content">
This action is triggered when an email sent for a ticket could not be delivered and the bounce report arrives through email piping. A bounce note has already been added to the ticket as internal info. Delay notices and "delivered" reports do not fire it. This action is available in Fluent Support Pro only.

**Parameters**

- '$ticket' (object) The ticket whose email bounced
- '$bounce' (array) Bounce details: `recipient`, `action`, `status`, `diagnostic`, `reporting_mta`, `original_*` (any may be missing)

**Usage**

```php
add_action('fluent_support_pro/email_bounced', function ($ticket, $bounce) {
     // ...do something
}, 10, 2);
```

**Reference**

`do_action('fluent_support_pro/email_bounced', $ticket, $bounce)`

This action is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/AutoMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_pro_email_auto_reply_received">
<hr>
<div class="fs-docs-content">
This action is triggered when an automatic reply (out of office, vacation) arrives on a ticket through email piping. It is added to the ticket as an internal note instead of a customer response, so it does not reopen the ticket or notify agents. This action is available in Fluent Support Pro only.

**Parameters**

- '$ticket' (object) The ticket the auto-reply threads to
- '$senderEmail' (string) Sender email address

**Usage**

```php
add_action('fluent_support_pro/email_auto_reply_received', function ($ticket, $senderEmail) {
     // ...do something
}, 10, 2);
```

**Reference**

`do_action('fluent_support_pro/email_auto_reply_received', $ticket, $senderEmail)`

This action is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/AutoMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_pro_email_piping_dropped">
<hr>
<div class="fs-docs-content">
This action is triggered when an incoming auto-reply or bounce belongs to no ticket and is discarded. The pipe will not resend it. The message is also recorded in a capped log (the last 50 entries) in the `fs_pipe_dropped_mail` option. This action is available in Fluent Support Pro only.

**Parameters**

- '$kind' (string) `auto_reply` or `bounce`
- '$data' (array) Raw pipe payload
- '$senderEmail' (string) Sender email address
- '$box' (object) The `MailBox` the email arrived at

**Usage**

```php
add_action('fluent_support_pro/email_piping_dropped', function ($kind, $data, $senderEmail, $box) {
     // ...do something
}, 10, 4);
```

**Reference**

`do_action('fluent_support_pro/email_piping_dropped', $kind, $data, $senderEmail, $box)`

This action is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/AutoMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_pro_auto_reply_suppressed">
<hr>
<div class="fs-docs-content">
This action is triggered when an automatic email to a customer is held back to stop a possible mail loop, because the limits of `fluent_support_pro/auto_reply_guard_max` or `fluent_support_pro/auto_reply_guard_max_same_subject` were reached. This action is available in Fluent Support Pro only.

**Parameters**

- '$customerId' (integer) Customer ID
- '$subject' (string) Ticket subject

**Usage**

```php
add_action('fluent_support_pro/auto_reply_suppressed', function ($customerId, $subject) {
     // ...do something
}, 10, 2);
```

**Reference**

`do_action('fluent_support_pro/auto_reply_suppressed', $customerId, $subject)`

This action is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/AutoReplyGuard.php`
</div>
</explain-block>

### Scheduled Reply Actions

<explain-block title="fluent_support_scheduled_reply_created">
<hr>
<div class="fs-docs-content">
This action is triggered after an agent schedules a reply to be sent later (since 2.5.0). This action is available in Fluent Support Pro only.

**Parameters**

- '$conversation' (object) The scheduled reply (Conversation model)
- '$ticket' (object) Ticket data
- '$agent' (object) The agent who scheduled it

**Usage**

```php
add_action('fluent_support/scheduled_reply_created', function ($conversation, $ticket, $agent) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/scheduled_reply_created', $conversation, $ticket, $agent)`

This action is located in <br>
`fluent-support-pro/app/Modules/ScheduledReplies/ScheduledReplyService.php`
</div>
</explain-block>

<explain-block title="fluent_support_scheduled_reply_updated">
<hr>
<div class="fs-docs-content">
This action is triggered after a scheduled reply's text, send time or options change (since 2.5.0). This action is available in Fluent Support Pro only.

**Parameters**

- '$conversation' (object) The scheduled reply (Conversation model)

**Usage**

```php
add_action('fluent_support/scheduled_reply_updated', function ($conversation) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/scheduled_reply_updated', $conversation)`

This action is located in <br>
`fluent-support-pro/app/Modules/ScheduledReplies/ScheduledReplyService.php`
</div>
</explain-block>

<explain-block title="fluent_support_scheduled_reply_cancelled">
<hr>
<div class="fs-docs-content">
This action is triggered after a scheduled reply is cancelled (since 2.5.0). The conversation row is already deleted when it fires. This action is available in Fluent Support Pro only.

**Parameters**

- '$conversation' (object) The cancelled reply (Conversation model)
- '$cancelledBy' (object|null) The person who cancelled it

**Usage**

```php
add_action('fluent_support/scheduled_reply_cancelled', function ($conversation, $cancelledBy) {
     // ...do something
}, 10, 2);
```

**Reference**

`do_action('fluent_support/scheduled_reply_cancelled', $conversation, $cancelledBy)`

This action is located in <br>
`fluent-support-pro/app/Modules/ScheduledReplies/ScheduledReplyService.php`
</div>
</explain-block>

<explain-block title="fluent_support_scheduled_reply_paused">
<hr>
<div class="fs-docs-content">
This action is triggered when a scheduled reply is held for an agent to review instead of being sent (since 2.5.0). This action is available in Fluent Support Pro only.

**Parameters**

- '$conversation' (object) The scheduled reply (Conversation model)
- '$reason' (string) Why it was paused: `customer_replied`, `ticket_closed`, `agent_unavailable` or `missed`

**Usage**

```php
add_action('fluent_support/scheduled_reply_paused', function ($conversation, $reason) {
     // ...do something
}, 10, 2);
```

**Reference**

`do_action('fluent_support/scheduled_reply_paused', $conversation, $reason)`

This action is located in <br>
`fluent-support-pro/app/Modules/ScheduledReplies/ScheduledReplyService.php`
</div>
</explain-block>

<explain-block title="fluent_support_scheduled_reply_sent">
<hr>
<div class="fs-docs-content">
This action is triggered after a scheduled reply has been sent to the customer (since 2.5.0). If the reply was set to close the ticket, the ticket is already closed. This action is available in Fluent Support Pro only.

**Parameters**

- '$conversation' (object) The sent reply (Conversation model)
- '$ticket' (object) Ticket data
- '$agent' (object) The agent the reply is sent as

**Usage**

```php
add_action('fluent_support/scheduled_reply_sent', function ($conversation, $ticket, $agent) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/scheduled_reply_sent', $conversation, $ticket, $agent)`

This action is located in <br>
`fluent-support-pro/app/Modules/ScheduledReplies/ScheduledReplyService.php`
</div>
</explain-block>

<explain-block title="fluent_support_remote_portal_connected">
<hr>
<div class="fs-docs-content">
This action is triggered after a remote site connects to this site's Remote Portal. This action is available in Fluent Support Pro only.

**Parameters**

- '$siteUrl' (string) URL of the connected remote site
- '$userId' (int) ID of the current user

**Usage**

```php
add_action('fluent_support/remote_portal_connected', function ($siteUrl, $userId) {
     // ...do something
}, 10, 2);
```

**Reference**

`do_action('fluent_support/remote_portal_connected', $siteUrl, $userId)`

This action is located in <br>
`fluent-support-pro/app/Http/Controllers/RemotePortalController.php`
</div>
</explain-block>

<explain-block title="fluent_support_remote_portal_disconnected">
<hr>
<div class="fs-docs-content">
This action is triggered after the Remote Portal connection is removed. This action is available in Fluent Support Pro only.

**Parameters**

- '$userId' (int) ID of the current user

**Usage**

```php
add_action('fluent_support/remote_portal_disconnected', function ($userId) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/remote_portal_disconnected', $userId)`

This action is located in <br>
`fluent-support-pro/app/Http/Controllers/RemotePortalController.php`, `fluent-support-pro/app/Http/Controllers/RemotePortalSettingsController.php`
</div>
</explain-block>
