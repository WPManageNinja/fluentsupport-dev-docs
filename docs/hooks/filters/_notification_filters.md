<explain-block title="fluent_support_should_send_notification">
<hr>
<div class="fs-docs-content">
This filter hook allows you to programmatically control when notifications are sent. It gives you control over Core email notifications and Pro notification channels such as Slack, Telegram, Discord, and Twilio.

**Parameters**

- '$shouldSend' (bool) Whether the notification should be sent (default: true)
- '$channel' (string) Notification channel: email, slack, telegram, discord, twilio
- '$type' (string) Notification event type (see available notification types below)
- '$ticket' (object) The ticket object
- '$person' (object) The customer or agent object

**Usage**

```php
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    // ...do something
    return $shouldSend;
}, 10, 5);
```

**Reference**

`apply_filters('fluent_support/should_send_notification', $shouldSend, $channel, $type, $ticket, $person)`

**Availability**

- `email` channel is available in Fluent Support Core
- `slack`, `telegram`, `discord`, and `twilio` channels require Fluent Support Pro

**Available Notification Types**

**Email Channel:**

| Type | Description |
|----------------------------------------------|----------------------------------------------------------|
| ticket_created_email_to_customer             | Email sent to customer when a ticket is created          |
| ticket_created_email_to_admin                | Email sent to admin when a ticket is created             |
| ticket_replied_by_agent_email_to_customer    | Email sent to customer when an agent replies             |
| ticket_closed_by_agent_email_to_customer     | Email sent to customer when a ticket is closed           |
| ticket_replied_by_customer_email_to_admin    | Email sent to admin/agent when a customer replies        |
| ticket_agent_on_change                       | Email sent to agent when assigned to a ticket            |
| ticket_created_by_agent_email_to_customer    | Email sent to customer when agent creates ticket on behalf|

**Slack, Telegram, Discord, Twilio Channels:**

| Type                        | Description                                    |
|-----------------------------|------------------------------------------------|
| ticket_created              | Notification when a new ticket is created      |
| ticket_closed               | Notification when a ticket is closed           |
| response_added_by_customer  | Notification when a customer replies           |
| ticket_assigned             | Notification when an agent is assigned         |

**Examples**

Add any of the following examples to your theme's `functions.php` or a custom plugin.

**1. Block All Notifications for a Specific Channel**

```php
// Disable all Slack notifications
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    if ($channel === 'slack') {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

**2. Block Customer Reply Notifications on a Specific Channel**

```php
// Stop Telegram notifications when a customer replies, keep other events
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    if ($channel === 'telegram' && $type === 'response_added_by_customer') {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

**3. Block All Reply Notifications Across All Channels**

```php
// Block all reply notifications (email + integrations)
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    $replyTypes = [
        'ticket_replied_by_agent_email_to_customer',
        'ticket_replied_by_customer_email_to_admin',
        'response_added_by_customer',
    ];
    if (in_array($type, $replyTypes)) {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

**4. Block Ticket Creation Notification for Specific Customers**

```php
// Don't send ticket creation emails for specific customer emails
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    $blockedEmails = ['test@example.com', 'noreply@company.com'];
    $createTypes = [
        'ticket_created_email_to_customer',
        'ticket_created_email_to_admin',
        'ticket_created_by_agent_email_to_customer',
        'ticket_created',
    ];
    if (in_array($type, $createTypes) && $person && in_array($person->email, $blockedEmails)) {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

**5. Block Notifications for Tickets Assigned to Specific Agents**

```php
// Suppress notifications for tickets assigned to specific agents
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    $excludedAgentIds = [5, 12]; // agent person IDs
    if ($ticket && in_array($ticket->agent_id, $excludedAgentIds)) {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

**6. Quiet Hours — Block Notifications During Off-Hours**

```php
// No notifications between 10pm and 8am (site timezone)
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    $hour = (int) current_time('G');
    if ($hour >= 22 || $hour < 8) {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

**7. Block Only Customer-Facing Emails (Keep Admin Notifications)**

```php
// Stop all emails to customers, keep admin/agent notifications
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    $customerEmails = [
        'ticket_created_email_to_customer',
        'ticket_replied_by_agent_email_to_customer',
        'ticket_closed_by_agent_email_to_customer',
        'ticket_created_by_agent_email_to_customer',
    ];
    if ($channel === 'email' && in_array($type, $customerEmails)) {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

**8. Block Notifications for a Specific Ticket**

```php
// Suppress all notifications for specific ticket IDs
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    $silentTickets = [42, 99];
    if ($ticket && in_array($ticket->id, $silentTickets)) {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

**9. Block Ticket Close Notifications Only**

```php
// Don't notify when tickets are closed
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    $closeTypes = [
        'ticket_closed_by_agent_email_to_customer',
        'ticket_closed',
    ];
    if (in_array($type, $closeTypes)) {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

**10. Allow Only Email, Block All Other Channels**

```php
// Only send email notifications, disable Slack/Telegram/Discord/WhatsApp
add_filter('fluent_support/should_send_notification', function ($shouldSend, $channel, $type, $ticket, $person) {
    if ($channel !== 'email') {
        return false;
    }
    return $shouldSend;
}, 10, 5);
```

This filter is located in <br>
`fluent-support/app/Hooks/Handlers/EmailNotificationHandler.php`,<br>
`fluent-support-pro/app/Services/Integrations/Slack/SlackNotification.php`,<br>
`fluent-support-pro/app/Services/Integrations/Telegram/TelegramNotification.php`,<br>
`fluent-support-pro/app/Services/Integrations/Discord/DiscordNotification.php`,<br>
`fluent-support-pro/app/Services/Integrations/Twilio/TwilioNotification.php`
</div>
</explain-block>
