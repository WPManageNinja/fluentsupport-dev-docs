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

<explain-block title="fluent_support_mcp_customer_list_meta">
<hr>
<div class="fs-docs-content">
This filter hook allows you to inject a short, plain-text status line per customer into MCP ticket-list output (e.g. a CRM/billing status line). Return an array keyed by customer ID — merge into it, don't overwrite it. Only runs for agents with the `fst_sensitive_data` capability. The line is shown as `customer_summary` on each `list-tickets` row, stripped to plain text and cut to 120 characters. See [Custom Widget](/modules/custom_widget).

**Parameters**

- `$lines` (array) Default `[]`. Map of `customer_id => plain-text line`, merge don't overwrite
- `$customerIds` (int[]) Deduped customer IDs on this page
- `$customers` (array) Map of `customer_id => loaded Customer model`
- `$context` (array) `['surface' => string, 'agent_id' => int|null]`

**Usage**

```php
add_filter('fluent_support/mcp_customer_list_meta', function ($lines, $customerIds, $customers, $context) {
    foreach ($customerIds as $id) {
        $lines[$id] = 'VIP customer since ' . $customers[$id]->created_at;
    }
    return $lines;
}, 10, 4);
```

**Reference**

`apply_filters('fluent_support/mcp_customer_list_meta', [], $customerIds, $customers, $context)`

This filter is located in <br>
`fluent-support/app/Modules/MCP/Support/CustomerMetaEnricher.php`
</div>
</explain-block>

<explain-block title="fluent_support_mcp_prompt_names">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add or remove the MCP prompts the Fluent Support MCP server exposes. Names must be fully qualified ability names; entries that are not strings matching `[a-z0-9-/]` are dropped, and duplicates are removed.

**Parameters**

- `$promptNames` (array) Prompt ability names. Default `fluent-support/triage-queue`, `fluent-support/draft-reply`, `fluent-support/summarize-ticket`, `fluent-support/support-report`

**Usage**

```php
add_filter('fluent_support/mcp_prompt_names', function ($promptNames) {
    return array_diff($promptNames, ['fluent-support/support-report']);
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/mcp_prompt_names', array_keys(PromptsRegistrar::getDefinitions()))`

This filter is located in <br>
`fluent-support/app/Modules/MCP/MCPInit.php`
</div>
</explain-block>

<explain-block title="fluent_support_mcp_server_instructions">
<hr>
<div class="fs-docs-content">
This filter hook allows you to change the instructions the Fluent Support MCP server sends to MCP clients when they connect. The default text tells the AI agent how to use the tools (workflow, care with destructive tools, dates and the result format). Append site-specific guidance rather than replacing it.

**Parameters**

- `$instructions` (string) The server instructions

**Usage**

```php
add_filter('fluent_support/mcp_server_instructions', function ($instructions) {
    return $instructions . "\n\nAlways sign replies as 'The Acme Support Team'.";
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/mcp_server_instructions', $instructions)`

This filter is located in <br>
`fluent-support/app/Modules/MCP/MCPInit.php`
</div>
</explain-block>

<explain-block title="fluent_support_pro_mcp_tool_classes">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add classes whose static `definitions()` method returns extra MCP tools. Pro registers each definition as a WordPress ability and adds it to the free plugin's MCP server through `fluent_support/mcp_ability_names`. This filter is available in Fluent Support Pro only.

Each definition is keyed by its ability name and takes `label`, `description`, `execute_callback`, `permissions` (`any_of` / `all_of` Fluent Support permission lists; a tool with no permissions is denied), and optionally `input_schema` and `annotations`.

**Parameters**

- `$classes` (string[]) Fully qualified class names. Default empty

**Usage**

```php
add_filter('fluent_support_pro/mcp_tool_classes', function ($classes) {
    $classes[] = \MyPlugin\Mcp\MySupportTools::class;
    return $classes;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support_pro/mcp_tool_classes', $classes)`

This filter is located in <br>
`fluent-support-pro/app/Modules/MCP/AbilitiesRegistrar.php`
</div>
</explain-block>
