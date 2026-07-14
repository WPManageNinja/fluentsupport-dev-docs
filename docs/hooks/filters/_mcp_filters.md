<explain-block title="fluent_support_mcp_server_namespace">
<hr>
<div class="fs-docs-content">
This filter hook allows you to change the server namespace (identifier) used when registering Fluent Support with FluentHub's MCP adapter. The namespace is used to identify this server among other MCP providers.

**Parameters**

- `$namespace` (string) The server namespace — default `'fluent-support'`

**Usage**

```php
add_filter('fluent_support/mcp_server_namespace', function ($namespace) {
    return 'my-fluent-support';
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/mcp_server_namespace', 'fluent-support')`

This filter is located in <br>
`fluent-support/app/Modules/MCP/MCPInit.php`
</div>
</explain-block>

<explain-block title="fluent_support_mcp_server_route">
<hr>
<div class="fs-docs-content">
This filter hook allows you to change the route segment used for the MCP endpoint URL. The full endpoint becomes `{site-url}/wp-json/{namespace}/{route}`.

**Parameters**

- `$route` (string) The route segment — default `'mcp'`

**Usage**

```php
add_filter('fluent_support/mcp_server_route', function ($route) {
    return 'support-mcp';
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/mcp_server_route', 'mcp')`

This filter is located in <br>
`fluent-support/app/Modules/MCP/MCPInit.php`
</div>
</explain-block>

<explain-block title="fluent_support_mcp_ability_names">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add or remove the WordPress Abilities API capability names that Fluent Support registers with the MCP adapter. Only users who have these abilities can authenticate MCP requests.

**Parameters**

- `$names` (array) Array of capability name strings

**Usage**

```php
add_filter('fluent_support/mcp_ability_names', function ($names) {
    // add a custom capability to the allowed list
    $names[] = 'my_custom_support_ability';
    return $names;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/mcp_ability_names', $names)`

This filter is located in <br>
`fluent-support/app/Modules/MCP/MCPInit.php`
</div>
</explain-block>

<explain-block title="fluent_support_mcp_ai_guidelines">
<hr>
<div class="fs-docs-content">
This filter hook allows you to modify the system-level AI guidelines string that is returned to MCP clients as part of the support context. These guidelines instruct the AI agent on how to handle Fluent Support data and interactions.

**Parameters**

- `$guidelines` (string) The default guidelines text

**Usage**

```php
add_filter('fluent_support/mcp_ai_guidelines', function ($guidelines) {
    return $guidelines . "\n- Always escalate billing tickets to a senior agent.";
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/mcp_ai_guidelines', $guidelines)`

This filter is located in <br>
`fluent-support/app/Modules/MCP/Tools/ManagementTools.php`
</div>
</explain-block>

<explain-block title="fluent_support_mcp_is_local_dev">
<hr>
<div class="fs-docs-content">
This filter hook allows you to override whether the current site is treated as a local or self-signed development environment by the MCP settings UI. When `true`, the generated connection snippets include flags to disable TLS verification.

**Parameters**

- `$isLocal` (boolean) Whether to treat the site as a local dev environment
- `$host` (string) The current site host (e.g. `'localhost'`, `'mysite.test'`)

**Usage**

```php
add_filter('fluent_support/mcp_is_local_dev', function ($isLocal, $host) {
    // treat any .test domain as local
    return str_ends_with($host, '.test') ?: $isLocal;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/mcp_is_local_dev', $isLocal, $host)`

This filter is located in <br>
`fluent-support/app/Http/Controllers/McpSettingsController.php`
</div>
</explain-block>
