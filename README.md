# Litechain

**Litechain** is a modern, ergonomic framework for building powerful LLM agents and AI workflows. It’s a drop-in replacement for Langchain, offering a unified API for OpenAI, Gemini, Claude, and Groq models, with seamless tool/function calling, LLM chaining, budget tracking, and more.

---

## 🚀 Why Litechain?
- **One import, zero boilerplate**: All you need is `import litechain from "litechain"`.
- **Unified API**: Use OpenAI, Gemini, Claude, or Groq with the same interface.
- **Simple tool integration**: Register tools/functions as plain objects—no Zod schemas or extra imports.
- **LLM chaining**: Connect multiple LLMs for complex agent workflows with automatic routing.
- **Budget & state tracking**: Monitor token usage, costs, and conversation flow out of the box.
- **Streaming & embeddings**: Real-time streaming and custom embedding support for advanced use cases.

---

## Installation

```bash
npm install litechain
```

> **Note:** Also install the relevant LLM SDKs for your providers (e.g., `openai`, `@google/genai`, `@anthropic-ai/sdk`, `groq-sdk`).

---

## Quickstart

```ts
import litechain from "litechain";

const llm = litechain.llm.openai({
  apiKey: process.env.OPENAI_API_KEY!,
  model: "gpt-4o-mini",
  budget: { limit: 10 }, // $10 budget
  memory: 'vector',
  embeddings: { provider: 'openai', apiKey: process.env.OPENAI_API_KEY! }
});

llm.systemprompt = "You are a helpful assistant.";

// Register a tool
llm.addTool({
  name: "add",
  description: "Add two numbers",
  parameters: {
    a: { type: "number", description: "First number" },
    b: { type: "number", description: "Second number" }
  },
  execute: async ({ a, b }) => (a + b).toString()
});

// Invoke LLM
const response = await llm.invoke("add 5 and 3");
console.log(response); // "8"
```

---

## Documentation

- [Introduction](docs/intro.md)
- [Getting Started](docs/getting-started.md)
- [Features](docs/features.md)
- [Usage Guides](docs/usage.md)
- [API Reference](docs/api.md)
- [Advanced Examples](docs/advanced.md)
- [Use Cases](docs/use-cases.md)
- [Supported Providers](docs/providers.md)

---

Litechain makes building AI agents simple, fast, and robust. Explore the docs to get started!