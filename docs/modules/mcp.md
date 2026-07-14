---
outline: deep
---

# MCP Module

<Badge type="info" text="Fluent Support Core" /> <Badge type="tip" text="Requires FluentHub" />

## Overview

The MCP (Model Context Protocol) module exposes Fluent Support's ticket data and operations to compatible AI clients — such as Claude Desktop, Claude Code, Cursor, and Codex — through the WordPress Abilities API.

When enabled, AI agents can read tickets, post replies, create and close tickets, search customers, and retrieve team context, all authenticated through WordPress Application Passwords and subject to the agent's existing Fluent Support permissions.

The module is built on FluentHub's MCP adapter. Fluent Support registers its tools and the adapter handles transport, authentication, and routing.

## Architecture

```
AI Client (Claude Desktop / Cursor / Codex)
    │  HTTP + Basic Auth (Application Password)
    ▼
FluentHub MCP Adapter  ←──  fluent_support/mcp_loaded
    │
    ▼
Fluent Support Tool Registry
    ├── TicketTools       (list, get, create, update, close, reopen, delete, merge, activity)
    ├── ResponseTools     (reply, list saved replies)
    ├── CustomerTools     (search, get)
    └── ManagementTools   (support context, agent list, products, tags, mailboxes, SLA stats)
```

## Enabling MCP

MCP is configured from **Global Settings → MCP for AI Agents** in the Fluent Support admin.

1. Toggle **Enable MCP for AI Agents**.
2. If FluentHub is not active, click **Install FluentHub** or **Activate FluentHub**.
3. Once connected, the settings page shows the **Endpoint URL** and the number of registered tools.
4. Create a WordPress Application Password, enter your credentials, pick a client tab, and copy the generated connection snippet.

## Available Tools

### Ticket Tools

| Tool | Description |
|------|-------------|
| `list_tickets` | List tickets with filters (status, agent, product, mailbox, priority, tags, date range, search) |
| `get_ticket` | Retrieve a full ticket including conversation thread, customer history, custom fields, and integration data |
| `create_ticket` | Create a new ticket on behalf of a customer |
| `update_ticket` | Update title, status, priority, product, mailbox, or assigned agent |
| `close_ticket` | Close a ticket, optionally sending a final reply and/or internal note |
| `reopen_ticket` | Reopen a closed ticket |
| `delete_ticket` | Permanently delete a ticket (requires appropriate permission) |
| `merge_tickets` | Merge one or more tickets into a target ticket (requires Pro) |
| `get_ticket_activity` | Retrieve the activity log for a ticket (last 50 events) |

### Response Tools

| Tool | Description |
|------|-------------|
| `reply_to_ticket` | Post an agent reply to a ticket |
| `list_saved_replies` | List the current agent's saved replies, with optional search and product filter |

### Customer Tools

| Tool | Description |
|------|-------------|
| `search_customers` | Search customers by name or email with ticket counts |
| `get_customer` | Retrieve a customer profile with their full ticket history |

### Management Tools

| Tool | Description |
|------|-------------|
| `get_support_context` | Return team structure — agents, products, mailboxes, tags, ticket stats, and SLA settings. AI clients call this first to orient themselves. |

## Permissions

All MCP tool calls run in the context of the authenticated WordPress user. The tools enforce:

- Agent record must exist for the WordPress user — anonymous or customer accounts cannot call tools
- Mailbox restrictions: agents restricted to specific mailboxes cannot read or write tickets in other mailboxes
- Assignment permission: reassigning tickets via `update_ticket` requires the `fst_assign_agents` capability
- Delete permission: `delete_ticket` respects ticket deletion permissions
- Merge requires Fluent Support Pro

## Extension Points

### Hooks

#### Actions

- [`fluent_support/mcp_loaded`](/hooks/actions/#fluent_support_mcp_loaded) — fires after all tools are registered; use it to add tools or modify MCP state

#### Filters

- [`fluent_support/mcp_server_namespace`](/hooks/filters/#fluent_support_mcp_server_namespace) — change the server identifier registered with FluentHub
- [`fluent_support/mcp_server_route`](/hooks/filters/#fluent_support_mcp_server_route) — change the MCP endpoint route segment
- [`fluent_support/mcp_ability_names`](/hooks/filters/#fluent_support_mcp_ability_names) — add or remove WordPress Abilities API capability names used for MCP authentication
- [`fluent_support/mcp_ai_guidelines`](/hooks/filters/#fluent_support_mcp_ai_guidelines) — modify the AI system guidelines returned in `get_support_context`
- [`fluent_support/mcp_is_local_dev`](/hooks/filters/#fluent_support_mcp_is_local_dev) — override whether the site is treated as a local/self-signed dev environment

## Key Files

| File | Purpose |
|------|---------|
| `app/Modules/MCP/MCPInit.php` | Module bootstrap — registers tools, sets up transport gate |
| `app/Modules/MCP/AbilitiesRegistrar.php` | Registers Fluent Support capabilities with the WordPress Abilities API |
| `app/Modules/MCP/Tools/TicketTools.php` | Ticket CRUD and activity tool implementations |
| `app/Modules/MCP/Tools/ResponseTools.php` | Reply and saved-reply tool implementations |
| `app/Modules/MCP/Tools/CustomerTools.php` | Customer search and profile tool implementations |
| `app/Modules/MCP/Tools/ManagementTools.php` | Support context and SLA data tool |
| `app/Modules/MCP/Helpers/MCPHelper.php` | Shared formatting helpers (tickets, customers, responses, widgets) |
| `app/Modules/MCP/Support/PermissionGate.php` | Authorization checks for MCP requests |
| `app/Http/Controllers/McpSettingsController.php` | REST API for MCP settings, toggle, install-adapter, and config snippet generation |
