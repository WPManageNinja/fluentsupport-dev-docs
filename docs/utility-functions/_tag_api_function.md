
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
* @return: object|null
*/
$tag = $tagApi->getTag($id);
```
Returns `null` when no tag has that ID.

### createTag($data)
This method Creates a new tag.
```php 
/*
* createTag method will create a new tag
*
* @param array $data The data to create the tag.
* @return object|null Returns the created tag, or null when `title` is empty.
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
* @return bool|null True on success, null when no ID or data was given or the tag was not found.
*/
$data = $tagApi->updateTag($id, $data);
```

### deleteTag($id)
This method will delete a tag by using the tag ID
```php 
/*
* deleteTag method will delete tag by id
* @param int $id
* @return bool|null True if the deletion is successful, null when the tag was not found.
*/
$data = $tagApi->deleteTag($id);
```

### getInstance()
If you want to get the basic `FluentSupport\App\Models\TicketTag` model, you can achieve it with the following code

```php 
$tagInstance = FluentSupportApi('tags')->getInstance();
```

### Other methods

In addition to the methods above, `$tagApi` proxies these `Tag` model query methods directly, so they can be called on the API instance itself:

```php 
$allTags = $tagApi->all();        // all tags, no pagination
$tags    = $tagApi->get();        // tags matching any prior query constraints
$tag     = $tagApi->find($id);    // find by ID, or null if not found
$tag     = $tagApi->first();      // first tag matching any prior query constraints
$tags    = $tagApi->paginate();   // same as getTags()
```