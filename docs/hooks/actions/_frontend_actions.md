<explain-block title="fluent_support_before_signup_validation">
<hr>
<div class="fs-docs-content">
This action fires before fluent support user signup.

**Parameters**
- '$formData' (array) User form data

**Usage**

```php
add_action('fluent_support/before_signup_validation', function ($formData) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/before_signup_validation', $formData)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>
</explain-block>

<explain-block title="fluent_support_after_signup_validation">

<hr>
<div class="fs-docs-content">
This action fires after fluent support user signup.

**Parameters**
- '$formData' (array) User form data

**Usage**

```php
add_action('fluent_support/after_signup_validation', function ($formData) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/after_signup_validation', $formData)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>
</explain-block>

<explain-block title="fluent_support_after_creating_user">
<hr>
<div class="fs-docs-content">
This action fires after creating a WP user from ticket sign up form.

**Usage**

```php
add_action('fluent_support/after_creating_user', function () {
     // ...do something
});
```

**Reference**

`do_action('fluent_support/after_creating_user')`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>
</explain-block>

<explain-block title="fluent_support_before_creating_user">
<hr>
<div class="fs-docs-content">
This action is triggered before the creation of a WordPress user from the ticket sign-up form.

**Parameters**
- '$userName' (string) Username of the user
- '$password' (string) Password for the user account
- '$email' (string) Email address associated with the user account

**Usage**

```php
add_action('fluent_support/before_creating_user', function ($userName, $password, $email) {
     // ...do something
}, 10, 3);
```

**Reference**

`do_action('fluent_support/before_creating_user', $userName, $password, $email)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>
</explain-block>

<explain-block title="fluent_support_before_updating_user">
<hr>
<div class="fs-docs-content">
This action is triggered before updating user data.

**Parameters**
- '$data' (array) User data

**Usage**

```php
add_action('fluent_support/before_updating_user', function ($data) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/before_updating_user', $data)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>
</explain-block>

<explain-block title="fluent_support_after_updating_user">
<hr>
<div class="fs-docs-content">
This action is triggered after updating user data.

**Parameters**
- '$data' (array) User data

**Usage**

```php
add_action('fluent_support/after_updating_user', function ($data) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/after_updating_user', $data)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>
</explain-block>

<explain-block title="fluent_support_before_logging_in_user">
<hr>
<div class="fs-docs-content">
This action is triggered before a user logs in.

**Parameters**
- '$userId' (integer) User ID

**Usage**

```php
add_action('fluent_support/before_logging_in_user', function ($userId) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/before_logging_in_user', $userId)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>
</explain-block>

<explain-block title="fluent_support_after_logging_in_user">
<hr>
<div class="fs-docs-content">
This action is triggered after a user logs in.

**Parameters**
- '$userId' (integer) User ID

**Usage**

```php
add_action('fluent_support/after_logging_in_user', function ($userId) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/after_logging_in_user', $userId)`

This action is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`
</div>
</explain-block>

<explain-block title="fluent_support_after_customer_created">

<hr>
<div class="fs-docs-content">
This action is triggered after a new customer record is created. It fires only when the row was actually saved, so a failed insert never triggers it.

It fires from three places:

- `Customer::maybeCreateCustomer()`, used by the customer portal, email piping, importers and the Fluent Forms and FluentCRM integrations whenever a ticket comes from an unknown email
- `TicketController::createTicket()`, when an agent creates a ticket in the admin for a new customer
- the MCP `create-ticket` tool (`TicketTools::createTicket()`), when an AI agent opens a ticket for an email that has no customer yet

**Parameters**
- '$customer' (object) Customer data

**Usage**

```php
add_action('fluent_support/customer_created', function ($customer) {
     // ...do something
}, 10, 1);
```
**Reference**

`do_action('fluent_support/customer_created', $customer)`

This action is located in <br>
`fluent-support/app/Models/Customer.php`,<br>
`fluent-support/app/Http/Controllers/TicketController.php`,<br>
`fluent-support/app/Modules/MCP/Tools/TicketTools.php`
</div>

</explain-block>


