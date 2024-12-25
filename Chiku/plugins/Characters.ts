import { ChikuAi } from "../../Chiku";
import { OWNER_USERNAME as X, BOT_USERNAME as Y } from "../../config";


async function GetCharacterImages(message: any): Promise<void> {
  const chatId = message.chat.id;
  const text = message.text || "";
  const characterName = text.slice(11).trim();

  if (!characterName) {
    await ChikuAi.send_message(chatId, "❌ Please Provide A Character Name. 📝 *Usage*: `/Character <Name>`");
    return;
  }

  const url = `https://www.zerochan.net/${encodeURIComponent(characterName)}`;

  const fetchingMessage = await ChikuAi.send_message(
    chatId,
    `🔍 *Summoning Your Character Images...* ✨\n\n💫 *Character*: ${characterName}\n🌟 *Hold Tight, The Magic Is Brewing!*`,
  );

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    
    const html = await response.text();
    const imgTags = Array.from(html.matchAll(/<img [^>]*src="([^"]+)"[^>]*>/g));
    let srcList = imgTags.map((match) => match[1]);

    srcList = srcList.slice(10);

    const uniqueImages = [...new Set(srcList)];

    if (uniqueImages.length === 0) {
      await ChikuAi.send_message(chatId, "❌ No Images Found For The Provided Character Name. 😢");
      return;
    }

    const imagesToSend = uniqueImages.length > 40 ? uniqueImages.slice(0, 40) : uniqueImages;

    const mediaGroup = imagesToSend.map((imageUrl) => ({
      type: "photo",
      media: imageUrl,
    }));

    const batchSize = 10;
    for (let i = 0; i < mediaGroup.length; i += batchSize) {
      const batch = mediaGroup.slice(i, i + batchSize);
      await ChikuAi.sendMediaGroup(chatId, batch);
    }

    if (fetchingMessage.result?.message_id) {
      await ChikuAi.delete_message(chatId, fetchingMessage.result?.message_id);
    }

    await ChikuAi.send_message(
      chatId,
      `🎉 *Your Character Images Have Been Fetched Successfully!* 🌟\n\n💫 *Character*: ${characterName}\n📸 *Total Images Sent*: ${imagesToSend.length}\n\n🔮 *Summoned By*: @${Y}\n✨ *Crafted With ❤️ By*: @${X}`,
    );
  } catch (error) {
    console.error("Error Fetching Character Images:", error);

    if (fetchingMessage.result?.message_id) {
      await ChikuAi.delete_message(chatId, fetchingMessage.result?.message_id);
    }
    await ChikuAi.send_error(chatId);

     }
}

export { GetCharacterImages };
