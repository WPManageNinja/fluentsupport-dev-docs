
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
* @return object|null
*/
$customer = $customersApi->getCustomer($customerId);
```
Returns `null` when no customer has that ID.

### updateCustomer($data, $customerId)
This method updates the customer data.
```php 
/*
 * updateCustomer method will update the specific customer by id
 *
 * @param array $data
 * @param int $customerId
 * @return bool True on success, false if the customer was not found or no ID was given.
 */
$updated = $customersApi->updateCustomer($data, $customerId);
```

### createCustomerWithOrWithoutWpUser($data, $createWpUser)
Create a customer with or without a corresponding WordPress user.

- Without a WordPress user, `$data['email']` is required. The call returns `false` if the email is invalid or a customer with that email already exists.
- With `$createWpUser = true`, `$data['username']` and `$data['email']` are used to create the user; `$data['password']` is optional (a random one is generated). The call returns `false` if the username is taken or the user could not be created.
```php 
/*
 * createCustomerWithOrWithoutWpUser method creates a new customer, with or without a corresponding WordPress user.
 * If creating a WordPress user is requested, the process involves first creating the WordPress user,
 * and upon successful creation, proceeds to create a Fluent Support customer.
 *
 * @param array $data - Data for creating the customer.
 * @param bool $createWpUser - Whether to create a corresponding WordPress user.
 * @return object|false - Returns the created customer or false.
 */
$createdCustomer = $customersApi->createCustomerWithOrWithoutWpUser($data, $createWpUser);
```

### deleteCustomer($id, $withAssociatedData)
DeleteCustomer method will delete customer with or without customer tickets and attachments

```php 
/*
 * deleteCustomer method will delete customer with or without customer tickets and attachments
 * @param int $id
 * @param bool $withAssociatedData | this will delete all tickets and attachments of this customer
 * @return void
 */
$customersApi->deleteCustomer($customerId, $withAssociatedData);
```

### getInstance()
If you want to get the basic `FluentSupport\App\Models\Customer` model, you can achieve it with the following code

```php 
$customerInstance = FluentSupportApi('customers')->getInstance();
```

### Other methods

In addition to the methods above, `$customersApi` proxies these `Customer` model query methods directly, so they can be called on the API instance itself:

```php 
$allCustomers = $customersApi->all();          // all customers, no pagination
$customers    = $customersApi->get();          // customers matching any prior query constraints
$customer     = $customersApi->find($customerId); // find by ID, or null if not found
$customer     = $customersApi->first();        // first customer matching any prior query constraints
$customers    = $customersApi->paginate();     // same as getCustomers()
```