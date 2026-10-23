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
Fluent Support Abilities (fluent-support/*)
    ├── TicketTools       (list, get, create, update, close, delete, merge, split, activity)
    ├── ResponseTools     (reply, internal notes, drafts, saved replies)
    ├── CustomerTools     (search, customer tickets, update)
    ├── ManagementTools   (support context, ticket views, insights, tags, mentions, bulk actions)
    └── PromptsRegistrar  (triage-queue, draft-reply, summarize-ticket, support-report)
```

## Enabling MCP

MCP is configured from **Global Settings → MCP for AI Agents** in the Fluent Support admin.

1. Toggle **Enable MCP for AI Agents**.
2. If FluentHub is not active, click **Install FluentHub** or **Activate FluentHub**.
3. Once connected, the settings page shows the **Endpoint URL** and the number of registered tools.
4. Create a WordPress Application Password, enter your credentials, pick a client tab, and copy the generated connection snippet.

## Available Tools

Every tool is a WordPress ability named `fluent-support/{tool}`. AI clients should call `get-support-context` first: it returns the agent's identity, queue, IDs for agents, products, mailboxes and tags, and the ticket views.

### Ticket Tools

| Tool | Description |
|------|-------------|
| `list-tickets` | List and filter tickets (status, agent, product, mailbox, priority, tags, waiting on, dates, search), with cursor paging |
| `get-ticket` | Get a ticket with its conversation, customer history, custom fields and integration data |
| `create-ticket` | Create a ticket on behalf of a customer; creates the customer if the email is new |
| `update-ticket` | Change title, priority, status, product, mailbox or assigned agent |
| `close-ticket` | Close a ticket, optionally with a final reply and an internal note |
| `delete-ticket` | Permanently delete a ticket |
| `get-ticket-activity` | Get the activity timeline for a ticket |
| `merge-tickets` | Merge duplicate tickets into one (requires Pro) |
| `split-ticket` | Move one message out of a ticket into a new ticket (requires Pro) |

### Response Tools

| Tool | Description |
|------|-------------|
| `reply-to-ticket` | Send a customer-visible reply, or save it as a draft with `draft=true` |
| `add-internal-note` | Add an agent-only note; `@[agent_id:Name]` mentions notify an agent |
| `update-response` | Replace the text of your own draft reply or internal note |
| `delete-response` | Delete your own draft reply or internal note |
| `publish-draft-reply` | Send a draft reply, the same as Approve in the ticket view |
| `list-saved-replies` | List your saved replies, with optional search and product filter |

### Customer Tools

| Tool | Description |
|------|-------------|
| `search-customers` | Search customers by name or email |
| `get-customer-tickets` | Get a customer's tickets by email, name or ID |
| `update-customer` | Change a customer's name, title, note or address |

### Management Tools

| Tool | Description |
|------|-------------|
| `get-support-context` | Start here: agent identity, queue, reference IDs, ticket views and guidelines |
| `get-ticket-views` | Current counts for each ticket queue, the same views as the ticket list sidebar |
| `get-support-insights` | Team performance for a period: volume, response and resolution times, per-agent numbers |
| `tag-ticket` | Add or remove tags on a ticket |
| `get-mentions` | Tickets where you were @mentioned |
| `bulk-action` | Close, assign, tag or reply to several tickets at once |

### Prompts

| Prompt | Description |
|--------|-------------|
| `triage-queue` | Propose an action for each ticket waiting on an agent, sending nothing until approved |
| `draft-reply` | Read a ticket and save a draft reply for review |
| `summarize-ticket` | Summarize a ticket for a teammate, optionally as an internal note |
| `support-report` | Write a short report on volume, response times and workload for a period |

## Permissions

All MCP tool calls run in the context of the authenticated WordPress user. The tools enforce:

- Agent record must exist for the WordPress user — anonymous or customer accounts cannot call tools
- Each ability requires the matching Fluent Support permission, listed in `AbilityGuard` (for example `fst_view_tickets` to read tickets, `fst_sensitive_data` for customer tools, `fst_view_all_reports` for `get-support-insights`)
- Mailbox restrictions and ticket visibility: agents restricted to specific mailboxes, or to their own tickets, cannot read or write other tickets
- Assignment permission: reassigning tickets via `update-ticket` requires the `fst_assign_agents` capability
- `update-response` and `delete-response` only change the agent's own drafts and notes
- `merge-tickets` requires Fluent Support Pro and `fst_merge_tickets`; `split-ticket` requires Fluent Support Pro and `fst_split_ticket`

## Extension Points

### Hooks

#### Actions

- [`fluent_support/mcp_loaded`](/hooks/actions/#fluent_support_mcp_loaded) — fires after all tools are registered; use it to add tools or modify MCP state

#### Filters

- [`fluent_support/mcp_server_namespace`](/hooks/filters/#fluent_support_mcp_server_namespace) — change the server identifier registered with FluentHub
- [`fluent_support/mcp_server_route`](/hooks/filters/#fluent_support_mcp_server_route) — change the MCP endpoint route segment
- [`fluent_support/mcp_ability_names`](/hooks/filters/#fluent_support_mcp_ability_names) — add or remove WordPress Abilities API capability names used for MCP authentication
- [`fluent_support/mcp_ai_guidelines`](/hooks/filters/#fluent_support_mcp_ai_guidelines) — modify the AI system guidelines returned in `get-support-context`
- [`fluent_support/mcp_is_local_dev`](/hooks/filters/#fluent_support_mcp_is_local_dev) — override whether the site is treated as a local/self-signed dev environment

## Key Files

| File | Purpose |
|------|---------|
| `app/Modules/MCP/MCPInit.php` | Module bootstrap — registers tools, sets up transport gate |
| `app/Modules/MCP/AbilitiesRegistrar.php` | Registers the `fluent-support/*` tools with the WordPress Abilities API |
| `app/Modules/MCP/PromptsRegistrar.php` | Registers the MCP prompts (`triage-queue`, `draft-reply`, `summarize-ticket`, `support-report`) |
| `app/Modules/MCP/Resources/ResourceProvider.php` | MCP resources such as `stats/overview` |
| `app/Modules/MCP/Tools/TicketTools.php` | Ticket CRUD and activity tool implementations |
| `app/Modules/MCP/Tools/ResponseTools.php` | Reply and saved-reply tool implementations |
| `app/Modules/MCP/Tools/CustomerTools.php` | Customer search and profile tool implementations |
| `app/Modules/MCP/Tools/ManagementTools.php` | Support context and SLA data tool |
| `app/Modules/MCP/Helpers/MCPHelper.php` | Shared formatting helpers (tickets, customers, responses, widgets) |
| `app/Modules/MCP/Support/PermissionGate.php` | Authorization checks for MCP requests |
| `app/Modules/MCP/Support/AbilityGuard.php` | Per-ability capability requirements (`any_of`/`all_of`) for MCP tool abilities |
| `app/Modules/MCP/Support/TicketAccessGuard.php` | Restricts ticket-tool access by an agent's mailbox permissions |
| `app/Modules/MCP/Support/CustomerMetaEnricher.php` | Resolves optional per-customer meta lines (CRM/billing) for MCP list output, gated on `fst_sensitive_data` |
| `app/Http/Controllers/McpSettingsController.php` | REST API for MCP settings, toggle, install-adapter, and config snippet generation |
