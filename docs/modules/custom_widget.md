
## Customer Extra Widget
This feature allows the addition of extra widgets for customers on the view ticket page.

### Hook Name:
`fluent_support/customer_extra_widgets`

### Description:
This filter, `fluent_support/customer_extra_widgets`, serves as a gateway for developers to enhance the functionality of the view ticket page within Fluent Support. When developers utilize this filter, they can integrate custom widgets seamlessly into the view ticket interface. These widgets can contain diverse HTML content tailored to specific needs, such as presenting supplementary information, offering additional features, or facilitating user interactions.

By leveraging this filter, developers gain the flexibility to extend the capabilities of Fluent Support's view ticket page according to their project requirements. This extensibility empowers them to enrich the user experience by integrating bespoke elements that cater to unique use cases or business scenarios. Additionally, developers can leverage this filter to maintain consistency with the overall design and functionality of Fluent Support while introducing customizations tailored to their applications or projects.


### Parameters
- `$widgets` (array): An associative array containing information about the widgets to be displayed. Each element of the array represents a single widget and includes a unique key and an array of widget data.

- `customer` (object): You can use the customer data to check user permissions and other related information.


### Example:

```php
add_filter('fluent_support/customer_extra_widgets', function ($widgets, $customer) {

    ob_start();
    ?>

    <ul>
        <li title="Custom Widget List 1" class="fs_widget_li">
            <code>Widget Title: Custom Widget List 1</code><br>
            <code>Description: This is the first custom widget</code>
        </li>
        <li title="Custom Widget List 2" class="fs_widget_li">
            <code>Widget Title: Custom Widget List 2</code><br>
            <code>Description: This is the second custom widget</code>
        </li>
    </ul>

    <?php
    $content = ob_get_clean();

    $widgets['custom_widget_1'] = [
        'header'    => __('Custom Widget 1', 'your-text-domain'),
        'body_html' => $content
    ];

    return $widgets;

}, 10, 2);
```

### Output:
  <img src="/assets/images/custom-widget.png" width="400" title="hover text">

### Notes:
- Ensure that the HTML content generated for custom widgets is properly formatted and accessible.
- Use unique keys for each custom widget to avoid conflicts.

## Widgets for AI Agents (MCP)

AI agents connected through the Fluent Support MCP server read the same widgets when they call `get-ticket`. They don't need HTML. Since Fluent Support 2.4.1 the filter receives a third argument, `$context`, that says what the caller wants, so a widget can return plain data to agents and skip work nobody asked for.

### The `$context` argument

- `$context` (array|null): `['format' => 'html'|'mcp', 'keys' => string[]|null]`
  - `format`: `'html'` for the agent UI (the ticket and customer pages), `'mcp'` for AI agents.
  - `keys`: the widget keys the caller asked for, or `null` for all. An agent passes these with `get-ticket`'s `with_integrations` parameter, e.g. `["custom_widget_1"]`.

Register the filter with **3** accepted arguments to receive it. Two helpers read it:

- `FluentSupport\App\Services\ProfileInfoService::wantsWidget($context, $key)`: `true` when the caller wants this widget. Call it before running any query.
- `FluentSupport\App\Services\ProfileInfoService::isMcpWidgetRequest($context)`: `true` when the caller wants `mcp` data instead of `body_html`.

### Returning data with the `mcp` key

For an MCP request, return an `mcp` array instead of `body_html`. The agent receives it as `integrations.<widget_key>.data`, with fields it can read directly instead of prose.

