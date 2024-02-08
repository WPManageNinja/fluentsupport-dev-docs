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

[//]: # (9)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_form_data</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve signup form data and modify them.

**Parameters**

- '$formData' (array) Signup form data


**Usage**

```php
add_filter('fluent_support/signup_form_data', function ($formData) {
    // ...do something
    return $formData
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/signup_form_data', $request->all())`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (10)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_create_user_error</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve create user error message and modify it.

**Parameters**

- '$errorMessage' (array) Create user error message


**Usage**

```php
add_filter('fluent_support/signup_create_user_error', function ($errorMessage) {
    // ...do something
    return $errorMessage
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/signup_create_user_error',['error' => $userId->get_error_message()])`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (11)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_complete_response</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve and modify registration success message and redirect URL data.

**Parameters**

- '$data' (array) Success message and redirect url data


**Usage**

```php
add_filter('fluent_support/signup_complete_response', function ($data) {
    // ...do something
    return $data
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/signup_complete_response', [
    'message' => __('Successfully registered to the site.', 'fluent-support'),
    'redirect' => Arr::get($formData, '__redirect_to', Helper::getPortalBaseUrl())
])`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (12)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_complete_response</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve and modify registration success message and redirect URL data.

**Parameters**

- '$data' (array) Success message and redirect url data


**Usage**

```php
add_filter('fluent_support/signup_complete_response', function ($data) {
    // ...do something
    return $data
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/signup_complete_response', [
    'message' => __('Successfully registered to the site.', 'fluent-support'),
    'redirect' => Arr::get($formData, '__redirect_to', Helper::getPortalBaseUrl())
])`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (13)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_use_native_login</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve and modify native login data.

**Parameters**

- '$useNativeLogin' (boolean) Use native login or not

**Usage**

```php
add_filter('fluent_support_use_native_login', function ($useNativeLogin) {
    // ...do something
    return $useNativeLogin
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support_use_native_login', true)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (14)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_validation_rules</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve and modify signup validation rules data.

**Parameters**

- '$rules' (array) signup validation rules data

**Usage**

```php
add_filter('fluent_support/signup_validation_rules', function ($rules) {
    // ...do something
    return $rules
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/signup_validation_rules', $rules)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (15)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_reset_password_mail_subject</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve reset password mail subject and modify it.

**Parameters**

- '$subject' (string) reset password mail subject data

**Usage**

```php
add_filter('fluent_support/reset_password_mail_subject', function ($subject) {
    // ...do something
    return $subject
}, 10, 1)
```

**Reference**
`apply_filters("fluent_support/reset_password_mail_subject", sprintf(__('Reset your password for %s support portal', 'fluent-support'), get_bloginfo('name')))`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (16)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_reset_password_message</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve reset password email body text and modify it.

**Parameters**

- '$message' (string) Reset password email body text
- '$user_data' (object) User data
- '$resetLink' (string) Reset link data
**Usage**

```php
add_filter('fluent_support/reset_password_message', function ($message, $user_data, $resetLink) {
    // ...do something
    return $message
}, 10, 3)
```

**Reference**
`apply_filters('fluent_support/reset_password_message', $message, $user_data, $resetLink)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (17)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_validation_messages</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve user signup validation message and modify it.

**Parameters**

- '$arg' (array) An array containing the arguments data for signup validation
- '$rules' (array) An array representing the rules for signup validation

**Usage**

```php
add_filter('fluent_support/signup_validation_messages', function ($arg, $rules) {
    // ...do something
    return $rules
}, 10, 2)
```

**Reference**
`apply_filters('fluent_support/signup_validation_messages', [], $rules)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (18)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_email</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve email address used for signup and modify it.

**Parameters**

- '$email' (string) Email address used for signup

**Usage**

```php
add_filter('fluent_support/signup_email', function ($email) {
    // ...do something
    return $email
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/signup_email', Arr::get($formData, 'email'))`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`


</div>

</details>

[//]: # (19)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_username</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve user name used for signup and modify it.

**Parameters**

- '$userName' (string) user name used for signup

**Usage**

```php
add_filter('fluent_support/signup_username', function ($userName) {
    // ...do something
    return $userName
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/signup_username', Arr::get($formData, 'username'))`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`

</div>

</details>

[//]: # (20)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_signup_password</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve password used for signup and modify it.

**Parameters**

- '$password' (string) Password used for signup

**Usage**

```php
add_filter('fluent_support/signup_password', function ($password) {
    // ...do something
    return $password
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/signup_password', $password)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`

</div>

</details>

[//]: # (21)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_update_user_data</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve user data and modify it.

**Parameters**

- '$data' (array) User data

**Usage**

```php
add_filter('fluent_support/update_user_data', function ($data) {
    // ...do something
    return $data
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/update_user_data', $data)`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`

</div>

</details>

[//]: # (22)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_user_role</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve user role and modify it.

**Parameters**

- '$setRole' (string) User role

**Usage**

```php
add_filter('fluent_support/user_role', function ($setRole) {
    // ...do something
    return $setRole
}, 10, 1)
```

**Reference**
`apply_filters('fluent_support/user_role', 'subscriber')`


This filter is located in <br>
`fluent-support/app/Http/Controllers/AuthController.php`

</div>

</details>

</explain-block>