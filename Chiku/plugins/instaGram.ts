import { ChikuAi } from "../../Chiku";
import { OWNER_USERNAME } from "../../config";

async function DownloadInstaVdo(message: any): Promise<void> {
  const chatId = message.chat.id;
  const text = message.text || "";
  const url = text.slice(4).trim();

  if (!url) {
    await ChikuAi.send_message(chatId, "❌ *Please provide a valid Instagram URL after* `/ig`");
    return;
  }

  const IGapiUrl = `https://social-dl.hazex.workers.dev/?url=${encodeURIComponent(url)}`;
  const fetchingMessage = await ChikuAi.send_message(chatId, "⏳ *Fetching your Instagram video... Please wait!* 🌟");
  const fetchingMessageId = fetchingMessage.result?.message_id;

  try {
    const response = await fetch(IGapiUrl, { method: "GET", headers: { Accept: "application/json" } });

    if (!response.ok) throw new Error("Failed to fetch video data. Please try again later.");
    const data = await response.json();

    if (data["error"]) throw new Error("⚠️ Could not process the URL. Ensure it's a valid Instagram URL.");
    const title = data["title"] || "Unknown Title";
    const videos = data["videos"] || [];

    if (videos.length === 0) throw new Error("🚫 No videos found in the provided URL.");

    for (const video of videos) {
      const videoUrl = video["url"];
      const size = video["size"] || "Unknown";
      const quality = video["quality"] || "Unknown";

      if (videoUrl) {
        try {
          await ChikuAi.VideoAction(chatId);
          await ChikuAi.send_video(
            chatId,
            videoUrl,
            `<b>🦋Successfully Fetched Your Instagram Video!</b> 🦈\n\n<b>🍹Title</b>: ${title}\n<b>🌐Quality</b>: ${quality}\n<b>🏝️Size</b>: ${size}\n\n<i>Made With 🔮 By: @${OWNER_USERNAME} 🪄</i>`,
            { parse_mode: "HTML" }
          );
        } catch {
          throw new Error("⚠️ Failed to send the video. Please try again later.");
        }
      }
    }
  } catch (error: any) {
    await ChikuAi.send_error(chatId);
  } finally {
    if (fetchingMessageId) {
      await ChikuAi.delete_message(chatId, fetchingMessageId);
    }
  }
}

export { DownloadInstaVdo };



