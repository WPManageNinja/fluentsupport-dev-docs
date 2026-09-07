
The Product API Function provides a range of utility methods that enable you to retrieve data according to your specific requirements when working within your custom PHP Snippet or plugin.

### Initialization
```php 
$productApi = FluentSupportApi('products');
```
`FluentSupportApi('products')` basically returns `FluentSupport\App\Api\Classes\Products` Model class instance.

### Methods

### getProducts()
This method will return all available products
```php 
/*
* This method will return all available products
* @return: object
*/
$products = $productApi->getProducts();
```

### getProduct($id)
The `getProduct` method fetches product data.
```php 
/*
* getProduct method returns a specific product by id
* @param int $id
* @return: object
*/
$product = $productApi->getProduct($id);
```

### createProduct($data)
This method Creates a new product.
```php 
/*
* createProduct method creates a new product.
*
* @param array $data The data to create the product.
* @return array|null Returns the created product or null.
*/
$data = $productApi->createProduct($data);
```

### updateProduct($id, $data)
This method will Updates a product by using the product ID.

```php
/*
* updateProduct method will update product by id
* @param int $id
* @param array $data
* @return array|null Returns the updated product or null.
*/
$data = $productApi->updateProduct($id, $data);
```

### deleteProduct($id)
This method will delete a product by using the product ID
```php 
/*
* deleteProduct method will delete product by id
* @param int $id
* @return bool True if the deletion is successful; otherwise, returns false.
*/
$data = $productApi->deleteProduct($id);
```

### getInstance()
If you want to get the basic `FluentSupport\App\Models\Product` model, you can achieve it with the following code

```php 
$productInstance = FluentSupportApi('products')->getInstance();
```

### Other methods

In addition to the methods above, `$productApi` proxies these `Product` model query methods directly, so they can be called on the API instance itself:

```php 
$allProducts = $productApi->all();        // all products, no pagination
$products    = $productApi->get();        // products matching any prior query constraints
$product     = $productApi->find($id);    // find by ID, or null if not found
$product     = $productApi->first();      // first product matching any prior query constraints
$products    = $productApi->paginate();   // same as getProducts()
```