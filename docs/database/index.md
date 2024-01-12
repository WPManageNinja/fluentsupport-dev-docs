# Fluent Support Database Schema

<Badge type="tip" vertical="top" text="Fluent Support Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Fluent Support use custom database tables with options tables to store all the data. Here are the list of database tables, and it's schema to
understand overall database design and related data attributes of each model.
## Schema Design
<!-- <img :src="$withBase('/assets/img/ff-schema-design.png')" alt="Fluent Forms Schema Design" /> -->

## Database Tables

## fs_tickets

This table store the tickets data

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
            <td>BIGINT(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>customer_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>agent_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>mailbox_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>product_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>product_source</td>
            <td>VARCHAR(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>privacy</td>
            <td>VARCHAR(100)</td>
            <td></td>
        </tr>
        <tr>
            <td>priority</td>
            <td>VARCHAR(100)</td>
            <td></td>
        </tr>
        <tr>
            <td>client_priority</td>
            <td>VARCHAR(100)</td>
            <td></td>
        </tr>
        <tr>
            <td>status</td>
            <td>VARCHAR(100)</td>
            <td></td>
        </tr>
        <tr>
            <td>title</td>
            <td>VARCHAR(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>slug</td>
            <td>VARCHAR(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>hash</td>
            <td>VARCHAR(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>content_hash</td>
            <td>VARCHAR(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>message_id</td>
            <td>VARCHAR(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>source</td>
            <td>VARCHAR(192)</td>
            <td></td>
        </tr>
        <tr>
            <td>content</td>
            <td>LONGTEXT</td>
            <td></td>
        </tr>
        <tr>
            <td>secret_content</td>
            <td>LONGTEXT</td>
            <td></td>
        </tr>
        <tr>
            <td>last_agent_response</td>
            <td>TIMESTAMP</td>
            <td></td>
        </tr>
        <tr>
            <td>last_customer_response</td>
            <td>TIMESTAMP</td>
            <td></td>
        </tr>
        <tr>
            <td>waiting_since</td>
            <td>TIMESTAMP</td>
            <td></td>
        </tr>
        <tr>
            <td>response_count</td>
            <td>INT(11)</td>
            <td></td>
        </tr>
        <tr>
            <td>first_response_time</td>
            <td>INT(11)</td>
            <td>Seconds took for first contact</td>
        </tr>
        <tr>
            <td>total_close_time</td>
            <td>INT(11)</td>
            <td>Seconds took for closing this ticket</td>
        </tr>
        <tr>
            <td>resolved_at</td>
            <td>TIMESTAMP</td>
            <td></td>
        </tr>
        <tr>
            <td>closed_by</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td></td>
        </tr>
    </tbody>
</table>

## fs_tag_pivot
Storing the tag relations

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Type</th>
            <th>Nullable</th>
            <th>Key</th>
            <th>Comment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NO</td>
            <td>PRIMARY KEY AUTO_INCREMENT</td>
            <td></td>
        </tr>
        <tr>
            <td>tag_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NO</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>source_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NO</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>source_type</td>
            <td>VARCHAR(192)</td>
            <td>NO</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>YES</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>YES</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


## fs_taggables
Storing the tag data

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
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>tag_type</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>title</td>
            <td>VARCHAR(192)</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>slug</td>
            <td>VARCHAR(192)</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>description</td>
            <td>LONGTEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>settings</td>
            <td>TEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>


## fs_products
Storing products data
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
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>source_uid</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>mailbox_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>title</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>description</td>
            <td>TEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>settings</td>
            <td>LONGTEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>source</td>
            <td>VARCHAR(100)</td>
            <td>DEFAULT 'local'</td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>


## fs_persons
Storing persons data
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
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>first_name</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>last_name</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>email</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>title</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>person_type</td>
            <td>VARCHAR(192)</td>
            <td>DEFAULT 'customer'</td>
        </tr>
        <tr>
            <td>status</td>
            <td>VARCHAR(192)</td>
            <td>DEFAULT 'active'</td>
        </tr>
        <tr>
            <td>ip_address</td>
            <td>VARCHAR(20)</td>
            <td>NULL</td>
        </tr>
        <!-- ... (Repeat for other columns) ... -->
        <tr>
            <td>last_response_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>


## fs_meta
Storing meta data
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
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>object_type</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>object_id</td>
            <td>BIGINT(20)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>key</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>value</td>
            <td>LONGTEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>


## fs_mail_boxes
Storing mailboxes data
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
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>name</td>
            <td>VARCHAR(192)</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>slug</td>
            <td>VARCHAR(192)</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>box_type</td>
            <td>VARCHAR(50)</td>
            <td>DEFAULT 'web'</td>
        </tr>
        <tr>
            <td>email</td>
            <td>VARCHAR(192)</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>mapped_email</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>email_footer</td>
            <td>LONGTEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>settings</td>
            <td>LONGTEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>is_default</td>
            <td>ENUM('yes', 'no')</td>
            <td>DEFAULT 'no'</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>


## fs_data_metrix
Store data metrix
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
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>stat_date</td>
            <td>DATE</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>data_type</td>
            <td>VARCHAR(100)</td>
            <td>DEFAULT 'agent_stat'</td>
        </tr>
        <tr>
            <td>agent_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>replies</td>
            <td>INT(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>active_tickets</td>
            <td>INT(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>resolved_tickets</td>
            <td>INT(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>new_tickets</td>
            <td>INT(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>unassigned_tickets</td>
            <td>INT(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>close_to_average</td>
            <td>INT(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>


## fs_conversations
Storing the conversation data

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
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>serial</td>
            <td>INT(11) UNSIGNED</td>
            <td>DEFAULT 1</td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>person_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>conversation_type</td>
            <td>VARCHAR(100)</td>
            <td>DEFAULT 'response'</td>
        </tr>
        <tr>
            <td>content</td>
            <td>LONGTEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>source</td>
            <td>VARCHAR(100)</td>
            <td>DEFAULT 'web'</td>
        </tr>
        <tr>
            <td>content_hash</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>message_id</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>is_important</td>
            <td>ENUM('yes', 'no')</td>
            <td>DEFAULT 'no'</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>


## fs_attachments
Storing attachment data

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
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>person_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>conversation_id</td>
            <td>BIGINT(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>file_type</td>
            <td>VARCHAR(100)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>file_path</td>
            <td>TEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>full_url</td>
            <td>TEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>settings</td>
            <td>TEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>title</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>file_hash</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>driver</td>
            <td>VARCHAR(100)</td>
            <td>DEFAULT 'local'</td>
        </tr>
        <tr>
            <td>status</td>
            <td>VARCHAR(100)</td>
            <td>NULL DEFAULT 'active'</td>
        </tr>
        <tr>
            <td>file_size</td>
            <td>VARCHAR(100)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>


## fs_activities
Storing activities data

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
            <td>BIGINT(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>person_id</td>
            <td>BIGINT(20)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>person_type</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>event_type</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>object_id</td>
            <td>BIGINT(20)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>object_type</td>
            <td>VARCHAR(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>description</td>
            <td>MEDIUMTEXT</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>TIMESTAMP</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>

