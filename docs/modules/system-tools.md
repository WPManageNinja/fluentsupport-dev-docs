---
outline: deep
---

# System Tools

<Badge type="info" text="Fluent Support Core" /> <Badge type="tip" text="Since 2.5.0" />

## Overview

System Tools gives admins three maintenance pages: **Cron Job Monitor**, **Database Health** and **Data Cleanup**. Each page can be extended with a filter, so your add-on can list its own scheduled task, table or log type.

Viewing the pages needs the `fst_manage_settings` permission. Running a task, repairing tables and deleting logs also need the WordPress `manage_options` capability.

---

## REST Endpoints

All routes are under `fluent-support/v2/system-tools`.

| Method | Route | Purpose |
|---|---|---|
| GET | `/cron` | Status of every registered task, plus server limits |
| POST | `/cron/run` | Run a registered task now (`hook`) |
| GET | `/database` | Table report |
| POST | `/database/repair` | Re-run the migrations |
| GET | `/cleanup` | Count logs older than `days_before` for the `selected_logs` types |
| DELETE | `/cleanup` | Delete one chunk (up to 10,000 rows) of those logs |

Cleanup needs `days_before` of 7 or more and at least one valid type. `DELETE /cleanup` returns `deleted` and `has_more`; call it again while `has_more` is `true`.

---

## Cron Job Monitor

Built-in tasks: `fluent_support_hourly_tasks`, `fluent_support_daily_tasks`, `fluent_support_weekly_tasks`, and `fluent_support_half_hourly` (shown only when Pro listens on it). A task is `ok`, `overdue` (the next run is older than its interval) or `not_scheduled`. Only hooks in this list can be run manually.

### Adding a task

```php
add_filter('fluent_support/system_tools_cron_events', function ($jobs) {
    $jobs[] = [
        'hook'      => 'my_addon_sync',
        'title'     => __('My Add-on Sync', 'my-addon'),
        'interval'  => HOUR_IN_SECONDS,
        'scheduler' => 'wp_cron', // or 'action_scheduler'
    ];
    return $jobs;
});
```

Items without `hook`, `title` or `interval` are dropped. See [`system_tools_cron_events`](../hooks/filters/_other_useful_filters.md).

---

## Database Health

The page checks that each Fluent Support table exists. **Repair** re-runs the core migrations (they create missing tables and columns), then fires `fluent_support/system_tools_database_repair` so add-ons can create their own tables.

Tables that are created when their feature is first enabled (AI activity logs, internal notifications) are marked `lazy` and are not reported as missing.

```php
add_filter('fluent_support/system_tools_tables', function ($definitions) {
    $definitions[] = ['name' => 'my_addon_logs', 'title' => __('My Add-on Logs', 'my-addon')];
    return $definitions;
});

add_action('fluent_support/system_tools_database_repair', function () {
    // create the my_addon_logs table
});
```

`name` has no WordPress prefix. See [`system_tools_tables`](../hooks/filters/_other_useful_filters.md) and [`system_tools_database_repair`](../hooks/actions/_other_useful_actions.md).

---

## Data Cleanup

Built-in log types: `activity_logs`, `ai_activity_logs` and `internal_notifications`. Rows are matched on `created_at` and deleted in chunks of 10,000. The same cleanup runs from the daily task.

### Adding a log type

```php
add_filter('fluent_support/system_tools_cleanup_types', function ($types) {
    $types[] = [
        'key'    => 'my_addon_logs',
        'title'  => __('My Add-on Logs', 'my-addon'),
        'count'  => function ($cutoff) { return 0; },          // rows older than $cutoff
        'delete' => function ($cutoff, $limit) { return 0; },  // rows removed, at most $limit
    ];
    return $types;
});
```

`$cutoff` is a site-local `Y-m-d H:i:s` string. The return value of `delete` is capped at `$limit`. Types missing `key`, `title` or a callable `count`/`delete` are ignored, and built-in keys cannot be overridden. See [`system_tools_cleanup_types`](../hooks/filters/_other_useful_filters.md).
