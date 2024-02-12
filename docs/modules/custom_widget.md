
## Customer Extra Widget
This feature allows the addition of extra widgets for customers on the view ticket page.

### Hook Name:
`fluent_support/customer_extra_widgets`

### Description:
This hook allows developers to add custom widgets to the view ticket page in Fluent Support. By hooking into this filter, developers can inject their own HTML content to display additional information or functionality.

### Parameters
- `$widgets` (array): An associative array containing information about the widgets to be displayed. Each element of the array represents a single widget and includes a unique key and an array of widget data.

- `customer` (object): You can use the customer data to check user permissions and other related information.


### Example:

```php
add_filter('fluent_support/customer_extra_widgets', function ($widgets, $customer) {

    ob_start();
    ?>

    <ul>
        <li title="Custom Widget 1" class="fs_widget_li">
            <code>Widget Title: Custom Widget 1</code><br>
            <code>Description: This is the first custom widget</code>
        </li>
        <li title="Custom Widget 2" class="fs_widget_li">
            <code>Widget Title: Custom Widget 2</code><br>
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


