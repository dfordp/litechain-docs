---
sidebar_position: 8
---

# Supported Providers

Litechain supports all major LLM and embedding providers with a unified API:

## LLM Providers
- **OpenAI** (`openai`)
- **Gemini** (`@google/genai`)
- **Claude** (`@anthropic-ai/sdk`)
- **Groq** (`groq-sdk`)

## Embedding Providers
- **OpenAI**
- **Cohere**
- **HuggingFace**
- **Custom Functions**

## Example: Custom Embeddings

```ts
// Built-in provider
const chain = litechain({
  model: "gpt-4o",
  apiKey: "sk-...",
  embeddings: {
    provider: "cohere",
    apiKey: "...",
    model: "embed-v3"
  }
});

// Custom embedding function
const chain = litechain({
  model: "gpt-4o",
  apiKey: "sk-...",
  embeddings: async (text) => {
    // Your custom embedding logic
    return [0.1, 0.2, 0.3]; // Return vector
  }
});
```

See [API Reference](api.md) for configuration details.
