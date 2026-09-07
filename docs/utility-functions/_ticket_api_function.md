---
outline: deep
---
The ticket API Function provides a range of utility methods that enable you to retrieve data according to your specific requirements when working within your custom PHP Snippet or plugin.

### Initialization
```php 
$ticketApi = FluentSupportApi('tickets');
```
`FluentSupportApi('tickets')` basically returns `FluentSupport\App\Api\Classes\Tickets` Model class instance.

### Methods 

### getTickets()
This method will return all available tickets
```php 
/*
* getTickets method will return all tickets
* @return: object
*/
$tickets = $ticketApi->getTickets();
```
### getTicket($id)
The getTicket method retrieves data for a specific ticket.
```php 
/*
* getTicket method will return a specific ticket by id
* @param int $id
* @return: object|false
*/
$ticket = $ticketApi->getTicket($id);
```

### addResponse($data, $agentId, $ticketId)
The addResponse method will create a response by agent for a specific ticket.
```php 
/*
* addResponse method add response to a ticket by agent and ticket ID
* @param array $data
* @param int $agentId
* @param int $ticketId
* @return array|boolean
*/
$data = $ticketApi->addResponse($data, $agentId, $ticketId);
```

### createTicket($data)
The createTicket method will create a new ticket.
```php
/*
 * createTicket method will create a new ticket
 * @param array $data
 * @return object| boolean
 */
$data = $ticketApi->createTicket($data);
```

**Note:** `$data` must include `customer_id` (an existing customer), `title`, and `content` — the call returns `false` if any of these are missing.

### getInstance()
If you want to get the basic `FluentSupport\App\Models\Ticket` model, you can achieve it with the following code

```php 
$ticketInstance = FluentSupportApi('tickets')->getInstance();
```

### Other methods

In addition to the methods above, `$ticketApi` proxies these `Ticket` model query methods directly, so they can be called on the API instance itself:

```php 
$allTickets = $ticketApi->all();        // all tickets, no pagination
$tickets    = $ticketApi->get();        // tickets matching any prior query constraints
$ticket     = $ticketApi->find($id);    // find by ID, or null if not found
$ticket     = $ticketApi->first();      // first ticket matching any prior query constraints
$tickets    = $ticketApi->paginate();   // same as getTickets()
```