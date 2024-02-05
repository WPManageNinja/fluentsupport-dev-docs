<explain-block title="fluent-support/_admin_dashboard_filters">

[//]: # (0)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_after_admin_app_loaded</summary>
<hr>
<div class="fs-docs-content">
This action fires after fluent support admin app is loaded.

**Parameters**
- '$app' (object) App Instance

**Usage**

```php
add_action('fluent_support/admin_app_loaded', function ($app) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support/admin_app_loaded', $app)`

This action is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (1)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_when_admin_app_is_loading</summary>
<hr>
<div class="fs-docs-content">
This action fires when fluent support admin app is loading.

**Parameters**
- '$app' (object) App Instance

**Usage**

```php
add_action('fluent_support_loading_app', function ($app) {
     // ...do something
}, 10, 1);
```

**Reference**

`do_action('fluent_support_loading_app', $app`

This action is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (2)

<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_pro_loaded</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after fluent support pro loaded.

**Parameters**
- '$app' (object) Application data

**Usage**

```php
add_action('fluent_support_pro_loaded', function ($app) {
     // ...do something
}, 10, 1);
```
**Reference**

`do_action('fluent_support_pro_loaded', $app)`

This action is located in <br>
`fluent-support-pro/fluent-support-pro.php`

</div>

</details>

[//]: # (3)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_loaded</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after fluent support loaded.

**Parameters**
- '$application' (object) Application data

**Usage**

```php
add_action('fluent_support_loaded', function ($application) {
     // ...do something
}, 10, 1);
```
**Reference**

`do_action('fluent_support_loaded', $application)`

This action is located in <br>
`fluent-support/boot/app.php`

</div>

</details>

[//]: # (4)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_addons_loaded</summary>
<hr>
<div class="fs-docs-content">
This action is triggered after fluent support addons loaded.

**Parameters**
- '$application' (object) Application data

**Usage**

```php
add_action('fluent_support_addons_loaded', function ($application) {
     // ...do something
}, 10, 1);
```
**Reference**

` do_action('fluent_support_addons_loaded', $application)`

This action is located in <br>
`fluent-support/boot/app.php`

</div>

</details>




</explain-block>