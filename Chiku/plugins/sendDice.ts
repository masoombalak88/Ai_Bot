import { TgApi } from "../../Chiku";

async function sendDice(chatId: number, emoji: string, replyToMessageId: number): Promise<any> {
  const response = await fetch(TgApi("sendDice"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      emoji: emoji,
      reply_to_message_id: replyToMessageId,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to send dice: ${response.statusText}`);
  }

  const data = await response.json();
  if (!data.ok) {
    throw new Error(`Telegram API error: ${data.description}`);
  }

  return data.result;
}

export { sendDice };
