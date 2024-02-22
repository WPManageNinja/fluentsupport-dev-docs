# Fluent Support Database Schema

<Badge type="tip" vertical="top" text="Fluent Support Core" /> <Badge type="warning" vertical="top" text="Advanced" />

Fluent Support use custom database tables with options tables to store all the data. Here are the list of database tables, and it's schema to
understand overall database design and related data attributes of each model.
## Schema Design
<!-- <img :src="$withBase('/assets/img/ff-schema-design.png')" alt="Fluent Forms Schema Design" /> -->

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
This table stores the tag relations

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

This table stores the persons data

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
            <td>bigint(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>object_type</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>object_id</td>
            <td>bigint(20)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>key</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>value</td>
            <td>longtext</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp</td>
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
            <td>bigint(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>name</td>
            <td>varchar(192)</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>slug</td>
            <td>varchar(192)</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>box_type</td>
            <td>varchar(50)</td>
            <td>DEFAULT 'web'</td>
        </tr>
        <tr>
            <td>email</td>
            <td>varchar(192)</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>mapped_email</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>email_footer</td>
            <td>longtext</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>settings</td>
            <td>longtext</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>avatar</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_by</td>
            <td>bigint(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>is_default</td>
            <td>ENUM('yes', 'no')</td>
            <td>DEFAULT 'no'</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp</td>
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
            <td>bigint(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>stat_date</td>
            <td>DATE</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>data_type</td>
            <td>varchar(100)</td>
            <td>DEFAULT 'agent_stat'</td>
        </tr>
        <tr>
            <td>agent_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>replies</td>
            <td>int(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>active_tickets</td>
            <td>int(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>resolved_tickets</td>
            <td>int(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>new_tickets</td>
            <td>int(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>unassigned_tickets</td>
            <td>int(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>close_to_average</td>
            <td>int(11) UNSIGNED</td>
            <td>NULL DEFAULT 0</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp</td>
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
            <td>bigint(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>serial</td>
            <td>int(11) UNSIGNED</td>
            <td>DEFAULT 1</td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>person_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td>NOT NULL</td>
        </tr>
        <tr>
            <td>conversation_type</td>
            <td>varchar(100)</td>
            <td>DEFAULT 'response'</td>
        </tr>
        <tr>
            <td>content</td>
            <td>longtext</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>source</td>
            <td>varchar(100)</td>
            <td>DEFAULT 'web'</td>
        </tr>
        <tr>
            <td>content_hash</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>message_id</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>is_important</td>
            <td>ENUM('yes', 'no')</td>
            <td>DEFAULT 'no'</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp</td>
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
            <td>bigint(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>ticket_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>person_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>conversation_id</td>
            <td>bigint(20) UNSIGNED</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>file_type</td>
            <td>varchar(100)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>file_path</td>
            <td>text</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>full_url</td>
            <td>text</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>settings</td>
            <td>text</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>title</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>file_hash</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>driver</td>
            <td>varchar(100)</td>
            <td>DEFAULT 'local'</td>
        </tr>
        <tr>
            <td>status</td>
            <td>varchar(100)</td>
            <td>NULL DEFAULT 'active'</td>
        </tr>
        <tr>
            <td>file_size</td>
            <td>varchar(100)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp</td>
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
            <td>bigint(20) UNSIGNED</td>
            <td>NOT NULL PRIMARY KEY AUTO_INCREMENT</td>
        </tr>
        <tr>
            <td>person_id</td>
            <td>bigint(20)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>person_type</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>event_type</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>object_id</td>
            <td>bigint(20)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>object_type</td>
            <td>varchar(192)</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>description</td>
            <td>mediumtext</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>created_at</td>
            <td>timestamp</td>
            <td>NULL</td>
        </tr>
        <tr>
            <td>updated_at</td>
            <td>timestamp</td>
            <td>NULL</td>
        </tr>
    </tbody>
</table>

