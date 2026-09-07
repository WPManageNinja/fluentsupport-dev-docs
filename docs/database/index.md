# Fluent Support Database Schema

<Badge type="tip" vertical="top" text="Fluent Support Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Fluent Support use custom database tables with options tables to store all the data. Here are the list of database tables, and it's schema to
understand overall database design and related data attributes of each model.
## Schema Design
<img src="/assets/images/fluent-support_database_diagram.png"  title="Database diagram">

## Database Tables

## fs_tickets

This table stores the ticket data

<table  class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>customer_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>agent_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>mailbox_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>product_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>product_source</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>privacy</td>
            <td>varchar(100) [<b>private</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>priority</td>
            <td>varchar(100) [<b>normal</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>client_priority</td>
            <td>varchar(100) [<b>normal</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>status</td>
            <td>varchar(100) [<b>new</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>title</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>slug</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>hash</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>content_hash</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>message_id</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>source</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>content</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>secret_content</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>last_agent_response</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>last_customer_response</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>waiting_since</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>response_count</td>
            <td>int(11) [<b>0</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>first_response_time</td>
            <td>int(11) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>total_close_time</td>
            <td>int(11) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>resolved_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>closed_by</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>serial_number</td>
            <td>bigint(20) UNSIGNED NULL, UNIQUE</td>
            <td></td>
        </tr>
        <tr>
            <td>ticket_number</td>
            <td>varchar(192) NULL</td>
            <td>Public ticket number, e.g. formatted with the <code>fluent_support/ticket_prefix</code> filter and <code>serial_number</code></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>

## fs_tag_pivot
This table stores polymorphic tag relations: which tag is attached to which record. `source_type`/`source_id` identify the tagged record (e.g. a ticket), and `tag_id` points at a row in `fs_taggables`.

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>tag_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>source_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>source_type</td>
            <td>varchar(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_taggables

This is a shared, polymorphic table for tag-like records — the `tag_type` column discriminates between the `Tag`, `AgentGroup`, and `TicketTag` models, which all use this table rather than having their own.

<table >
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>tag_type</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>title</td>
            <td>varchar(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>slug</td>
            <td>varchar(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>description</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>settings</td>
            <td>text NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_products
This table stores the product data
<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>source_uid</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>mailbox_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>title</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>description</td>
            <td>text NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>settings</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>source</td>
            <td>varchar(100) [<b>local</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_persons

This is a shared table for people records — both the `Agent` and `Customer` models use this table, distinguished by the `person_type` column, rather than having separate tables.

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>first_name</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>last_name</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>email</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>title</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>person_type</td>
            <td>varchar(192) [<b>customer</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>status</td>
            <td>varchar(192) [<b>active</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>ip_address</td>
            <td>varchar(20) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>last_ip_address</td>
            <td>varchar(20) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>address_line_1</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>address_line_2</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>city</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>zip</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>state</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>country</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>note</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>hash</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>user_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>description</td>
            <td>mediumtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>remote_uid</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>last_response_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_meta

This table stores the  meta data 

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>object_type</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>object_id</td>
            <td>bigint(20) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>key</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>value</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_mail_boxes

This table stores the  mailbox data 

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>name</td>
            <td>varchar(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>slug</td>
            <td>varchar(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>box_type</td>
            <td>varchar(50) [<b>web</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>email</td>
            <td>varchar(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>mapped_email</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>email_footer</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>settings</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>is_default</td>
            <td>ENUM('yes', 'no') [<b>no</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_data_metrix

This table stores the data metrix

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>stat_date</td>
            <td>DATE</td>
            <td></td>
        </tr>
        <tr>
            <td>data_type</td>
            <td>varchar(100) [<b>agent_stat</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>agent_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>replies</td>
            <td>int(11) UNSIGNED NULL [<b>0</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>active_tickets</td>
            <td>int(11) UNSIGNED NULL [<b>0</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>resolved_tickets</td>
            <td>int(11) UNSIGNED NULL [<b>0</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>new_tickets</td>
            <td>int(11) UNSIGNED NULL [<b>0</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>unassigned_tickets</td>
            <td>int(11) UNSIGNED NULL [<b>0</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>close_to_average</td>
            <td>int(11) UNSIGNED NULL [<b>0</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_conversations

This table stores the conversation data

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>serial</td>
            <td>int(11) UNSIGNED [<b>1</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>person_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>conversation_type</td>
            <td>varchar(100) [<b>response</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>content</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>source</td>
            <td>varchar(100) [<b>web</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>content_hash</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>message_id</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>is_important</td>
            <td>ENUM('yes', 'no') [<b>no</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_attachments

This table stores the attachment data

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>person_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>conversation_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>file_type</td>
            <td>varchar(100) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>file_path</td>
            <td>text NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>full_url</td>
            <td>text NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>settings</td>
            <td>text NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>title</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>file_hash</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>driver</td>
            <td>varchar(100) [<b>local</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>status</td>
            <td>varchar(100) NULL [<b>active</b>] </td>
            <td></td>
        </tr>
        <tr>
            <td>file_size</td>
            <td>varchar(100) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_notifications

This table stores internal notification records created by the Internal Notifications module (added in 2.2.0).

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>actor_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td>ID of the person who triggered the event (from fs_persons). NULL for system-generated notifications.</td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td>The related ticket ID</td>
        </tr>
        <tr>
            <td>conversation_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td>The related conversation/response ID, if applicable</td>
        </tr>
        <tr>
            <td>event_type</td>
            <td>varchar(192) NOT NULL</td>
            <td>Notification event type slug (e.g. <code>ticket_assigned</code>, <code>customer_replied</code>)</td>
        </tr>
        <tr>
            <td>category</td>
            <td>varchar(100) NOT NULL</td>
            <td>Notification category: <code>mentions</code>, <code>ticket_activity</code>, or <code>automation_triggers</code></td>
        </tr>
        <tr>
            <td>payload</td>
            <td>longtext NULL</td>
            <td>JSON-encoded contextual data for rendering the notification message</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_notification_users

This table tracks per-recipient read state for each internal notification (added in 2.2.0).

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>notification_id</td>
            <td>bigint(20) UNSIGNED NOT NULL</td>
            <td>Foreign key to <code>fs_notifications.id</code></td>
        </tr>
        <tr>
            <td>user_id</td>
            <td>bigint(20) UNSIGNED NOT NULL</td>
            <td>Recipient agent person ID (from fs_persons)</td>
        </tr>
        <tr>
            <td>channel</td>
            <td>varchar(100) [<b>web</b>]</td>
            <td>Delivery channel. Currently only <code>web</code> is used.</td>
        </tr>
        <tr>
            <td>is_read</td>
            <td>tinyint(1) [<b>0</b>]</td>
            <td>Whether the recipient has read this notification</td>
        </tr>
        <tr>
            <td>read_at</td>
            <td>timestamp NULL</td>
            <td>When the notification was marked as read</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_activities

This table stores the activities data

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>person_id</td>
            <td>bigint(20) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>person_type</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>event_type</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>object_id</td>
            <td>bigint(20) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>object_type</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>description</td>
            <td>mediumtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>

## fs_ai_activity_logs

<Badge type="tip" vertical="top" text="Fluent Support Core" />

This table stores AI usage logs — one row per AI request made from a ticket (e.g. generating a reply, summarizing a conversation) — used for auditing and token-usage tracking.

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>agent_id</td>
            <td>bigint(20) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>bigint(20) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>model_name</td>
            <td>varchar(50) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>tokens</td>
            <td>mediumtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>prompt</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>

## fs_saved_replies

<Badge type="warning" vertical="top" text="Advanced" />

This table stores saved/canned replies agents can reuse when responding to tickets. The `SavedReply` model lives in Core, but this table is only created when Pro (which ships the Saved Replies feature) is active.

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>mailbox_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>product_id</td>
            <td>bigint(20) UNSIGNED NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>title</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>content</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>

## fs_ticket_audits

<Badge type="warning" vertical="top" text="Advanced" />

This table stores one AI-generated mood/sentiment audit per ticket (`mood`, `score`, `summary`), refreshed on a schedule via the AI Audit reporting module.

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>bigint(20) UNSIGNED, UNIQUE</td>
            <td></td>
        </tr>
        <tr>
            <td>mood</td>
            <td>varchar(20) NULL</td>
            <td>One of Happy, Neutral, Frustrated, Very Unhappy</td>
        </tr>
        <tr>
            <td>score</td>
            <td>decimal(3,1) NULL</td>
            <td>0.0 (most negative) to 10.0 (most positive)</td>
        </tr>
        <tr>
            <td>summary</td>
            <td>text NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>status</td>
            <td>varchar(20) [<b>failed</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>error</td>
            <td>text NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>audited_at</td>
            <td>datetime NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>

## fs_report_snapshots

<Badge type="warning" vertical="top" text="Advanced" />

This table stores periodic (default every 6 hours) point-in-time snapshots of report data, keyed by `report_type`, so historical report trends can be shown without re-computing them from raw ticket data.

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>snapshot_time</td>
            <td>datetime</td>
            <td></td>
        </tr>
        <tr>
            <td>report_type</td>
            <td>varchar(50)</td>
            <td></td>
        </tr>
        <tr>
            <td>period</td>
            <td>varchar(20) [<b>6h</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>data</td>
            <td>longtext</td>
            <td>JSON-encoded report payload for this snapshot</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>

## fs_time_tracks

<Badge type="warning" vertical="top" text="Advanced" />

This table stores agent time-tracking entries against tickets (start/stop timers or manual entries), used for billing and reporting.

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>int(10) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>agent_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>customer_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>mailbox_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>started_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>completed_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>message</td>
            <td>text NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>status</td>
            <td>varchar(50) [<b>committed</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>working_minutes</td>
            <td>int(10) UNSIGNED [<b>0</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>billable_minutes</td>
            <td>int(10) UNSIGNED [<b>0</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>is_manual</td>
            <td>tinyint(1) [<b>0</b>]</td>
            <td>Whether this entry was manually logged rather than timed</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>

## fs_workflows

<Badge type="warning" vertical="top" text="Advanced" />

This table stores workflow automation definitions — a trigger plus settings — that run one or more `fs_workflow_actions` when matched.

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>bigint(20) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>priority</td>
            <td>int(10) [<b>10</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>title</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>trigger_key</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>trigger_type</td>
            <td>varchar(50) [<b>manual</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>settings</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>status</td>
            <td>varchar(50) [<b>draft</b>]</td>
            <td></td>
        </tr>
        <tr>
            <td>last_ran_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>

## fs_workflow_actions

<Badge type="warning" vertical="top" text="Advanced" />

This table stores the individual actions belonging to a workflow (`fs_workflows`), run in sequence when the parent workflow is triggered.

<table class="nowrap">
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>bigint(20) UNSIGNED Auto Increment</td>
            <td></td>
        </tr>
        <tr>
            <td>title</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>action_name</td>
            <td>varchar(192) NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>workflow_id</td>
            <td>bigint(20) NULL</td>
            <td>References fs_workflows.id</td>
        </tr>
        <tr>
            <td>settings</td>
            <td>longtext NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp NULL</td>
            <td></td>
        </tr>
    </tbody>
</table>
