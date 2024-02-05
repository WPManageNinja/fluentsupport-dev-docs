
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
/*
 * createTicket method will create a new ticket
 * @param array $data
 * @return object| boolean
 */
$data = $ticketApi->createTicket($data);
```