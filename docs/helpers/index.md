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


### Helper::getAgentByUserId($userId = null)
Get agent information by WordPress user id

**Parameters**
- $userId `int` optional — defaults to the current logged-in user (`get_current_user_id()`) when omitted

**Return** `FluentSupport\App\Models\Agent|null|false` — `false` if no user ID is available (not logged in and none passed), `null` if the ID doesn't match an agent

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


### Helper::changeableTicketStatuses()
This function will return the ticket status groups an agent is allowed to change a ticket to — the same as `ticketStatusGroups()`, minus the `all` and `open` groups.

**Return** array

Source:
```php 
public static function changeableTicketStatuses()
{
    $ticketStatus = static::ticketStatusGroups();

    unset($ticketStatus['all']);
    unset($ticketStatus['open']);

    return apply_filters('fluent_support/changeable_ticket_statuses', $ticketStatus);
}
```

**Available Filter Hook:** `fluent_support/changeable_ticket_statuses`

### Helper::ticketStatuses()
This function will return the ticket status list (status key => human-readable label).

**Return** array

Source:
```php 
public static function ticketStatuses()
{
    return apply_filters('fluent_support/ticket_statuses', [
        'new'    => __('New', 'fluent-support'),
        'active' => __('Active', 'fluent-support'),
        'closed' => __('Closed', 'fluent-support'),
    ]);
}
```

**Available Filter Hook:** `fluent_support/ticket_statuses`



### Helper::getCustomerByID($customerId)
Get customer information by user id

**Parameters**
- $customerId `Integer` Customer ID

**Return** Customer Instance



