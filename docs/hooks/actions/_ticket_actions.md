<explain-block title="fluent_support_before_ticket_create">
<hr>
<div class="fs-docs-content">
This action is triggered before a ticket is created

**Parameters**

- '$ticketData' (array) Ticket data about to be saved
- '$customer' (object) Customer object

**Usage**

```php
add_action('fluent_support/before_ticket_create', function ($ticketData, $customer) {
     // ...do something
}, 20, 2);
```

**Reference**

`do_action('fluent_support/before_ticket_create', $ticketData, $customer)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`
</div>

</explain-block>

<explain-block title="fluent_support_after_ticket_create">
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket is created

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
`fluent-support/app/Services/Tickets/TicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_ticket_created_behalf_of_customer">
<hr>
<div class="fs-docs-content">
This action is triggered after an agent creates a ticket on behalf of a customer.

**Parameters**

- '$createdTicket' (object) Ticket object
- '$customer' (object) Customer object
- '$agent' (object) Agent object who created the ticket

**Usage**

```php
add_action('fluent_support/ticket_created_behalf_of_customer', function ($createdTicket, $customer, $agent) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/ticket_created_behalf_of_customer', $createdTicket, $customer, $agent)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_agent_initiated_ticket_response">
<hr>
<div class="fs-docs-content">
This action is triggered when an agent creates the initial response while opening a ticket on behalf of a customer.

**Parameters**

- '$agentResponse' (object) Created response object
- '$createdTicket' (object) Ticket object
- '$agent' (object) Agent object

**Usage**

```php
add_action('fluent_support/agent_initiated_ticket_response', function ($agentResponse, $createdTicket, $agent) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/agent_initiated_ticket_response', $agentResponse, $createdTicket, $agent)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_when_ticket_is_being_deleted">
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
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>

<explain-block title="fluent_support_after_ticket_tag_added">
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
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>
<explain-block title="fluent_support_after_ticket_tag_removed">
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
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>

<explain-block title="fluent_support_before_ticket_create_from_email">
<hr>
<div class="fs-docs-content">
This action is triggered before ticket create from email.

**Parameters**
- '$responseOrTicketData' (array) It is either ticket data or response data
- '$customer' (object) Customer data

**Usage**

```php
add_action('fluent_support/before_ticket_create_from_email', function ($responseOrTicketData, $customer) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/before_ticket_create_from_email', $responseOrTicketData, $customer)`

This action is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`

</div>
</explain-block>

<explain-block title="fluent_support_after_ticket_create_from_email">
<hr>
<div class="fs-docs-content">
This action is triggered after creating a ticket from email.

**Parameters**
- '$createdTicket' (object) Ticket data
- '$customer' (object) Customer data

**Usage**

```php
add_action('fluent_support/after_ticket_create_from_email', function ($createdTicket, $customer) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/after_ticket_create_from_email', $createdTicket, $customer)`

This action is located in <br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`

</div>
</explain-block>

<explain-block title="fluent_support_response_added_by_customer">
<hr>
<div class="fs-docs-content">
This action is triggered after a customer response is added to an existing ticket.

**Parameters**
- '$createdResponse' (object) Created response object
- '$ticket' (object) Ticket object
- '$customer' (object) Customer object

**Usage**

```php
add_action('fluent_support/response_added_by_customer', function ($createdResponse, $ticket, $customer) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/response_added_by_customer', $createdResponse, $ticket, $customer)`

This action is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php` (as `'fluent_support/response_added_by_' . $sender->person_type`),<br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`

</div>
</explain-block>

<explain-block title="fluent_support_ticket_merge">
<hr>
<div class="fs-docs-content">
This action is triggered when a ticket is merged.

**Parameters**
- '$ticket' (object) Ticket data
- '$mergedTicket' (object) Ticket data that will be merged

**Usage**

```php
add_action('fluent_support/ticket_merge', function ($ticket, $mergedTicket) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_merge', $ticket, $mergedTicket)`

This action is located in <br>
`fluent-support-pro/app/Services/ProTicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_before_ticket_split">
<hr>
<div class="fs-docs-content">
This action is triggered before a ticket is split.

**Parameters**
- '$actualTicketId' (string) Ticket ID
- '$conversationId' (integer) Conversation ID
- 'data' (array) New ticket data

**Usage**

```php
add_action('fluent_support/before_ticket_split', function ($actualTicketId, $conversationId, $data) {
     // ...do something
}, 10, 3);
```
**Reference**

`do_action('fluent_support/before_ticket_split', $actualTicketId, $conversationId, $data)`

This action is located in <br>
`fluent-support-pro/app/Services/ProTicketService.php`

</div>
</explain-block>
<explain-block title="fluent_support_after_ticket_split">
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket is split.

**Parameters**
- '$actualTicketId' (string) Ticket ID
- '$newTicket' (object) Ticket data


**Usage**

```php
add_action('fluent_support/after_ticket_split', function ($actualTicketId, $newTicket) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/after_ticket_split', $actualTicketId, $newTicket)`

This action is located in <br>
`fluent-support-pro/app/Services/ProTicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_before_move_tickets">
<hr>
<div class="fs-docs-content">
This action is triggered before moving tickets.

**Parameters**
- '$data' (array) Mailbox ID
- '$oldBox' (object) Current mailbox data
- '$newBox' (object) Data for the new mailbox where selected tickets will be moved

**Usage**

```php
add_action('fluent_support/before_move_tickets', function ($data, $oldBox, $newBox) {
     // ...do something
}, 10, 3);
```
**Reference**

`do_action('fluent_support/before_move_tickets', $data, $oldBox, $newBox)`

This action is located in <br>
`fluent-support/app/Services/MailerInbox/MailBoxService.php`

</div>
</explain-block>

<explain-block title="fluent_support_tickets_moved">
<hr>
<div class="fs-docs-content">
This action is triggered after tickets are moved.

**Parameters**
- '$data' (array) Details about mailbox data
- '$oldBox' (object) Current mailbox data
- '$newBox' (object) Data for the new mailbox where selected tickets will be moved

**Usage**

```php
add_action('fluent_support/tickets_moved', function ($data, $oldBox, $newBox) {
     // ...do something
}, 10, 3);
```
**Reference**

`do_action('fluent_support/tickets_moved', $data, $oldBox, $newBox)`

This action is located in <br>
`fluent-support/app/Services/MailerInbox/MailBoxService.php`

</div>
</explain-block>

<explain-block title="fluent_support_ticket_agent_change">
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket agent is changed.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_agent_change', function ($ticket, $person) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_agent_change', $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_ticket_deleted">
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket agent is changed.

**Parameters**
- '$agent' (object) Agent data
- '$ticketData' (array) Ticket data

**Usage**

```php
add_action('fluent_support/ticket_deleted', function ($agent, $ticketData) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_deleted', $agent, $ticketData)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_agent_assigned_to_ticket">
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket is assigned to an agent.

**Parameters**
- '$agent' (object) The agent the ticket is now assigned to
- '$ticket' (object) Ticket object
- '$assigner' (object) The agent (or person) who made the assignment
- '$previousAgentId' (integer|null) ID of the agent the ticket was assigned to before. Not passed when a Pro workflow assigns the ticket, so give it a default.

**Usage**

```php
add_action('fluent_support/agent_assigned_to_ticket', function ($agent, $ticket, $assigner, $previousAgentId = null) {
     // ...do something
}, 10, 4);
```
**Reference**

`do_action('fluent_support/agent_assigned_to_ticket', $ticket->agent, $ticket, $assigner, $previousAgentId)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_closed">
<hr>
<div class="fs-docs-content">
This action is triggered after ticket is closed.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_closed', function ($ticket, $person) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_closed', $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_after_ticket_closed_by_any_person">
<hr>
<div class="fs-docs-content">
This action is triggered after ticket closed by any person.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_closed_by_' . $person->person_type, function($ticket, $person) {
   // Do your stuff here
}, 20, 2);
```

**Note:** `$person->person_type` denotes the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/ticket_closed_by_' . $person->person_type, $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`,<br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_ticket_reopen">
<hr>
<div class="fs-docs-content">
This action is triggered after a closed ticket is reopened, whether by an agent (ticket view, bulk action, MCP tools), a customer (portal reply or reopen button) or an incoming piped email (Pro).

Both reopen actions are fired by `TicketService::fireReopenHooks()`. `TicketService::reopen()` calls it right after the ticket is saved as `active`. When an MCP reply reopens a ticket, the reopen, reply and any assignment run in one database transaction, and the reopen actions fire only after that transaction commits, before the assignment and reply actions.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_reopen', function ($ticket, $person) {
     // ...do something
}, 10, 2);
```
**Reference**

`do_action('fluent_support/ticket_reopen', $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php` (`fireReopenHooks()`), called from `TicketService::reopen()` and, after commit, from<br>
`fluent-support/app/Modules/MCP/Tools/ResponseTools.php`

</div>
</explain-block>

<explain-block title="fluent_support_after_ticket_reopen_by_any_person">
<hr>
<div class="fs-docs-content">
This action is triggered after a closed ticket is reopened, with the person type in the hook name (`fluent_support/ticket_reopen_by_agent`, `fluent_support/ticket_reopen_by_customer`). It fires right after `fluent_support/ticket_reopen`, from `TicketService::fireReopenHooks()`, so it follows the same timing, including the after-commit timing for MCP replies.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_reopen_by_' . $person->person_type, function($ticket, $person) {
   // Do your stuff here
}, 20, 2);
```

**Note:** `$person->person_type` denotes the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/ticket_reopen_by_' . $person->person_type, $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php` (`fireReopenHooks()`), called from `TicketService::reopen()` and, after commit, from<br>
`fluent-support/app/Modules/MCP/Tools/ResponseTools.php`

</div>
</explain-block>

<explain-block title="fluent_support_response_added_by_agent">
<hr>
<div class="fs-docs-content">
This action is triggered after an agent adds a response to a ticket.

**Parameters**
- '$response' (object) The created response object
- '$ticket' (object) Ticket object
- '$person' (object) Person object who added the response

**Usage**

```php
add_action('fluent_support/response_added_by_agent', function ($response, $ticket, $person) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/response_added_by_agent', $response, $ticket, $person)`

It also fires when a draft reply is published (admin Approve or the MCP `publish-draft-reply` tool). Then `$person` is the draft's author, not the approver.

This action is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`
</div>

</explain-block>

<explain-block title="fluent_support_agent_feedback_received">
<hr>
<div class="fs-docs-content">
This action is triggered when a customer rates an agent's reply in the customer portal with a like or a dislike (since 2.4.5).

It fires when a reply gets a new rating, or when the customer switches the rating from like to dislike (or back). Clicking the same rating again removes it and fires nothing. Each rating value fires at most once per reply, so a reply can trigger this action at most twice (once for `like`, once for `dislike`). Clicking back and forth, or removing and re-adding a rating, does not fire it again. Only agent replies (`response` conversations written by an agent) can be rated.

Fluent Support Pro uses this action as the "On Customer Feedback" workflow trigger.

**Parameters**
- '$rating' (string) `like` or `dislike`
- '$conversation' (object) The rated reply (Conversation model)
- '$ticket' (object) Ticket data
- '$customer' (object) The customer who left the rating

**Usage**

```php
add_action('fluent_support/agent_feedback_received', function ($rating, $conversation, $ticket, $customer) {
    if ($rating === 'dislike') {
        // ...flag the reply for review
    }
}, 10, 4);
```
**Reference**

`do_action('fluent_support/agent_feedback_received', $rating, $conversation, $ticket, $ticket->customer)`

This action is located in <br>
`fluent-support/app/Modules/CustomerPortal/PortalService.php`

</div>
</explain-block>

<explain-block title="fluent_support_ticket_status_changed">
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket status changes, from any path (the admin ticket screen, bulk actions, MCP, workflows). It also fires when a ticket is closed or reopened, so it covers every non-silent status change.

**Parameters**

- '$ticket' (object) Ticket data
- '$oldStatus' (string) Previous status
- '$newStatus' (string) New status
- '$by' (object|null) The person (agent) who made the change. `null` only for an automation with no agent

**Usage**

```php
add_action('fluent_support/ticket_status_changed', function ($ticket, $oldStatus, $newStatus, $by) {
     // ...do something
}, 10, 4);
```

**Reference**

`do_action('fluent_support/ticket_status_changed', $ticket, $oldStatus, $newStatus, $by)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_priority_changed">
<hr>
<div class="fs-docs-content">
This action is triggered after the admin priority of a ticket changes.

**Parameters**

- '$ticket' (object) Ticket data
- '$oldPriority' (string) Previous priority
- '$newPriority' (string) New priority
- '$by' (object|null) The person (agent) who made the change. `null` only for an automation with no agent

**Usage**

```php
add_action('fluent_support/ticket_priority_changed', function ($ticket, $oldPriority, $newPriority, $by) {
     // ...do something
}, 10, 4);
```

**Reference**

`do_action('fluent_support/ticket_priority_changed', $ticket, $oldPriority, $newPriority, $by)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_updated">
<hr>
<div class="fs-docs-content">
This action is triggered after any of a ticket's changeable fields (`title`, `status`, `priority`, `client_priority`, `product_id`, `customer_id`) change. It fires once per update with every changed field.

**Parameters**

- '$ticket' (object) Ticket data
- '$changed' (array) The changed fields: `field => [from, to]`
- '$by' (object|null) The person (agent) who made the change. `null` only for an automation with no agent

**Usage**

```php
add_action('fluent_support/ticket_updated', function ($ticket, $changed, $by) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/ticket_updated', $ticket, $changed, $by)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_unassigned">
<hr>
<div class="fs-docs-content">
This action is triggered after the assigned agent is removed from a ticket. It does not fire when the ticket had no agent.

**Parameters**

- '$ticket' (object) Ticket data
- '$previousAgentId' (int) ID of the agent who was removed
- '$by' (object|null) The person who unassigned the ticket. `null` for an automation with no agent

**Usage**

```php
add_action('fluent_support/ticket_unassigned', function ($ticket, $previousAgentId, $by) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/ticket_unassigned', $ticket, $previousAgentId, $by)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_watchers_added">
<hr>
<div class="fs-docs-content">
This action is triggered after one or more agents are added as watchers of a ticket. Agents who were already watching are left out of `$agentIds`.

**Parameters**

- '$ticket' (object) Ticket data
- '$agentIds' (array) IDs of the agents added
- '$by' (object|null) The person who added them

**Usage**

```php
add_action('fluent_support/ticket_watchers_added', function ($ticket, $agentIds, $by) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/ticket_watchers_added', $ticket, $added, $by)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_watchers_removed">
<hr>
<div class="fs-docs-content">
This action is triggered after one or more watchers are removed from a ticket. It only fires when at least one agent was actually removed.

**Parameters**

- '$ticket' (object) Ticket data
- '$agentIds' (array) IDs of the agents removed
- '$by' (object|null) The person who removed them

**Usage**

```php
add_action('fluent_support/ticket_watchers_removed', function ($ticket, $agentIds, $by) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/ticket_watchers_removed', $ticket, $removed, $by)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>

<explain-block title="fluent_support_response_updated">
<hr>
<div class="fs-docs-content">
This action is triggered after a reply, internal note or draft is edited.

**Parameters**

- '$response' (object) The edited response (Conversation model)
- '$ticket' (object) Ticket data
- '$by' (object) The person who edited it

**Usage**

```php
add_action('fluent_support/response_updated', function ($response, $ticket, $by) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/response_updated', $response, Ticket::find($response->ticket_id), $by)`

This action is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`
</div>
</explain-block>

<explain-block title="fluent_support_response_deleted">
<hr>
<div class="fs-docs-content">
This action is triggered after a reply, internal note or draft is deleted. The row is already gone from the database when it fires.

**Parameters**

- '$response' (object) The deleted response (Conversation model)
- '$ticket' (object) Ticket data
- '$by' (object) The person who deleted it

**Usage**

```php
add_action('fluent_support/response_deleted', function ($response, $ticket, $by) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/response_deleted', $response, $ticket, $by)`

This action is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`
</div>
</explain-block>

<explain-block title="fluent_support_ticket_content_updated">
<hr>
<div class="fs-docs-content">
This action is triggered after a site admin replaces a ticket's opening message, for example to remove sensitive data (since 2.5.0). The previous text is not kept; an activity line is added to the ticket instead.

**Parameters**

- '$ticket' (object) The updated ticket (Ticket model)
- '$by' (object) The person who edited the message

**Usage**

```php
add_action('fluent_support/ticket_content_updated', function ($ticket, $by) {
     // ...do something
}, 10, 2);
```

**Reference**

`do_action('fluent_support/ticket_content_updated', $ticket, $by)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`
</div>
</explain-block>
