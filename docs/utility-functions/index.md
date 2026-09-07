---
outline: deep
---

## FluentSupportApi()

`FluentSupportApi($key = null)` is the single entry point for all utility API classes below.

```php
/**
 * @param string|null $key One of 'agents', 'customers', 'products', 'tags', 'tickets'. Omit to get the raw API container.
 * @return mixed
 */
FluentSupportApi($key = null);
```

- `FluentSupportApi('agents')`, `FluentSupportApi('customers')`, `FluentSupportApi('products')`, `FluentSupportApi('tags')`, and `FluentSupportApi('tickets')` each give you the corresponding API class described below (`Agents`, `Customers`, `Products`, `Tags`, `Tickets`).
- Calling `FluentSupportApi()` with no argument returns the underlying API container object, which exposes the same five keys as properties (e.g. `FluentSupportApi()->agents`).

## Ticket API Function
<!--@include: ./_ticket_api_function.md-->

## Agents API Function
<!--@include: ./_agent_api_function.md-->

## Customer API Function
<!--@include: ./_customer_api_function.md-->

## Product API Function
<!--@include: ./_product_api_function.md-->

## Tag API Function
<!--@include: ./_tag_api_function.md-->

