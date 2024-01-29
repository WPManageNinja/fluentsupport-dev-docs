<explain-block title="fluent-support/other_useful_filters">

[//]: # (0)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_exportable_tickets_data</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve Exportable data and modify it.

**Parameters**

- '$data' (array) Exportable data
- '$tickets' (object) Ticket data

**Usage**

```php
add_filter('fluent_support/exportable_tickets_data', function ($data, $tickets) {
    // ...do something
    return $data
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/exportable_tickets_data', $data, $tickets)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/PrivacyHandler.php`
</div>

</details>

[//]: # (1)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_exportable_conversations_data</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve Exportable conversation data and modify it.

**Parameters**

- '$data' (array) Exportable data
- '$conversations' (object) Conversation data

**Usage**

```php
add_filter('fluent_support/exportable_conversations_data', function ($data, $conversations) {
    // ...do something
    return $data
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/exportable_conversations_data', $data, $conversations)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/PrivacyHandler.php`
</div>

</details>

[//]: # (2)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_exportable_customer_data</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve exportable customer data and modify it.

**Parameters**

- '$data' (array) Exportable data
- '$customer' (object) Customer data

**Usage**

```php
add_filter('fluent_support/exportable_customer_data', function ($data, $customer) {
    // ...do something
    return $data
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/exportable_customer_data', $data, $customer)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/PrivacyHandler.php`
</div>

</details>

[//]: # (3)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_recaptcha_v3_ref_score</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve reCAPTCHA v3 threshold value data and modify it.

**Parameters**

- '$refScore' (integer) reCAPTCHA v3 threshold value (The score is compared with the reCAPTCHA value provided by Google, which is determined based on interactions with your site ) 

**Usage**

```php
add_filter('fluent_support/recaptcha_v3_ref_score', function ($refScore) {
    // ...do something
    return $refScore
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/recaptcha_v3_ref_score', 0.5)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/ReCaptchaHandler.php`
</div>

</details>

[//]: # (4)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_storage_drivers_info</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve storage driver information and modify it.

**Parameters**

- '$drivers' (array) Storage driver information  

**Usage**

```php
add_filter('fluent_support/storage_drivers_info', function ($drivers) {
    // ...do something
    return $drivers
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/storage_drivers_info', $drivers)`

<b>`$drivers` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating information about Storage drivers, including the local driver, Dropbox driver, etc.</b>

This filter is located in <br>
`fluent-support/app/Http/Controllers/SettingsController.php`
</div>

</details>

[//]: # (5)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_allowed_customer_profile_picture_file_type</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve customer profile picture file types and modify it.

**Parameters**

- '$fileTypes' (array) Customer profile picture file types

**Usage**

```php
add_filter('fluent_support/allowed_customer_profile_picture_file_type', function ($fileTypes) {
    // ...do something
    return $fileTypes
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/allowed_customer_profile_picture_file_type', array('jpeg', 'jpe', 'jpg', 'png'))`

This filter is located in <br>
`fluent-support/app/Services/AvatarUploder.php`
</div>

</details>

</explain-block>