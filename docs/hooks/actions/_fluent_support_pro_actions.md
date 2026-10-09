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
