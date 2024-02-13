
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


