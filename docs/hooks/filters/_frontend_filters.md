<explain-block title="fluent_support_customer_portal_invalid_permission_message">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve invalid permission message and modify it.

**Parameters**

- '$message' (string) Invalid permission message

**Usage**

```php
add_filter('fluent_support/customer_portal_invalid_permission_message', function ($message) {
    // ...do something
    return $message;
}, 10, 1);
```

**Reference**

`apply_filters(
            'fluent_support/customer_portal_invalid_permission_message',
         esc_html__('You don\'t have permission to access customer support portal', 'fluent-support')
        )
`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/CustomerPortalHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_agent_permission_error_message">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the error message for agent permissions and modify it.

**Parameters**

- '$message' (string) Agent permission error message

**Usage**

```php
add_filter('fluent_support/customer_portal_agent_permission_error_message', function ($message) {
    // ...do something
    return $message;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/customer_portal_agent_permission_error_message',$msg)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/CustomerPortalHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_user_portal_access_config">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the user portal access config data and modify it.

**Parameters**

- '$config' (array) Customer portal access settings data

**Usage**

```php
add_filter('fluent_support/user_portal_access_config', function ($config) {
    // ...do something
    return $config;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/user_portal_access_config', [
                'status'  => true,
                'message' => $invalidPermissionMessage
            ])`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/CustomerPortalHandler.php`,<br>
`fluent-support/app/Http/Policies/PortalPolicy.php`
</div>
</explain-block>

<explain-block title="fluent_support_customer_portal_vars">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the customer portal localize data and modify it.

**Parameters**

- '$vars' (array) Customer portal localize data

**Usage**

```php
add_filter('fluent_support/customer_portal_vars', function ($vars) {
    // ...do something
    return $vars;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/customer_portal_vars', $vars)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/CustomerPortalHandler.php`,<br>
`fluent-support/app/Services/ProfileInfoService.php`
</div>
</explain-block>

<explain-block title="fluent_support_can_customer_create_ticket">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve whether a customer can create a ticket, along with customer and ticket data and allows you to modify it.

**Parameters**

- '$canCreate' (boolean) Customer can create ticket or not
- '$customer' (object) Customer data
- '$data' (array) Ticket data

**Usage**

```php
add_filter('fluent_support/can_customer_create_ticket', function ($canCreate, $customer, $data) {
    // ...do something
    return $vars;
}, 10, 3);
```

**Reference**

`apply_filters('fluent_support/can_customer_create_ticket', true, $customer, $data)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/CustomerPortalController.php`,<br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_can_customer_create_response">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve whether a customer can create a response, along with customer, ticket along with response data and allows you to modify it.

**Parameters**

- '$canCreate' (boolean) Customer can create ticket or not
- '$customer' (object) Customer data
- '$ticket' (object) Ticket data
- '$data' (array) Ticket response data

**Usage**

```php
add_filter('fluent_support/can_customer_create_response', function ($canCreate, $customer, $ticket,  $data) {
    // ...do something
    return $canCreate;
}, 10, 4);
```

**Reference**

`apply_filters('fluent_support/can_customer_create_response', true, $ticket->customer, $ticket, $data)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/CustomerPortalController.php`,<br>
`fluent-support-pro/app/Services/Integrations/FluentEmailPiping/ByMailHandler.php`
</div>
</explain-block>

<explain-block title="fluent_support_person_user_edit_url">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve user profile edit link data and modify it.

**Parameters**

- '$userEditUrl' (string) User profile edit link
- '$instance' (object) Instance of Person class

**Usage**

```php
add_filter('fluent_support/person_user_edit_url', function ($userEditUrl, $instance) {
    // ...do something
    return $userEditUrl;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/person_user_edit_url', $userEditUrl, $this)`


This filter is located in <br>
`fluent-support/app/Models/Person.php`
</div>
</explain-block>

<explain-block title="fluent_support_customer_extra_widgets">
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve customer extra widgets data and modify it.

**Parameters**

- '$widgets' (array) Widgets data
- '$customer' (object) Customer data

**Usage**

```php
add_filter('fluent_support/customer_extra_widgets', function ($widgets, $customer) {
    // ...do something
    return $widgets;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/customer_extra_widgets', $widgets, $customer)`


This filter is located in <br>
`fluent-support/app/Models/Person.php`
</div>
</explain-block>

