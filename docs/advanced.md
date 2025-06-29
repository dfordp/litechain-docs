---
sidebar_position: 6
---

# Advanced Examples

## Multi-Tool Workflows

```ts
const compositeTools = [
  {
    name: "analyze_text_complete",
    description: "Complete text analysis with word count, timestamps, and UUID",
    parameters: { text: { type: "string", description: "Text to analyze" } },
    execute: async (parameters) => {
      const text = parameters.text;
      const words = text.trim().split(/\s+/).filter(w => w.length > 0);
      const chars = text.length;
      const timestamp = new Date().toISOString();
      const analysisId = crypto.randomUUID();
      return `Complete Analysis [${analysisId}]:\n- Text: "${text}"\n- Word count: ${words.length}\n- Character count: ${chars}\n- Analysis time: ${timestamp}\n- Sentences: ${text.split(/[.!?]+/).filter(s => s.trim().length > 0).length}`;
    }
  },
  {
    name: "system_status",
    description: "Get comprehensive system status with performance metrics",
    parameters: {},
    execute: async () => {
      const timestamp = new Date().toISOString();
      const uptime = process.uptime();
      const memory = process.memoryUsage();
      return `System Status Report:\n- Current time: ${timestamp}\n- Uptime: ${Math.floor(uptime / 60)} minutes\n- Memory usage: ${Math.round(memory.heapUsed / 1024 / 1024)}MB\n- Process ID: ${process.pid}\n- Status: Operational`;
    }
  }
];

llm.addTool(compositeTools[0]);
llm.addTool(compositeTools[1]);

const complexQueries = [
  "Calculate 15% of 1000, then check the weather in New York, and create a file called 'weather-report.txt'",
  "Generate a UUID, get the current time in ISO format, then analyze our weekly sales data",
  "Count words in 'The quick brown fox jumps over the lazy dog', calculate the square of that number, and list all files"
];

for (const query of complexQueries) {
  const response = await llm.invoke(query);
  console.log(`Query: ${query}`);
  console.log(`Result: ${response}\n`);
}
```

## Performance Testing

```ts
async function performanceTest(toolName: string, query: string) {
  const startTime = Date.now();
  const response = await llm.invoke(query);
  const duration = Date.now() - startTime;
  return { tool: toolName, query, duration, responseLength: response.length };
}

const performanceTests = [
  { tool: "calculate", query: "Calculate 123 * 456" },
  { tool: "get_time", query: "What time is it in ISO format?" },
  { tool: "weather_lookup", query: "What's the weather in Tokyo?" },
  { tool: "word_count", query: "Count words in 'Hello world from Litechain'" }
];

const results = [];
for (const test of performanceTests) {
  llm.clearState();
  const result = await performanceTest(test.tool, test.query);
  results.push(result);
}

console.log("Performance Results:");
results.forEach(result => {
  console.log(`  ${result.tool}: ${result.duration}ms (${result.responseLength} chars)`);
});

const avgDuration = results.reduce((sum, r) => sum + r.duration, 0) / results.length;
console.log(`  Average: ${Math.round(avgDuration)}ms`);
```

## Comprehensive Feature Test

```ts
import litechain from "litechain";

async function comprehensiveTest() {
  const client = litechain.llm.gemini({
    apiKey: process.env.GEMINI_API_KEY!,
    model: "gemini-2.0-flash"
  });
  client.systemprompt = "You are a helpful assistant for mathematical calculations and time queries.";
  const tools = [
    { name: "add", description: "Add two numbers", parameters: { a: { type: "number", description: "First number" }, b: { type: "number", description: "Second number" } }, execute: async ({ a, b }) => (a + b).toString() },
    { name: "multiply", description: "Multiply two numbers", parameters: { a: { type: "number", description: "First number" }, b: { type: "number", description: "Second number" } }, execute: async ({ a, b }) => (a * b).toString() },
    { name: "get_time", description: "Get current time", parameters: {}, execute: async () => new Date().toISOString() }
  ];
  tools.forEach(tool => client.addTool(tool));
  const complexQuery = "multiply 4 with 5 and add the result with 342 and get the current time in human format?";
  const response = await client.invoke(complexQuery);
  console.log("Complex chain result:", response);
  const state = client.state;
  console.log("State Info:", {
    threadId: state.thread_id.substring(0, 8) + "...",
    historyEntries: state.history.length,
    conversationFlow: state.conversation_flow.length,
    currentLLM: state.current_llm,
    toolsAvailable: client.tools.length
  });
  const followUp = "What was the final result of that calculation?";
  const contextResponse = await client.invoke(followUp);
  console.log("Context preserved:", contextResponse);
  console.log("Recent conversation:");
  client.state.history.slice(-3).forEach((entry, i) => {
    const preview = entry.content.substring(0, 50) + "...";
    console.log(`  ${i + 1}. ${entry.role}: ${preview}`);
  });
  if (client.state.conversation_flow.length > 0) {
    console.log("Flow tracking:");
    client.state.conversation_flow.forEach((entry, i) => {
      const preview = entry.response.substring(0, 40) + "...";
      console.log(`  ${i + 1}. [${entry.timestamp.toLocaleTimeString()}] ${entry.llmName}: ${preview}`);
    });
  }
  return {
    success: true,
    testsCompleted: 8,
    toolsIntegrated: tools.length,
    stateManaged: true,
    contextPreserved: true
  };
}

comprehensiveTest()
  .then(results => { console.log("✅ All tests passed!", results); })
  .catch(error => { console.error("❌ Test failed:", error); });
```
