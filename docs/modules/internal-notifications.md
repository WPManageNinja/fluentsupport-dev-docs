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

Use the static `NotificationService::notify()` method to dispatch an internal notification from your own plugin or theme code.

```php
use FluentSupport\App\Modules\Notifications\NotificationService;

/**
 * @param string $event      One of the event types above (or a NotificationService constant)
 * @param array  $data       ticket_id, actor_id, conversation_id, payload
 * @param int[]  $recipients Agent IDs (fs_persons.id) to notify
 * @return \FluentSupport\App\Models\Notification|null
 */
$notification = NotificationService::notify(
    NotificationService::TICKET_ASSIGNED, // 'ticket_assigned'
    [
        'actor_id'        => $agentPersonId,   // int|null, who performed the action
        'ticket_id'       => $ticket->id,      // int
        'conversation_id' => $response->id,    // int|null
        'payload'         => [
            'ticket_title'    => $ticket->title,
            'ticket_priority' => $ticket->priority,
        ],
    ],
    [$recipientPersonId]
);
```

**Important notes:**

- `notify()` returns `null` and does nothing if Internal Notifications is disabled in Global Settings, if that event is turned off in the notification settings, or if the recipients list is empty after filtering. `agent_mentioned` has no setting and cannot be turned off on its own.
- Self-notifications are suppressed by default: the `actor_id` is removed from the recipients unless the **Allow Self Notifications** setting is enabled.
- Recipients must be agent IDs from `fs_persons.id`, not WordPress user IDs. Duplicates and empty values are removed.
- Notifications are always stored for the `web` channel; there is no channel argument.
- Use one of the eight built-in event types. The type is not validated: an unknown value is stored with no category (and raises an undefined-index PHP notice), so it won't show under any category filter.

### Reading Notifications

The same class reads an agent's notifications. All methods are static and take the agent's `fs_persons.id`:

| Method | Returns |
|---|---|
| `query($personId, $filters = [])` | Query builder for the agent's notifications, newest first, limited to tickets the agent can still see. `$filters`: `status` (`read` / `unread`), `category`, `ticket_id`. `null` while the feature is off |
| `unreadCount($personId, $filters = [])` | Unread count (`int`). `$filters`: `category`, `ticket_id` |
| `markRead($personId, $notificationId = null)` | Marks one notification read, or all of them when the ID is omitted. Returns the rows changed |
| `isEnabled()` | Whether Internal Notifications is turned on |

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
