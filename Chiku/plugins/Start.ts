import { MagicalStartMessage, helpMessages } from "../../strings/Magical-Spells";
import { LOG_GC_ID, SUPPORT_GC, OWNER_USERNAME } from "../../config";
import { Neko } from "../../Chiku";
import { ChikuAi, TgApi } from "../../Chiku";
import { BOT_USERNAME as B } from "../../config";

async function sendStartMessage(message: any): Promise<void> {
  const chatId = message.chat.id;
  try {
    const userId = message.from?.id || "7792739542";
    const firstName = message.from?.first_name || "Magical User";
    const caption = await MagicalStartMessage(userId, firstName);
    const nekoImageUrl = Neko();
    const GROUP = `https://t.me/${SUPPORT_GC}`;
    const OWNER_LINK = `https://t.me/${OWNER_USERNAME}`;

    const response = await fetch(TgApi("sendPhoto"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        photo: nekoImageUrl,
        caption: caption,
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
  [
    { text: "🔔 Click Me", callback_data: "show_alert" },
  ],
  [
    { text: "💬 Support", url: GROUP },
    { text: "👑 Owner", url: OWNER_LINK },
  ],
  [
    { text: "🆘 Help", callback_data: "help" },
  ],
]
        },
      }),
    });

    

  } catch (error) {
    console.error(`Error sending start message: ${(error as Error).message}`);
    await ChikuAi.send_message(chatId, `Hello! How can I assist you today?`);
    await ChikuAi.send_message(
      LOG_GC_ID,
      `🚨 Error occurred while sending start message:\n\n${(error as Error).message}`
    );
  }
}









async function NotifyLogGroup(message: any): Promise<void> {
  const firstName = escapeMarkdownOld(message.from?.first_name || "Unknown");
  const lastName = escapeMarkdownOld(message.from?.last_name || "Unknown");
  const userId = message.from?.id || "Unknown";
  const username = message.from?.username
    ? `@${escapeMarkdownOld(message.from.username)}`
    : "No username";

  const userMention = `[${firstName}](tg://user?id=${userId})`;

  const mess = `🎉 *A new user started the bot*! 🎉  
  
👤 *First Name*: ${firstName}  
👤 *Last Name*: ${lastName}  
🆔 *User ID*: ${userId}  
🔗 *Username*: ${username}  
🦋 *Mention*: ${userMention}

✨ *Fetched By: @ChikuAiBot*`;

  try {
    const response = await ChikuAi.send_messageV2(LOG_GC_ID, mess, {
      parse_mode: "Markdown",
    });
  //  console.log("Admin notification response:", response);
  } catch (error) {
    console.error("Error notifying admin:", error);
  }
}

function escapeMarkdownOld(text: string): string {
  return text.replace(/([_*[\]()])/g, "\\$1");
}






export { sendStartMessage, NotifyLogGroup };




