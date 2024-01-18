<explain-block title="fluent-support/user_authentication_filters">


[//]: # (0)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_login_form_args</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve login arguments and change them.

**Parameters**

- '$loginArgs' (array) Login arguments data

**Usage**

```php
add_filter('fluent_support/login_form_args', function ($loginArgs) {
    // ...do something
    return $loginArgs
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/login_form_args', [
            'echo'           => false,
            'redirect'       => $redirect,
            'remember'       => true,
            'value_remember' => true,
        ])
`


This filter is located in <br>
`fluent-support/app/Services/Tickets/ResponseService.php`
</div>

</details>

[//]: # (1)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_custom_registration_form_fields_key</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve custom registration form field keys and modify them.

**Parameters**

- '$registrationFieldKeys' (array) List of custom registration form field keys

**Usage**

```php
add_filter('fluent_support/custom_registration_form_fields_key', function ($registrationFieldKeys) {
    // ...do something
    return $registrationFieldKeys
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/custom_registration_form_fields_key', Helper::getBusinessSettings('custom_registration_form_field'))
`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/AuthHandler.php`,
`fluent-support/app/Models/Traits/CustomerTrait.php`,
`fluent-support/app/Models/Ticket.php`,
`fluent-support/app/Http/Controllers/AuthController.php`

</div>

</details>

[//]: # (1)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_before_registration_form_close</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve registration form data and modify them.

**Parameters**

- '$content' (string) Form content
- '$registrationFields' (array) Form fields data
- '$attributes' (array) Data associate with the registration form

**Usage**

```php
add_filter('fluent_support/before_registration_form_close', function ($content, $registrationFields, $attributes) {
    // ...do something
    return $content
}, 10, 3)
```

**Reference**
`apply_filters('fluent_support/before_registration_form_close', '', $registrationFields, $attributes)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/AuthHandler.php`,
`fluent-support/app/Models/Traits/CustomerTrait.php`,
`fluent-support/app/Models/Ticket.php`,
`fluent-support/app/Http/Controllers/AuthController.php`

</div>

</details>



</explain-block>