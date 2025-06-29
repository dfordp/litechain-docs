---
sidebar_position: 5
---

# API Reference

## Core LLM Methods

### `llm.run(prompt, options)`
Enhanced method supporting streaming and advanced options.

```ts
await llm.run("Generate content", {
  stream: true,
  onChunk: (chunk: StreamChunk) => void,
  onComplete: (content: string) => void,
  onError: (error: Error) => void
});
```

### `llm.invoke(message, variables)`
Standard invocation with variable interpolation.

```ts
const response = await llm.invoke("Hello {name}", { name: "Alice" });
```

### `llm.addTool(tool)`
Add tools for function calling.

```ts
llm.addTool({
  name: "tool_name",
  description: "Tool description",
  parameters: { /* parameter schema */ },
  execute: async (params) => "result"
});
```

### `llm.connect(routes)`
Connect LLM to other LLMs or functions for chaining.

```ts
llm.connect({
  SUPPORT: supportLLM,
  BILLING: billingLLM,
  HUMAN: async (msg) => "Human response"
});
```

## State Management Methods

### `llm.getConversationFlow()`
Get detailed conversation history with timestamps.

### `llm.getTransferHistory()`
Get LLM transfer/escalation history.

### `llm.clearState()`
Reset conversation state and start fresh.

## Memory Factory

### `createMemory(config, sessionId?)`
Create memory instances with different backends.

```ts
const chatMemory = createMemory('chat');
const vectorMemory = createMemory('vector');
```

## Types

### Tool Definition
```ts
interface Tool<P = Record<string, any>> {
  name: string;
  description: string;
  parameters: P; // JSON schema for parameters
  execute: (parameters: P) => Promise<string>;
}
```

### Connection Types
```ts
type ConnectionType = LLMBase | ((message: string) => Promise<string> | string);
interface ConnectionRoutes {
  [key: string]: ConnectionType;
}
```

### Streaming Types
```ts
interface StreamChunk {
  content: string;
  delta: string;
  isComplete: boolean;
  timestamp?: Date;
  metadata?: Record<string, any>;
}

interface StreamOptions {
  onChunk?: (chunk: StreamChunk) => void;
  onComplete?: (fullContent: string) => void;
  onError?: (error: Error) => void;
}
```

See [Advanced Examples](advanced.md) for more API usage patterns.
