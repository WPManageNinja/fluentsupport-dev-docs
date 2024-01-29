<explain-block title="fluent-support/admin_menu_filters">

[//]: # (0)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_admin_menu_position</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the value of menu position and modify it.

**Parameters**

- '$menuPosition' (integer) Value of menu position

**Usage**

```php
add_filter('fluent_support/admin_menu_position', function ($menuPosition) {
    // ...do something
    return $menuPosition
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/admin_menu_position', $menuPosition)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (1)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_base_url</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the base url and modify it.

**Parameters**

- '$baseUrl' (string) base url of fluent support

**Usage**

```php
add_filter('fluent_support/base_url', function ($baseUrl) {
    // ...do something
    return $baseUrl
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/base_url', admin_url('admin.php?page=fluent-support#/')`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (2)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_primary_menu_items</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the primary menu items and modify it.

**Parameters**

- '$menuItems' (array) Primary menu items

**Usage**

```php
add_filter('fluent_support/primary_menu_items', function ($menuItems) {
    // ...do something
    return $menuItems
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/primary_menu_items', $menuItems)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (3)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_secondary_menu_items</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the secondary menu items and modify it.

**Parameters**

- '$menuItems' (array) Secondary menu items

**Usage**

```php
add_filter('fluent_support/secondary_menu_items', function ($secondaryItems) {
    // ...do something
    return $secondaryItems
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/secondary_menu_items', $secondaryItems)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (4)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_integration_drivers</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the integration driver data and modify it.

**Parameters**

- '$integrationDrivers' (array) Integration driver data

**Usage**

```php
add_filter('fluent_support/integration_drivers', function ($integrationDrivers) {
    // ...do something
    return $integrationDrivers
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/integration_drivers', $integrationDrivers)`


This filter is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (4)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_app_vars</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the admin portal localize data and modify it.

**Parameters**

- '$appVars' (array) Admin portal localize data

**Usage**

```php
add_filter('fluent_support_app_vars', function ($appVars) {
    // ...do something
    return $appVars
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support_app_vars', $appVars)`

<b>`$appVars` is used here as an illustrative variable to represent the raw array value found in the main filter, demonstrating the localized data in the admin portal.</b>

This filter is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`
</div>

</details>

[//]: # (5)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_ticket_custom_fields</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the ticket custom fields data and modify it.

**Parameters**

- '$fields' (array) ticket custom fields

**Usage**

```php
add_filter('fluent_support/ticket_custom_fields', function ($fields) {
    // ...do something
    return $fields
}, 10, 1)
```

**Reference**

`apply_filters('fluent_support/ticket_custom_fields', [])`

This filter is located in <br>
`fluent-support/app/Hooks/Handlers/Menu.php`,
`fluent-support/app/Models/Ticket.php`,
`fluent-support/app/Services/Integrations/FluentForm/FeedIntegration.php`,
</div>

</details>

[//]: # (6)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_dashboard_notice</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the dashboard notice and agent data and modify it.

**Parameters**

- '$dashboardNotice' (array) ticket custom fields
- '$agent' (object) Agent data

**Usage**

```php
add_filter('fluent_support/dashboard_notice', function ($dashboardNotice, $agent) {
    // ...do something
    return $dashboardNotice
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/dashboard_notice', '', $agent)`

This filter is located in <br>
`fluent-support/app/Http/Controllers/AgentController.php`,
`fluent-support-pro/app/Hooks/filters.php`
</div>

</details>

[//]: # (7)
<details class="fs-docs-collapse">

<summary class="fs-docs-title">fluent_support_agent_has_access</summary>
<hr>
<div class="fs-docs-content">
This filter hook allows you to retrieve the agent has access or not data and modify it.

**Parameters**

- '$status' (boolean) Information about whether an agent has access or not
- '$request' (object) Fluent support framework request

**Usage**

```php
add_filter('fluent_support/agent_has_access', function ($status, $request) {
    // ...do something
    return $status
}, 10, 2)
```

**Reference**

`apply_filters('fluent_support/agent_has_access', $status, $request)`

This filter is located in <br>
`fluent-support/app/Http/Policies/AgentTicketPolicy.php`,
</div>

</details>


</explain-block>

