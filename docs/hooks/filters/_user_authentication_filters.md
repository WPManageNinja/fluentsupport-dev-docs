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
`fluent-support/app/Hooks/Handlers/AuthHandler.php`
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

[//]: # (2)
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


[//]: # (3)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_registration_form_fields</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve default registration from fields add the and modify them.

**Parameters**

- '$fields' (array) Default registration Form fields

**Usage**

```php
add_filter('fluent_support/registration_form_fields', function ($fields) {
    // ...do something
    return $fields
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/registration_form_fields', $fields)`

<b>`$fields` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating the registration form fields data.</b>

This filter is located in <br>
`fluent-support/app/Hooks/Handlers/AuthHandler.php`

</div>

</details>


[//]: # (4)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_custom_registration_form_fields</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve custom registration from fields add the and modify them.

**Parameters**

- '$customFields' (array) Custom registration Form fields

**Usage**

```php
add_filter('fluent_support/custom_registration_form_fields', function ($customFields) {
    // ...do something
    return $customFields
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/custom_registration_form_fields', $customFields)`

<b>`$customFields` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating the custom registration form fields data.</b>


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/AuthHandler.php`,
`fluent-support/app/Models/Traits/CustomerTrait.php` 

</div>

</details>

[//]: # (5)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_reset_password_form</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve Reset password form filed and modify them.

**Parameters**

- '$field' (array) Reset password form filed


**Usage**

```php
add_filter('fluent_support/reset_password_form', function ($field) {
    // ...do something
    return $field
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/reset_password_form', [
            'user_login' => [
                'required'    => true,
                'type'        => 'text',
                'label'       => __('Email Address', 'fluent-support'),
                'id'          => 'fst_email',
                'placeholder' => __('Your Email Address', 'fluent-support')
            ]
        ])`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/AuthHandler.php`,


</div>

</details>

[//]: # (7)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_loading_icon</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve icon data and modify them.

**Parameters**

- '$loadingIcon' (string) Icon data


**Usage**

```php
add_filter('fluent_support/signup_loading_icon', function ($loadingIcon) {
    // ...do something
    return $loadingIcon
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/signup_loading_icon', $loadingIcon)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/AuthHandler.php`


</div>

</details>

[//]: # (8)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_auth_shortcode_defaults</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve shortcode behavior for agent and modify them.

**Parameters**

- '$shortCodeDefaults' (array) shortcode behavior for agent


**Usage**

```php
add_filter('fluent_support/auth_shortcode_defaults', function ($shortCodeDefaults) {
    // ...do something
    return $shortCodeDefaults
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/auth_shortcode_defaults', [
            'auto-redirect'       => false,
            'redirect-to'         => Helper::getPortalBaseUrl(),
            'hide'                => false,
            'show-signup'         => false,
            'show-reset-password' => false,
        ])`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/AuthHandler.php`


</div>

</details>

</explain-block>