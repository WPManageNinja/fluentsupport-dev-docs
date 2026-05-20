---
outline: deep
---

# Internal Notifications

<Badge type="info" text="Fluent Support Core" /> <Badge type="tip" text="Since 2.2.0" />

## Overview

The Internal Notifications module delivers real-time in-app notifications to agents directly inside the Fluent Support admin panel. Agents receive a notification bell with an unread count and a notification feed covering ticket assignments, customer replies, @mentions, status changes, and workflow triggers.

The module must be enabled in **Global Settings → Internal Notifications** before any notifications are stored or delivered.

---

## Notification Event Types

Each notification is identified by an `event_type` slug. The table below lists all built-in event types and their categories.

| Event Type | Category | Triggered When |
|---|---|---|
| `ticket_assigned` | `ticket_activity` | A ticket is assigned to an agent for the first time |
| `ticket_reassigned` | `ticket_activity` | A ticket is reassigned to a different agent |
| `customer_replied` | `ticket_activity` | A customer adds a reply to a ticket |
| `agent_replied` | `ticket_activity` | Another agent replies on a ticket assigned to the recipient |
| `ticket_closed` | `ticket_activity` | A ticket is closed |
| `ticket_reopened` | `ticket_activity` | A ticket is reopened |
| `agent_mentioned` | `mentions` | An agent is @mentioned in a reply or internal note |
| `workflow_triggered` | `automation_triggers` | An automation workflow runs on a ticket |

---

## Programmatic API

### Creating a Custom Notification

Use `NotificationService::createNotification()` to dispatch an internal notification from your own plugin or theme code.

```php
use FluentSupport\App\Services\Notifications\NotificationService;

$notificationService = new NotificationService();

$notificationService->createNotification(
    [
        'actor_id'        => $agentPersonId,   // int|null — who performed the action
        'ticket_id'       => $ticket->id,       // int
        'conversation_id' => $response->id,     // int|null
        'event_type'      => 'ticket_assigned', // see event type table above
        'channel'         => 'web',             // only 'web' is supported
        'payload'         => [
            'ticket_title'    => $ticket->title,
            'ticket_priority' => $ticket->priority,
        ],
    ],
    [$recipientPersonId] // array of fs_persons.id values to notify
);
```

**Important notes:**

- `createNotification()` returns `null` and does nothing if the Internal Notifications feature is disabled in Global Settings, if the specific event category is disabled, or if the recipients list is empty after filtering.
- Self-notifications are suppressed by default (the `actor_id` is removed from the recipients list unless the **Allow Self Notifications** setting is enabled).
- `$recipientPersonIds` must contain values from `fs_persons.id` (not WordPress user IDs).
- The `event_type` must be one of the eight built-in slugs in the table above. Passing an unrecognized type throws an `InvalidArgumentException`.

---

### Hooking Into Existing Notification Events

The notification module responds to existing Fluent Support action hooks. You can add your own handlers at the same priority to run custom logic alongside the built-in notifications.

```php
// Run when an agent is assigned to a ticket
add_action('fluent_support/agent_assigned_to_ticket', function ($agent, $ticket, $assigner, $previousAgentId) {
    // your custom logic here
}, 20, 4);

// Run when a customer replies
add_action('fluent_support/response_added_by_customer', function ($response, $ticket, $customer) {
    // your custom logic here
}, 20, 3);

// Run when a ticket is closed
add_action('fluent_support/ticket_closed', function ($ticket, $person) {
    // your custom logic here
}, 20, 2);
```

For the full list of available action hooks see the [Action Hooks reference](/hooks/actions/).

---

## Database Tables

The Internal Notifications module creates two tables on first use:

| Table | Purpose |
|---|---|
| `wp_fs_notifications` | Stores one record per notification event |
| `wp_fs_notification_users` | Stores per-recipient read/unread state |

Tables are created lazily the first time Internal Notifications is enabled in Global Settings. They are not created on plugin activation unless the setting is already on.

See the [Database Schema](/database/) for full column definitions.
