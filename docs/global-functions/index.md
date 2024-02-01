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


### fluentcrm\_update\_subscriber\_meta
Update Contact's Meta Value

**Parameters**
- $subscriberId `int` required
- $key `string` required, Meta Key of the subscriber
- $value `mixed` value of the meat

**Return** \FluentCrm\App\Models\SubscriberMeta


### fluentcrm\_delete\_subscriber\_meta
Delete Subscriber's Meta

**Parameters**
- $subscriberId `int` required
- $key `string` required, Meta Key of the campaign

**Return** Boolean


### fluentcrm\_subscriber\_statuses
Get Contact Statuses.

**Parameters**
- $isOptions `boolean` if true then it will return as options structure array with `id`, `slug`, `title` properties

**Return** array

Example: 
```php 
fluentcrm_subscriber_statuses();
//returns
[
    'subscribed',
    'pending',
    'unsubscribed',
    'bounced',
    'complained'
]

fluentcrm_subscriber_statuses(true);
// returns
[
    [
        'id' => 'subscribed',
        'title' => 'Subscribed',
        'slug' => 'subscribed'
    ],
    .....,
    .....
]
```

**Available Filter Hook:** `fluent_crm/contact_statuses`

### fluentcrm\_subscriber\_editable\_statuses
Get Contact Statuses except `bounced` and `complained`

**Parameters**
- $isOptions `boolean` if true then it will return as options structure array with `id`, `slug`, `title` properties

**Return** array

**Available Filter Hook:** `fluent_crm/contact_editable_statuses`

### fluentcrm\_contact\_types
Get Contact Types as array

**Parameters**
- $isOptions `boolean` if true then it will return as options structure array with `id`, `slug`, `title` properties

**Return** array

Example:
```php 
fluentcrm_contact_types();
//returns
[
    'lead'     => 'Lead',
    'customer' => 'Customer'
]

fluentcrm_contact_types(true);
// returns
[
    [
        'id' => 'lead',
        'title' => 'Lead',
        'slug' => 'lead'
    ],
    .....
]

```

**Available Filter Hook:** `fluentcrm_contact_types`


### fluentcrm\_activity\_types
Get Contact Note Activity Types items as array

**Return** array

Source:
```php 
function fluentcrm_activity_types()
{
    return apply_filters('fluentcrm_contact_activity_types', [
        'note'              => __('Note', 'fluent-crm'),
        'call'              => __('Call', 'fluent-crm'),
        'email'             => __('Email', 'fluent-crm'),
        'meeting'           => __('Meeting', 'fluent-crm'),
        'quote_sent'        => __('Quote: Sent', 'fluent-crm'),
        'quote_accepted'    => __('Quote: Accepted', 'fluent-crm'),
        'quote_refused'     => __('Quote: Refused', 'fluent-crm'),
        'invoice_sent'      => __('Invoice: Sent', 'fluent-crm'),
        'invoice_part_paid' => __('Invoice: Part Paid', 'fluent-crm'),
        'invoice_paid'      => __('Invoice: Paid', 'fluent-crm'),
        'invoice_refunded'  => __('Invoice: Refunded', 'fluent-crm'),
        'transaction'       => __('Transaction', 'fluent-crm'),
        'feedback'          => __('Feedback', 'fluent-crm'),
        'tweet'             => __('Tweet', 'fluent-crm'),
        'facebook_post'     => __('Facebook Post', 'fluent-crm')
    ]);
}
```
**Available Filter Hook:** `fluentcrm_contact_activity_types`

### fluentcrm\_get\_current\_contact
Get Current Contact based on the current userID or contact from the cookie value

**@return** `false|object` \FluentCrm\App\Models\Subscriber

### fluentcrm\_get\_crm\_profile\_html
Get FluentCRM's contact profile widget HTML

**Parameters**
- $userIdOrEmail `int|string` User ID or email address of the contact
- $checkPermission `boolean` Whether to check current user's permission
- $withCss `boolean` Whether to include CSS


**@return** `false|string` HTML of the contact's profile widget

### fluentcrm\_get\_custom\_contact\_fields
Get Custom Fields schema for contacts


### fluentCrmGetContactSecureHash
Get unique long hash of a contact which can be used to identify the contact for various usage when is not logged in.

