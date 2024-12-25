import { ChikuAi } from "../../Chiku";
import { OWNER_USERNAME as X } from "../../config";


async function SendUid(message: any): Promise<string> {
  const chatId = message.chat.id;

  if (!message.reply_to_message) {
    
    const userId = message.from?.id;
    const userName = message.from?.first_name || "User";
    return await ChikuAi.send_message(
      chatId,
      `👤 *Your Details*\n\n✨ *Name*: ${userName}\n🆔 *User ID*: \`${userId}\`\n\n🎉 *Made with ❤️ By*: @${X} 🔮`
    );
  }

  const repliedMessage = message.reply_to_message;

  if (repliedMessage.forward_from || repliedMessage.forward_from_chat) {
    const forwardedUserId = repliedMessage.forward_from?.id || repliedMessage.forward_from_chat?.id;
    const forwardedUserName = repliedMessage.forward_from?.first_name || repliedMessage.forward_from_chat?.title || "Unknown";

    const replyUserId = repliedMessage.from?.id;
    const replyUserName = repliedMessage.from?.first_name || "User";

    return await ChikuAi.send_message(
      chatId,
      `📨 *Replied to a Forwarded Message*\n\n💌 *Forwarded From*:\n✨ *Name*: ${forwardedUserName}\n🆔 *ID*: \`${forwardedUserId}\`\n\n💬 *Message Sender*:\n✨ *Name*: ${replyUserName}\n🆔 *ID*: \`${replyUserId}\`\n\n🎉 *Made with ❤️ By*: @${X} 🔮`
    );
  }

  if (repliedMessage.sticker) {
    const stickerId = repliedMessage.sticker.file_id;

    const replyUserId = repliedMessage.from?.id;
    const replyUserName = repliedMessage.from?.first_name || "User";

    return await ChikuAi.send_message(
      chatId,
      `🎨 *Sticker Details*\n\n✨ *Sticker ID*: \`${stickerId}\`\n\n💬 *Message Sender*:\n✨ *Name*: ${replyUserName}\n🆔 *ID*: \`${replyUserId}\`\n\n🎉 *Made with ❤️ By*: @${X} 🔮`
    );
  }


  const replyUserId = repliedMessage.from?.id;
  const replyUserName = repliedMessage.from?.first_name || "User";

  return await ChikuAi.send_message(
    chatId,
    `💬 *Replied to a Message*\n\n✨ *Sender Name*: ${replyUserName}\n🆔 *User ID*: \`${replyUserId}\`\n\n🎉 *Made with ❤️ By*: @${X} 🔮`
  );
}


export { SendUid }
