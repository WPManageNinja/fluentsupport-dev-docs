<explain-block title="fluent_support_supported_openai_models">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add, remove, or reorder the OpenAI models available in the AI Model Setup settings page.

**Parameters**

- `$models` (array) Array of model definition arrays, each with `value` (model ID) and `label` (display name) keys

**Usage**

```php
add_filter('fluent_support/supported_openai_models', function ($models) {
    // add a fine-tuned model
    $models[] = ['value' => 'ft:gpt-4o:my-org:custom:abc123', 'label' => 'My Fine-tuned GPT-4o'];
    return $models;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/supported_openai_models', $models)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/AI/Providers/OpenAIProvider.php`
</div>
</explain-block>

<explain-block title="fluent_support_supported_gemini_models">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add, remove, or reorder the Google Gemini models available in the AI Model Setup settings page.

**Parameters**

- `$models` (array) Array of model definition arrays, each with `value` (model ID) and `label` (display name) keys

**Usage**

```php
add_filter('fluent_support/supported_gemini_models', function ($models) {
    $models[] = ['value' => 'gemini-2.5-pro-preview', 'label' => 'Gemini 2.5 Pro Preview'];
    return $models;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/supported_gemini_models', $models)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/AI/Providers/GeminiProvider.php`
</div>
</explain-block>

<explain-block title="fluent_support_supported_anthropic_models">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add, remove, or reorder the Anthropic Claude models available in the AI Model Setup settings page.

**Parameters**

- `$models` (array) Array of model definition arrays, each with `value` (model ID) and `label` (display name) keys

**Usage**

```php
add_filter('fluent_support/supported_anthropic_models', function ($models) {
    $models[] = ['value' => 'claude-opus-4-8-20251101', 'label' => 'Claude Opus 4 (Nov 2025)'];
    return $models;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/supported_anthropic_models', $models)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/AI/Providers/AnthropicProvider.php`
</div>
</explain-block>

<explain-block title="fluent_support_generate_response">
<hr>
<div class="fs-docs-content">
This filter hook allows you to modify the prompt sent to the AI provider when an agent requests a generated reply suggestion for a ticket.

**Parameters**

- `$prompt` (string) The full prompt string that will be sent to the AI
- `$ticket` (object) The ticket object for which the response is being generated

**Usage**

```php
add_filter('fluent_support/generate_response', function ($prompt, $ticket) {
    // prepend company-specific context
    return 'You are a support agent for Acme Corp. ' . $prompt;
}, 10, 2);
```

**Reference**

`apply_filters('fluent_support/generate_response', $prompt, $ticket)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/FluentBot/FluentBotHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_generate_ticket_summary">
<hr>
<div class="fs-docs-content">
This filter hook allows you to modify the prompt used when the AI summarises a ticket conversation.

**Parameters**

- `$prompt` (string) The summary prompt string

**Usage**

```php
add_filter('fluent_support/generate_ticket_summary', function ($prompt) {
    return $prompt . ' Focus on unresolved issues and action items.';
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/generate_ticket_summary', $prompt)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/FluentBot/FluentBotHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_find_customer_sentiment">
<hr>
<div class="fs-docs-content">
This filter hook allows you to modify the prompt used when the AI analyses customer sentiment for a ticket.

**Parameters**

- `$prompt` (string) The sentiment analysis prompt string

**Usage**

```php
add_filter('fluent_support/find_customer_sentiment', function ($prompt) {
    return $prompt . ' Respond with one of: Positive, Neutral, Frustrated, Angry.';
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/find_customer_sentiment', $prompt)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/FluentBot/FluentBotHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_modify_selected_text">
<hr>
<div class="fs-docs-content">
This filter hook allows you to modify the prompt used when an agent asks the AI to rewrite or refine a selected portion of their reply text.

**Parameters**

- `$prompt` (string) The text modification prompt string

**Usage**

```php
add_filter('fluent_support/modify_selected_text', function ($prompt) {
    return $prompt . ' Use a formal, professional tone at all times.';
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/modify_selected_text', $prompt)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/FluentBot/FluentBotHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_get_create_response_preset_prompts">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add, remove, or modify the preset prompt buttons shown in the AI response generator panel when an agent is composing a reply.

**Parameters**

- `$presets` (array) Array of preset item arrays, each with three keys: `'label'` (string, button label shown to the agent), `'text'` (string, internal action key sent to the AI), and `'description'` (string, tooltip or description of what the preset does)

**Usage**

```php
add_filter('fluent_support/get_create_response_preset_prompts', function ($presets) {
    $presets[] = [
        'label'       => 'Apologise & Escalate',
        'text'        => 'apologiseEscalate',
        'description' => 'Write a professional apology and indicate the ticket is being escalated to a senior agent.',
    ];
    return $presets;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/get_create_response_preset_prompts', $presets)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/FluentBot/FluentBotHelper.php`,<br>
`fluent-support-pro/app/Services/Integrations/AI/AIHelper.php`
</div>
</explain-block>

<explain-block title="fluent_support_get_modify_response_preset_prompts">
<hr>
<div class="fs-docs-content">
This filter hook allows you to add, remove, or modify the preset prompt buttons shown in the AI text-refinement panel when an agent selects text in their reply.

**Parameters**

- `$presets` (array) Array of preset item arrays, each with three keys: `'label'` (string, button label shown to the agent), `'text'` (string, internal action key sent to the AI), and `'description'` (string, tooltip or description of what the preset does)

**Usage**

```php
add_filter('fluent_support/get_modify_response_preset_prompts', function ($presets) {
    $presets[] = [
        'label'       => 'Add Empathy',
        'text'        => 'addEmpathy',
        'description' => 'Rewrite the selected text to include a more empathetic and understanding tone.',
    ];
    return $presets;
}, 10, 1);
```

**Reference**

`apply_filters('fluent_support/get_modify_response_preset_prompts', $presets)`

This filter is located in <br>
`fluent-support/app/Services/Integrations/FluentBot/FluentBotHelper.php`,<br>
`fluent-support-pro/app/Services/Integrations/AI/AIHelper.php`
</div>
</explain-block>
