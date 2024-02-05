
The tag API Function provides a range of utility methods that enable you to retrieve data according to your specific requirements when working within your custom PHP Snippet or plugin.

### Initialization
```php 
$tagApi = FluentSupportApi('tags');
```
`FluentSupportApi('tags')` basically returns `FluentSupport\App\Api\Classes\Tags` Model class instance.

### Methods

### getTags()
This method will return all available tags
```php 
/*
* getTags method will returns all available tags
* @return: object
*/
$tags = $tagApi->getTags();
```
### getTag($id)
The getTag method retrieves data for a specific tag.
```php 
/*
* getTag method returns a specific tag by id
* @param int $id
* @return: object
*/
$tag = $tagApi->getTag($id);
```

### createTag($data)
This method Creates a new tag.
```php 
/*
* createTag method will create a new tag
*
* @param array $data The data to create the tag.
* @return array|null Returns the created tag or null.
*/
$data = $tagApi->createTag($data);
```

### updateTag($id, $data)
This method will Updates a tag by using the tag ID.

```php
/*
* updateTag method will update tag by id
* @param int $id
* @param array $data
* @return array|null Returns the updated tag or null.
*/
$data = $productApi->updateProduct($id, $data);
```

### deleteTag($id)
This method will delete a tag by using the tag ID
```php 
/*
* deleteTag method will delete tag by id
* @param int $id
* @return bool True if the deletion is successful; otherwise, returns false.
*/
$data = $tagApi->deleteTag($id);
```