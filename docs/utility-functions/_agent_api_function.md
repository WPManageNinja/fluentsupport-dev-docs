The Agents API Function offers a variety of utility methods designed for seamless interaction with agent-related operations. Integrate these functions into your custom PHP snippet or plugin to enhance agent-related functionalities.

### Initialization
```php 
$agentsApi = FluentSupportApi('agents');
```
`FluentSupportApi('agents')` basically returns `FluentSupport\App\Api\Classes\Agents` class which has different methods for interacting with `Agent` Model.

### Methods

### getAgents()
```php 
/**
 * Fetches a paginated list of all agents.
 * @return object Paginated result of FluentSupport\App\Models\Agent records.
 */
$agents = $agentsApi->getAgents();
```

### getAgent($agentId)
```php 
/*
* Find a agent by agent_id
* You can find a agent by agent_id
* @return: null or FluentSupport\App\Models\Agent Model
*/
$agent = $agentsApi->getAgent($agentId);
```

### updateAgent($data, $agentId)
```php 
/**
 * Updates a specific agent by ID.
 *
 * @param array $data The data to update the agent.
 * @param int $agentId The ID of the agent to update.
 * @return bool True on success, false if the agent was not found or no ID was given.
 */
$updateAgent = $agentsApi->updateAgent($data, $agentId);
```

### createAgentWithOrWithoutWpUser($data, $createWpUser)
Create an agent with or without a corresponding WordPress user. If $createWpUser is true.
```php 
/**
 * createAgentWithOrWithoutWpUser method creates a new agent, with or without a corresponding WordPress user.
 * If creating a WordPress user is requested, the process involves first creating the WordPress user,
 * and upon successful creation, proceeds to create a Fluent Support agent.
 *
 * @param array $data - Data for creating the agent.
 * @param bool $createWpUser - Whether to create a corresponding WordPress user.
 * @return mixed - Returns the created agent or null.
 */
$createAgent = $agentsApi->createAgentWithOrWithoutWpUser($data, $createWpUser);
```

### deleteAgent($id)
```php 
/**
 * Deletes a specific agent by ID.
 *
 * @param int $id The ID of the agent to delete.
 * @return void
 */
$agentsApi->deleteAgent($agentId);
```

### getInstance()
If you want to get the basic `FluentSupport\App\Models\Agent` model, you can achieve it with the following code

```php 
$agentInstance = FluentSupportApi('agents')->getInstance();
```

### Other methods

In addition to the methods above, `$agentsApi` proxies these `Agent` model query methods directly, so they can be called on the API instance itself:

```php 
$allAgents = $agentsApi->all();          // all agents, no pagination
$agents    = $agentsApi->get();          // agents matching any prior query constraints
$agent     = $agentsApi->find($agentId); // find by ID, or null if not found
$agent     = $agentsApi->first();        // first agent matching any prior query constraints
$agents    = $agentsApi->paginate();     // same as getAgents()
```

