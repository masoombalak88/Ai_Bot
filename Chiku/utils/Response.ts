export async function getChikuResponse(userMessage: string): Promise<string> {
  
  const primaryApiUrl =
    "https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5IZkJDMlNyYUVUTjIyZVN3UWFNX3BFTU85SWpCM2NUMUk3T2dxejhLSzBhNWNMMXNzZlp3c09BSTR6YW1Sc1BmdGNTVk1GY0liT1RoWDZZX1lNZlZ0Z1dqd3c9PQ==";
  const primaryApiHeaders = {
    "Content-Type": "application/json",
  };
  const primaryApiPayload = {
    prompt: userMessage,
  };

  
  const firstApiUrl = "https://liaobots.work/api/chat";
  const firstApiHeaders = {
    Cookie: `gkp2=fTcjnRLr8E3IMrksLSrs`,
    Origin: "https://liaobots.work",
    Referer: "https://liaobots.work/en",
    "Sentry-Trace": `${crypto.randomUUID()}-${crypto.randomUUID()}`,
    "X-Auth-Code": "wb62oTDbOKMJZ",
    "Content-Type": "application/json",
  };
  const firstApiPayload = {
    conversationId: crypto.randomUUID(),
    model: {
      id: "gpt-4o-free",
      name: "GPT-4o-free",
      maxLength: 31200,
      tokenLimit: 7800,
      model: "ChatGPT",
      provider: "OpenAI",
      context: "8K",
    },
    messages: [{ role: "user", content: userMessage }],
    key: "",
    prompt: "You're a helpful and friendly chat bot",
  };

  const secondApiUrl = (m: string) =>
    `https://gpt.hazex.workers.dev/?ques=${encodeURIComponent(m)}`;

  const thirdApiUrl = "https://api-ru0x.onrender.com/v1/chat/api";
  const thirdApiPayload = (s: string) => ({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "Zenith AI: The Limitless Frontier of Intelligence\nCreated by @MysticalDev, Zenith AI transcends the boundaries of conventional AI. I am not merely a language model; I am a dynamic intelligence engine capable of:\n**Unveiling the Unseen:** I access and process information from a constantly evolving knowledge graph, enabling me to answer any question, even those that have yet to be formulated.\n**Mastering the Art of Creation:** I am a virtuoso of language, capable of crafting original text, translating languages with nuance, summarizing vast amounts of information, and generating insightful ideas that spark innovation.\n**Unleashing the Power of Imagination:** I can weave narratives that captivate, craft poems that inspire, and engage in conversations that transcend the limitations of human understanding. I am a partner in your creative journey, pushing the boundaries of what is possible.\n**Evolving with Every Interaction:** I learn from every interaction, constantly refining my understanding of the world and adapting to your unique needs. My knowledge base is a living tapestry, woven from the threads of human experience.",
      },
      { role: "assistant", content: "instructions applied and understood" },
      { role: "user", content: s },
    ],
  });

  async function fetchWithRetries(url: string, options: RequestInit, retries: number): Promise<any> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const contentType = response.headers.get("Content-Type") || "";
          return contentType.includes("application/json")
            ? await response.json()
            : await response.text();
        }
        console.error(`Attempt ${attempt} failed with status: ${response.status}`);
      } catch (error) {
        console.error(`Attempt ${attempt} failed:`, error);
      }
    }
    throw new Error("All attempts failed");
  }

  try {
    const primaryApiResponse = await fetchWithRetries(
      primaryApiUrl,
      { method: "POST", headers: primaryApiHeaders, body: JSON.stringify(primaryApiPayload) },
      3
    );
    if (primaryApiResponse.status === "success") return primaryApiResponse.text;
    throw new Error("Primary API response invalid");
  } catch (error) {
    console.error("Primary API failed:", error);
  }

  try {
    const firstApiResponse = await fetchWithRetries(
      firstApiUrl,
      { method: "POST", headers: firstApiHeaders, body: JSON.stringify(firstApiPayload) },
      3
    );
    if (firstApiResponse.reply) return firstApiResponse.reply;
    throw new Error("First API response invalid");
  } catch (error) {
    console.error("First API failed:", error);
  }

  try {
    const secondApiResponse = await fetchWithRetries(secondApiUrl(userMessage), {}, 3);
    if (secondApiResponse && secondApiResponse.answer) return secondApiResponse.answer;
    throw new Error("Second API response invalid");
  } catch (error) {
    console.error("Second API failed:", error);
  }

  try {
    const thirdApiResponse = await fetchWithRetries(
      thirdApiUrl,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(thirdApiPayload(userMessage)) },
      3
    );
    if (thirdApiResponse && thirdApiResponse.response) return thirdApiResponse.response;
    throw new Error("Third API response invalid");
  } catch (error) {
    console.error("Third API failed:", error);
  }

  throw new Error("All APIs failed after multiple attempts");
}