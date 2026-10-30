---
outline: deep
---

# Scheduled Replies

<Badge type="warning" text="Fluent Support Pro" /> <Badge type="tip" text="Since 2.5.0" />

## Overview

An agent writes a reply now and picks a time for it to go out. Until then the reply is a pending conversation on the ticket, and the agent can edit it, send it now, resume it or cancel it. Delivery uses Action Scheduler (group `fluent-support`, hook `fluent_support/send_scheduled_reply`), so Action Scheduler must be available.

The reply box in the free plugin shows the schedule option only when Pro sets the `scheduled_replies` app variable.

---

## How it is stored

There is no separate table. A scheduled reply is a row in `fs_conversations` with a different `conversation_type`:

| `conversation_type` | Meaning |
|---|---|
| `schedule` | Pending reply, not yet sent |
| `response` | Sent. The row is switched to a normal reply when it publishes |
| `schedule_cancelled` | Cancelled by an agent |
| `note` | Converted to an internal note when its ticket is merged into another, so it never reaches the other customer |

The schedule (`scheduled_at`, `status`) lives in the conversation's settings. The status is also kept in `fs_meta` under the key `schedule_status` so it can be filtered in SQL.

### Status

- `scheduled`: queued.
- `paused`: held and not sent. Resuming it queues the reply again.

A pending reply pauses itself when the customer replies (`customer_replied`) or the ticket is closed (`ticket_closed`) after it was scheduled. The hourly task re-queues any job that was lost.

---

## REST Endpoints

Creating a reply goes through the normal reply endpoint with a `scheduled_at` timestamp. The other actions are under `fluent-support/v2/tickets`:

| Method | Route | Action |
|---|---|---|
| PUT | `/{ticket_id}/scheduled_reply/{response_id}` | Edit content or time |
| POST | `/{ticket_id}/scheduled_reply/{response_id}/send_now` | Send immediately |
| POST | `/{ticket_id}/scheduled_reply/{response_id}/resume` | Resume a paused reply |
| DELETE | `/{ticket_id}/scheduled_reply/{response_id}` | Cancel |

---

## Hooks

Actions: `scheduled_reply_created`, `scheduled_reply_updated`, `scheduled_reply_cancelled`, `scheduled_reply_paused`, `scheduled_reply_sent`. See the [Pro actions](../hooks/actions/_fluent_support_pro_actions.md).

Filters:

- `fluent_support/scheduled_reply_max_days`: how far ahead a reply can be scheduled (default 90). See the [Pro filters](../hooks/filters/_fluent_support_pro_filters.md).
- `fluent_support/schedule_response`: lets a handler take over scheduling. See the [ticket filters](../hooks/filters/_ticket_filters.md).

```php
add_filter('fluent_support/scheduled_reply_max_days', function ($days) {
    return 30;
});
```
