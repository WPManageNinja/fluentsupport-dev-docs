---
outline: deep
pageClass: global-functions
---

## Helper Classes

Fluent Support offers several helper classes to simplify interactions for building advanced functionalities in your plugin. While primarily used by the plugin, these functions are available for your use in custom addons.


# Fluent Support Core Helper Class

- Class with Namespace: `FluentSupport\App\Services\Helper`
- Method Types: `static`

[[toc]]

### Helper::getOption()
Get fluent-support Option. This is similar to WordPress's `get_option()` function, but it uses its own database table instead of `wp_options` table

**Parameters**
- $key `string` required
- $default `mixed`

**Return** `mixed`


### Helper::updateOption()
Update fluent-support Option. This is similar to WordPress's `update_option()` function, but it uses its own database table instead of `wp_options` table

**Parameters**
- $key `string` required
- $value `mixed`

**Return** `mixed`

### Helper::deleteOption($key)
Delete fluent-support Option. This is similar to WordPress's `delete_option()` function, but it uses its own database table instead of `wp_options` table

**Parameters**
- $key `string` required

**Return** boolean


### Helper::getAgentByUserId($id)
Get agent information by user id

**Parameters**
- $userId `int` required
- $returnValue if no user ID is provided or no agent is found, it returns false; otherwise, it returns the Agent instance.

**Return** mixed

### Helper::customerTicketPriorities()
This function will return the list of ticket priorities for customer

**Return** array

Source:
```php 
public static function customerTicketPriorities()
{
    return apply_filters('fluent_support/customer_ticket_priorities', [
        'normal'   => __('Normal', 'fluent-support'),
        'medium'   => __('Medium', 'fluent-support'),
        'critical' => __('Critical', 'fluent-support')
    ]);
}
```

**Available Filter Hook:** `fluent_support/customer_ticket_priorities`


### Helper::adminTicketPriorities()
This function will return the list of ticket priorities for Admin

**Return** array

Source:
```php 
public static function adminTicketPriorities()
{
    return apply_filters('fluent_support/admin_ticket_priorities', [
        'normal'   => __('Normal', 'fluent-support'),
        'medium'   => __('Medium', 'fluent-support'),
        'critical' => __('Critical', 'fluent-support')
    ]);
}
```

**Available Filter Hook:** `fluent_support/admin_ticket_priorities`

### Helper::ticketStatusGroups()
This function will return ticket status group

**Return** array

Source:
```php 
public static function ticketStatusGroups()
{
    return apply_filters('fluent_support/ticket_status_groups', [
        'open'   => ['new', 'active'],
        'active' => ['active'],
        'closed' => ['closed'],
        'new'    => ['new'],
        'all'    => []
    ]);
}
```

**Available Filter Hook:** `fluent_support/ticket_status_groups`


### Helper::ticketStatuses()
This function will return changeable ticket status group

**Return** array

**Available Filter Hook:** `fluent_support/changeable_ticket_statuses`

### Helper::ticketStatusGroups()
This function will return ticket status list

**Return** array

Source:
```php 
public static function ticketStatusGroups()
{
    return apply_filters('fluent_support/ticket_status_groups', [
        'open'   => ['new', 'active'],
        'active' => ['active'],
        'closed' => ['closed'],
        'new'    => ['new'],
        'all'    => []
    ]);
}
```

**Available Filter Hook:** `fluent_support/ticket_status_groups`



### Helper::getCustomerByID($customerId)
Get customer information by user id

**Parameters**
- $customerId `Integer` Customer ID

**Return** Customer Instance



