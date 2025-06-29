---
sidebar_position: 2
---

# Getting Started

## Installation

```bash
npm install litechain
```

> **Note:** You must also install the relevant LLM SDKs for the providers you use (e.g., `openai`, `@google/genai`, `@anthropic-ai/sdk`, `groq-sdk`).

## Basic Setup

```ts
import litechain from "litechain"; // One line import

const llm = litechain.llm.openai({
  apiKey: process.env.OPENAI_API_KEY!,
  model: "gpt-4o-mini",
  budget: { limit: 10 }, // $10 budget limit
  memory: 'vector',
  embeddings: { provider: 'openai', apiKey: process.env.OPENAI_API_KEY! }
});

llm.systemprompt = "You are a helpful assistant.";

// Use invoke for standard responses
const response = await llm.invoke("Hello!");

// Check budget usage
const usage = llm.getUsage();
console.log(`Cost: $${usage.cost.totalCost.toFixed(4)}`);

// Use run for streaming and advanced options
await llm.run("Write a story", {
  stream: true,
  onChunk: (chunk) => process.stdout.write(chunk.delta),
  onComplete: (content) => console.log(`\nCompleted: ${content.length} chars`)
});
```

## Next Steps
- [Features](features.md)
- [Usage Guides](usage.md)
- [API Reference](api.md)
