import { ChikuAi, TgApi } from "../../Chiku";
import { TOKEN, IMGUR_CLIENT_ID } from "../../config";


async function UploadToImageUr(message: any): Promise<void> {
  const chatId = message.chat.id;

  try {
    const repliedMessage = message.reply_to_message;
    if (!repliedMessage || !repliedMessage.photo) {
      await ChikuAi.send_message(chatId, "🌟 *Oops!* Please reply to an image to let me work my magic! ✨");
      return;
    }
    const waitMessage = await ChikuAi.send_message(chatId, `Plese Wait Uploading Your Image Into ImgUr`);
    const waitMessageId = waitMessage.result?.message_id;
    
    const fileId = repliedMessage.photo[repliedMessage.photo.length - 1].file_id;
    const fileInfo = await ChikuAi.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${TOKEN}/${fileInfo.file_path}`;

    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const imageBlob = await response.blob();
    const base64Image = await blobToBase64(imageBlob);
    const imgurLink = await uploadToImgur(base64Image);

    await ChikuAi.send_message(chatId, `🎉 *Success!* Your image is now online! 🌐 Check it out here: ${imgurLink}`);
    await ChikuAi.delete_message(chatId, waitMessageId);
  } catch (error) {
    console.error("Error handling /upload command:", error);
    await ChikuAi.delete_message(chatId, waitMessageId);
    await ChikuAi.send_error(chatId);
  }
}

async function uploadToImgur(base64Image: string): Promise<string> {
  try {
    const payload = JSON.stringify({ image: base64Image });

    const response = await fetch('https://api.imgur.com/3/image.json', {
      method: 'POST',
      headers: {
        'Authorization': `Client-ID ${IMGUR_CLIENT_ID}`,
        'Content-Type': 'application/json',
      },
      body: payload,
    });

    

    const responseData = (await response.json()) as { data: { link: string } };
    const imgurLink = responseData.data.link;

    if (!imgurLink) {
      throw new Error('Invalid response from Imgur');
    }

    return imgurLink;
  } catch (error) {
    console.error('Error uploading to Imgur:', error);
    throw error;
  }
}

async function blobToBase64(blob: Blob): Promise<string> {
  const arrayBuffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}



export { UploadToImageUr };



