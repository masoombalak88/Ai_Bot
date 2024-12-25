import { ChikuAi } from "../../Chiku";


export async function getLamaResponse(message: any): Promise<void> {
  const chatId = message.chat.id;
  const text = message.text;


  const commandRegex = /^\/lama\s+(.+)/;
  const match = text.match(commandRegex);
  if (!match) {
    await ChikuAi.send_message(chatId, "Please provide text after the command. Usage: /lama <text>");
    return;
  }

  const prompt = match[1];

  try {
    
    const apiUrl = `https://darkness.ashlynn.workers.dev/chat/?prompt=${encodeURIComponent(prompt)}&model=meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo`;

    const response = await fetch(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    const reply = responseData.response || "No response from the API.";


    await ChikuAi.send_message(chatId, reply);
  } catch (error) {
    console.error(`Error handling /lama command: ${error.message}`);
    await ChikuAi.send_error(chatId);
    
  }
}



export async function getClaudResponse(message: any): Promise<void> {
  const chatId = message.chat.id;
  const text = message.text;


  const commandRegex = /^\/claud\s+(.+)/;
  const match = text.match(commandRegex);
  if (!match) {
    await ChikuAi.send_message(chatId, "Please provide text after the command. Usage: /claud <text>");
    return;
  }

  const prompt = match[1];

  try {
    
    const apiUrl = `https://darkness.ashlynn.workers.dev/chat/?prompt=${encodeURIComponent(prompt)}&model=claude-3-haiku-20240307`;

    
    const response = await fetch(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }


    const responseData = await response.json();
    const reply = responseData.response || "No response from the API.";


    await ChikuAi.send_message(chatId, reply);
  } catch (error) {
    console.error(`Error handling /claud command: ${error.message}`);
    await ChikuAi.send_error(chatId);
  }
  
}


export async function getMixtralResponse(message: any): Promise<void> {
  const chatId = message.chat.id;
  const text = message.text;


  const commandRegex = /^\/mixtral\s+(.+)/;
  const match = text.match(commandRegex);
  if (!match) {
    await ChikuAi.send_message(chatId, "Please provide text after the command. Usage: /mixtral <text>");
    return;
  }

  const prompt = match[1]; 

  try {
  
    const apiUrl = `https://darkness.ashlynn.workers.dev/chat/?prompt=${encodeURIComponent(prompt)}&model=mistralai/Mixtral-8x7B-Instruct-v0.1`;


    const response = await fetch(apiUrl, {
      method: "GET",
    });

    
    const responseData = await response.json();
    const reply = responseData.response || "No response from the API.";


    await ChikuAi.send_message(chatId, reply);
  } catch (error) {
    console.error(`Error handling /mixtral command: ${error.message}`);
    await ChikuAi.send_error(chatId);
  }
}

