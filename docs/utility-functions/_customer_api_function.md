
The Customer API Function offers various utility methods for retrieving data according to your needs within your custom PHP Snippet or plugin.

### Initialization
```php 
$customersApi = FluentSupportApi('customers');
```
`FluentSupportApi('customers')` basically returns `FluentSupport\App\Api\Classes\Customers` Model class instance.

### Methods

### getCustomers()
This method will return all available customers
```php 
/*
* getCustomers method will return a all available customers
* @return: object
*/
$customers = $customersApi->getCustomers();
```

### getCustomer($customerId)
The `getCustomer` method fetches customer data.
```php 
/*
* getCustomer method will return a specific customer by id
* @param int $customerId 
* @return object|boolean
*/
$customer = $customersApi->getCustomer($customerId);
```

### updateCustomer($data, $agentId)
This method returns customer data based on the customer_id.
```php 
/*
* Find a customer by customer_id
* You can find a customer by customer_id
* @return: null or FluentSupport\App\Models\Customer Model
*/
$customer = $customersApi->updateCustomer($data, $agentId);
```

### createCustomerWithOrWithoutWpUser($data, $createWpUser)
Create a customer with or without a corresponding WordPress user. If $createWpUser is true.
```php 
/*
 * createCustomerWithOrWithoutWpUser method creates a new customer, with or without a corresponding WordPress user.
 * If creating a WordPress user is requested, the process involves first creating the WordPress user,
 * and upon successful creation, proceeds to create a Fluent Support agent.
 *
 * @param array $data - Data for creating the agent.
 * @param bool $createWpUser - Whether to create a corresponding WordPress user.
 * @return mixed - Returns the created customer or null.
 */
$createAgent = $agentsApi->createCustomerWithOrWithoutWpUser($data, $createWpUser);
```

### deleteCustomer($id, $withAssociatedData)
DeleteAgent method will delete customer with or without customer tickets and attachments

```php 
/*
 * deleteCustomer method will delete customer with or without customer tickets and attachments
 * @param int $id
 * @param bool $withAssociatedData | this will delete all tickets and attachments of this customer
 * @return void
 */
$createAgent = $agentsApi->createCustomerWithOrWithoutWpUser($data, $createWpUser);
```

### getInstance()
If you want to get the basic `FluentSupport\App\Models\Customer` model, you can achieve it with the following code

```php 
$agentInstance = FluentSupportApi('customers')->getInstance();
```