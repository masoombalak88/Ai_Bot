import { ChikuAi } from "../../Chiku";
import { OWNER_USERNAME as Z } from "../../config";
import { searchImages } from "../../Chiku/utils";

export async function fetchBingImages(message: any) {
  const chatId = message.chat.id;
  const args = message.text?.split(" ").slice(1);

  if (!args || args.length === 0) {
    await ChikuAi.send_message(chatId, "❌ Please provide a search query. Example: `/binging cats`");
    return;
  }

  const searchQuery = args.join(" ");
  const fetchingMessage = await ChikuAi.send_message(
    chatId,
    `✨ *Hold tight!* I'm searching for the best images of "${searchQuery}" just for you... 🔍`
  );

  try {
    const imageUrls: string[] = await searchImages(searchQuery);

    const srcList = imageUrls.slice(10); 
    const uniqueImages = [...new Set(srcList)];

    if (uniqueImages.length === 0) {
      await ChikuAi.edit_message_text(
        chatId,
        fetchingMessage.result?.message_id,
        "❌ No images found for the query. 😢"
      );
      return;
    }

    const randomCount = Math.floor(Math.random() * (45 - 35 + 1)) + 35;
    const imagesToSend = uniqueImages.slice(0, randomCount);

    const mediaGroup = imagesToSend.map((imageUrl) => ({
      type: "photo",
      media: imageUrl,
    }));

    const batchSize = 10;
    for (let i = 0; i < mediaGroup.length; i += batchSize) {
      const batch = mediaGroup.slice(i, i + batchSize);
      await ChikuAi.sendMediaGroup(chatId, batch);
    }

    await ChikuAi.send_message(
      chatId,
      `🎉 *All done!* I've successfully fetched ${imagesToSend.length} images for "${searchQuery}". 🌟\n\n💫 *Enjoy your visual treat!* 🖼️\n\n💖 *Made with love by @${Z}*`
    );

    if (fetchingMessage.result?.message_id) {
      await ChikuAi.delete_message(chatId, fetchingMessage.result?.message_id);
    }
  } catch (error) {
    console.error("Error fetching Images from Bing:", error);
    await ChikuAi.send_error(chatId);
  }
}

