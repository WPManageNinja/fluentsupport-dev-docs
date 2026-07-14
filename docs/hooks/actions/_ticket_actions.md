<explain-block title="fluent_support_before_ticket_create">
<hr>
<div class="fs-docs-content">
This action is triggered before a ticket is created

**Parameters**

- '$ticket' (object) Ticket object
- '$customer' (object) Customer object

**Usage**

```php
add_action('fluent_support/before_ticket_create', function ($ticket, $customer) {
     // ...do something
}, 20, 2);
```

**Reference**

`do_action('fluent_support/before_ticket_create', $ticketData, $customer)`

This action is located in <br>
`fluent-support/app/Http/Services/CustomerPortalService.php`,<br>
`fluent-support/app/Http/Models/Ticket.php`,<br> 
`fluent-support/app/Services/Integrations/FluentForm/FeedIntegration`,<br>
`fluent-support/app/Services/Integrations/FluentCrm/CreateTicketAction`,<br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler`
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
`fluent-support/app/Http/Services/CustomerPortalService.php`,<br>
`fluent-support/app/Http/Models/Ticket.php`,<br>
`fluent-support/app/Services/Integrations/FluentForm/FeedIntegration`,<br>
`fluent-support/app/Services/Integrations/FluentCrm/CreateTicketAction`,<br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler`

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
`fluent-support/app/Models/Ticket.php`,<br>
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
`fluent-support/app/Models/Ticket.php`
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
`fluent-support/app/Models/Ticket.php`
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
`fluent-support/app/Http/Controllers/TicketController.php`,<br>
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
- '$ticket' (integer) Ticket data
- '$customer' (object) Customer data
- '$agent' (object) Agent data


**Usage**

```php
add_action('fluent_support/agent_assigned_to_ticket', function ($ticket, $customer, $agent) {
     // ...do something
}, 10, 3);
```
**Reference**

`do_action('fluent_support/agent_assigned_to_ticket', $ticket->agent, $ticket, $assigner)`

This action is located in <br>
`fluent-support/app/Models/Ticket.php`,<br>
`fluent-support/app/Services/Tickets/ResponseService.php`,<br>
`fluent-support-pro/app/Services/Workflow/ActionRunner.php`
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
`fluent-support/app/Services/Tickets/ResponseService.php`,<br>
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

**Note:** `$person->person_type denotes` the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/ticket_closed_by_' . $person->person_type, $ticket, $person)`

This action is located in <br>
`fluent-support/app/Models/ResponseService.php`,<br>
`fluent-support/app/Services/Tickets/TicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_ticket_reopen">
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket is reopened.

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
`fluent-support/app/Services/Tickets/TicketService.php`

</div>
</explain-block>

<explain-block title="fluent_support_after_ticket_reopen_by_any_person">
<hr>
<div class="fs-docs-content">
This action is triggered after a ticket is reopened by any person.

**Parameters**
- '$ticket' (object) Ticket data
- '$person' (object) Person data

**Usage**

```php
add_action('fluent_support/ticket_reopen_by_' . $person->person_type, function($ticket, $person) {
   // Do your stuff here
}, 20, 2);
```

**Note:** `$person->person_type denotes` the type of person, whether it be an agent, user, etc.

**Reference**

`do_action('fluent_support/ticket_reopen_by_' . $person->person_type, $ticket, $person)`

This action is located in <br>
`fluent-support/app/Services/Tickets/TicketService.php`

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

This action is located in <br>
`fluent-support/app/Http/Controllers/TicketController.php`
</div>

</explain-block>