```php
use FluentSupport\App\Services\ProfileInfoService;

add_filter('fluent_support/customer_extra_widgets', function ($widgets, $customer, $context = null) {

    // Skip the queries when an AI agent asked for other widgets only.
    if ($context && !ProfileInfoService::wantsWidget($context, 'my_account')) {
        return $widgets;
    }

    $account = my_plugin_get_account($customer->email);
    if (!$account) {
        return $widgets;
    }

    if ($context && ProfileInfoService::isMcpWidgetRequest($context)) {
        $widgets['my_account'] = [
            'title' => __('Account', 'your-text-domain'),
            'mcp'   => [
                'plan'      => $account->plan,           // 'paid'
                'status'    => $account->status,         // raw slug, e.g. 'active'
                'renews_at' => gmdate('c', $account->renews_at),
                'teams'     => array_map(function ($team) {
                    return [
                        'id'          => (int) $team->id,
                        'name'        => $team->name,
                        'bounce_rate' => (float) $team->bounce_rate,
                        'url'         => admin_url('admin.php?page=my-plugin&team=' . $team->id),
                    ];
                }, $account->teams),
            ],
        ];

        return $widgets;
    }

    ob_start();
    // ...render the HTML for the agent UI
    $widgets['my_account'] = [
        'header'    => __('Account', 'your-text-domain'),
        'body_html' => ob_get_clean(),
    ];

    return $widgets;

}, 10, 3);
```

**Writing good `mcp` data**

- Put a few summary fields first (`plan`, `status`, `total_orders`), then lists (`orders`, `licenses`, `teams`).
- Use raw values: status slugs, ISO 8601 dates (`null` for "never"), money as a number plus an ISO currency code (`'currency' => 'USD'`), never a symbol or HTML entity.
- Add a `url` to items the agent may need to open.
- Build it from the data the widget already loads. It runs on every `get-ticket` call.

### Sanitizing limits

`mcp` data is treated as untrusted integration output. Fluent Support keeps:

- Scalars only: strings, integers, floats, booleans and `null`. Objects are dropped.
- Strings with tags and control characters stripped, cut to 500 characters.
- At most 50 items per array.
- At most 5 levels of nesting, counting the `mcp` array itself. `mcp => orders[] => {items[] => {name, qty}}` fits; anything deeper is dropped.
- Array keys passed through `sanitize_key()`.

### Without the `mcp` key

Widgets that only return `body_html` keep working. For MCP, Fluent Support converts the HTML to Markdown, so lists, tables and links keep their shape, and sends it as `integrations.<widget_key>.data.summary`. A `summary` string set on the widget is used instead when present. Widgets that ignore `keys` are still filtered out afterwards, but their queries have already run.

### Backward compatibility

- **Older Fluent Support versions** call the filter with two arguments and don't have the helpers. Give `$context` a `null` default and guard every helper call with `$context &&`, as in the example. With a `null` context the callback takes the HTML path, exactly as before.
- **Older callbacks** registered with 2 accepted arguments never see `$context` and keep returning HTML.

## Customer Summary in Ticket Lists (MCP)

The MCP `list-tickets` tool can show a one-line `customer_summary` on each row, so an agent can triage a page of tickets without opening each one. Integrations provide it with the `fluent_support/mcp_customer_list_meta` filter.

```php
add_filter('fluent_support/mcp_customer_list_meta', function ($lines, $customerIds, $customers, $context) {

    // One query for the whole page, not one per customer.
    $accounts = my_plugin_get_accounts_by_emails(wp_list_pluck($customers, 'email'));

    foreach ($customers as $customerId => $customer) {
        if (isset($accounts[$customer->email]) && !isset($lines[$customerId])) {
            $account = $accounts[$customer->email];
            $lines[$customerId] = sprintf('%s plan · %d sent/30d · domain %s', $account->plan, $account->sent_30d, $account->domain_status);
        }
    }

    return $lines;

}, 10, 4);
```

- It fires once per list page with every customer on it. Use one query for all of them, and no remote calls; cache anything expensive.
- Merge into `$lines` and keep keys that are already set.
- Values are plain text: tags and control characters are stripped and lines are cut to 120 characters. Non-scalar values and customer IDs not on the page are dropped.
- It only runs for users with the "Access Private Data (Customers, Agents)" permission, since the line can carry billing or CRM details.


