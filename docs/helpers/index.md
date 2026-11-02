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
- $default `mixed` optional, defaults to `''`. Returned when the option is missing or its stored value is corrupt. When `$default` is an array and the stored value is not, `$default` is returned

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
Get a customer by its Fluent Support customer ID (`fs_persons.id`, not the WordPress user ID)

**Parameters**
- $customerId `Integer` Customer ID

**Return** `FluentSupport\App\Models\Customer|null`

### Helper::getCurrentAgent()
Get the agent record of the logged-in WordPress user

**Return** `FluentSupport\App\Models\Agent|null` — `null` when no user is logged in or the user is not an agent

### Helper::getCurrentCustomer()
Get the customer record of the logged-in WordPress user. If several customer rows share the user ID, the oldest is returned

**Return** `FluentSupport\App\Models\Customer|null`

### Helper::getCurrentPerson()
Get the agent or customer record of the logged-in WordPress user, whichever was created first

**Return** `FluentSupport\App\Models\Person|null`

### Helper::isSupportStaffEmail($email)
Check whether an email belongs to support staff: an agent, or a WordPress user who is an administrator or an agent. Fluent Support never offers or creates such people as customers

**Parameters**
- $email `string` required

**Return** `boolean`

### Helper::getTicketMeta($ticketId, $key, $default = '')
Get a meta value stored for a ticket

**Parameters**
- $ticketId `int` required
- $key `string` required
- $default `mixed` optional, defaults to `''`. Also returned when the stored value is empty (for example `0` or `''`)

**Return** `mixed`

### Helper::updateTicketMeta($ticketId, $key, $value)
Add or update a meta value for a ticket. Arrays and objects are serialized

**Parameters**
- $ticketId `int` required
- $key `string` required
- $value `mixed` required

**Return** `mixed` — rows updated when the key existed, otherwise the insert result

### Helper::getBusinessSettings($key = null, $default = null)
Get the global business settings, or a single setting. The settings are cached for the request

**Parameters**
- $key `string` optional — omit to get all settings
- $default `mixed` optional — returned only when the key is missing from both the stored settings and the built-in defaults

**Return** `mixed` — the settings array when `$key` is omitted

### Helper::getDefaultMailBox()
Get the default mailbox, falling back to the oldest mailbox

**Return** `FluentSupport\App\Models\MailBox|null`

### Helper::getPortalBaseUrl()
Get the customer portal URL, without a trailing slash. Depending on the **Ticket link portal** setting this is the WooCommerce My Account, FluentCart or FluentCommunity support page; otherwise it is the configured portal page

**Return** `string`

**Available Filter Hook:** `fluent_support/portal_base_url`

### Helper::getTicketViewUrl($ticket)
Get the customer portal URL of a ticket

**Parameters**
- $ticket `object` required — a ticket with `serial_number` or `id`

**Return** `string`, for example `https://example.com/support/#/ticket/123/view`

### Helper::getTicketAdminUrl($ticket)
Get the admin (agent) URL of a ticket

**Parameters**
- $ticket `object` required

**Return** `string`, for example `https://example.com/wp-admin/admin.php?page=fluent-support/#/tickets/123/view`

**Available Filter Hook:** `fluent_support/portal_admin_base_url`
