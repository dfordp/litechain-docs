---
sidebar_position: 4
---

# Usage Guides

## Tool Definition

```ts
const tool = {
  name: "add",
  description: "Add two numbers",
  parameters: {
    a: { type: "number", description: "The first number" },
    b: { type: "number", description: "The second number" }
  },
  execute: async ({ a, b }) => (a + b).toString()
};

llm.addTool(tool);
```

## Prompt Templates

```ts
llm.systemprompt = "You are a helpful assistant. Context: {context}";
const response = await llm.invoke("What's the weather?", { context: "User is in NYC" });
```

## Connecting LLMs

```ts
const techLLM = litechain.llm.openai({ apiKey: "sk-...", model: "gpt-4" });
llm.connect({ TECH: techLLM });
```

## State Management

```ts
llm.state; // Access state at any point
llm.getConversationFlow(); // Get conversation history
llm.getTransferHistory(); // Get transfer history
llm.clearState(); // Clear conversation state
```

## Advanced Chaining Example

```ts
const entryLLM = litechain.llm.openai({ apiKey: "sk-entry", model: "gpt-3.5-turbo" });
const techLLM = litechain.llm.openai({ apiKey: "sk-tech", model: "gpt-3.5-turbo" });
const billingLLM = litechain.llm.openai({ apiKey: "sk-billing", model: "gpt-3.5-turbo" });

entryLLM.systemprompt = `You are the entry point support agent. For billing issues, respond with: [TRANSFER:BILLING] For technical issues, respond with: [TRANSFER:TECH]`;
techLLM.systemprompt = `You are a tech support specialist.`;
billingLLM.systemprompt = `You handle billing inquiries. If a refund is needed, respond with: [ESCALATE:HUMAN]`;

entryLLM.connect({ BILLING: billingLLM, TECH: techLLM });
billingLLM.connect({ HUMAN: async (message) => "A human will join shortly." });

const reply = await entryLLM.invoke("I want a refund for my last order");
console.log(reply);
```

See the [API Reference](api.md) for all available methods and options.
