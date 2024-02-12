<explain-block title="fluent_support_mail_to_customer_header">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve mailbox header data and modify it.

**Parameters**

- '$headers' (array) Mailbox header data
- '$data' (array) CC email list and hook type data

**Usage**

```php
add_filter('fluent_support/mail_to_customer_header', function ($headers, $data) {
    // ...do something
    return $headers;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/mail_to_customer_header', $headers, [
                'cc_email'  => $ticket->getSettingsValue('cc_email', []),
                'hook_type' => 'ticket_created_email_to_customer'
            ])
`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/EmailNotificationHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_email_footer_credit">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve email footer data and modify it.

**Parameters**

- '$message' (string) email footer data

**Usage**

```php
add_filter('fluent_support/email_footer_credit', function ($message) {
    // ...do something
    return $message;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/email_footer_credit', $message)`

<b>`$message` is used here as an illustrative variable to represent the raw string value found in the main filter, demonstrating the email footer data.</b>


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/EmailNotificationHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_email_setting_keys">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve email settings key data and modify it.

**Parameters**

- '$emailSettingsKey' (array) email settings key data

**Usage**

```php
add_filter('fluent_support/email_setting_keys', function ($emailSettingsKey) {
    // ...do something
    return $emailSettingsKey;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/email_setting_keys', $emailSettingsKey )`

<b>`$emailSettingsKey` is used here as an illustrative variable to represent the raw string value found in the main filter, demonstrating the mail settings key data.</b>


This filter is located in <br>
`fluent-support/app/Services/EmailNotification/Settings.php`
</div>
</explain-block>
