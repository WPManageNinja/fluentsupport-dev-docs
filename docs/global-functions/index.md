---
outline: deep
pageClass: global-functions
---

## Global Functions

Fluent Support has few global functions which are located at `app/functions/helpers.php` file.
In this article, we are documenting few useful functions that you may use. For full understanding, please check the `app/functions/helpers.php` file 

[[toc]]

### getOption
Get fluent-support Option. This is similar to WordPress's `get_option()` function, but it uses its own database table instead of `wp_options` table

**Parameters**
- $key `string` required
- $default `mixed`

**Return** `mixed`


### updateOption
Update fluent-support Option. This is similar to WordPress's `update_option()` function, but it uses its own database table instead of `wp_options` table

**Parameters**
- $key `string` required
- $value `mixed`

**Return** `mixed`

### deleteOption
Delete fluent-support Option. This is similar to WordPress's `delete_option()` function, but it uses its own database table instead of `wp_options` table

**Parameters**
- $key `string` required

**Return** boolean


### getAgentByUserId
Get agent information by user id

**Parameters**
- $userId `int` required
- $returnValue if no user ID is provided or no agent is found, it returns false; otherwise, it returns the Agent instance.

**Return** mixed

### customerTicketPriorities
This function will return the list of ticket priorities list for customer

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


### adminTicketPriorities
This function will return the list of ticket priorities list for Admin

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

### ticketStatusGroups
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


### ticketStatuses
This function will return changeable ticket status group

**Return** array

**Available Filter Hook:** `fluent_support/changeable_ticket_statuses`

### ticketStatusGroups
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



### getCustomerByID
Get customer information by user id

**Parameters**
- $customerid `Integer` Customer ID

**Return** Customer Instance



