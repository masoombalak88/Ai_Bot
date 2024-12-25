import { HugGif, KissGif, Avatars, SmugGif, PatGif } from "../../Chiku/utils";

const NekosCommandsList = [
  {
    command: "/shinobu",
    endpoint: "shinobu",
    isAnimation: false,
    caption: "🦋 *Here's your lovely Shinobu!* 🌸\n\n✨ *Enjoy this moment of grace and beauty!* 💖",
    fetchingMessage: "🦋 *Summoning the graceful Shinobu... Hold on!* 🌟",
  },
  {
    command: "/neko",
    endpoint: "neko",
    isAnimation: false,
    caption: "🦋 *Here's your Cute Neko Girl* 🌸\n\n✨ *Enjoy this moment of grace and beauty!* 💖",
    fetchingMessage: "🦋 *Summoning the Cutest Neko.... Hold on!* 🌟",
  },
  {
    command: "/megumin",
    endpoint: "megumin",
    isAnimation: false,
    caption: "💥 *Explosion! Here’s Megumin for you!* 🌟\n\n🔥 *Unleash your magical side!* ✨",
    fetchingMessage: "💥 *Bringing the explosive Megumin for you...* ✨",
  },
  {
    command: "/bully",
    endpoint: "bully",
    isAnimation: true,
    caption: "😈 *Oh no, someone’s getting bullied!* 💢\n\n✨ *Time to fight back, or enjoy the show!* 😅",
    fetchingMessage: "😈 *Looking for a bullying moment...* 💢",
  },
  {
    command: "/cuddle",
    endpoint: "cuddle",
    isAnimation: true,
    caption: "🤗 *Here’s a warm cuddle just for you!* 🐾\n\n💖 *Feel the warmth and love!* ✨",
    fetchingMessage: "🤗 *Fetching a lovely cuddle moment...* 🌸",
  },
  {
    command: "/cry",
    endpoint: "cry",
    isAnimation: true,
    caption: "😢 *It’s okay to cry sometimes.* 🌧️\n\n✨ *Let your emotions flow and heal.* 💫",
    fetchingMessage: "😢 *Finding a comforting cry GIF...* 🌧️",
  },
  {
    command: "/awoo",
    endpoint: "awoo",
    isAnimation: false,
    caption: "🐺 *Awoo! Here’s your adorable wolf girl!* 🌕\n\n✨ *Unleash your wild side!* 💫",
    fetchingMessage: "🐺 *Summoning a magical wolf girl...* 🌕",
  },
  {
    command: "/lick",
    endpoint: "lick",
    isAnimation: true,
    caption: "👅 *Here’s a playful lick for you!* 😋\n\n✨ *Stay silly and fun!* 🌟",
    fetchingMessage: "👅 *Searching for the perfect lick GIF...* ✨",
  },
  {
    command: "/bonk",
    endpoint: "bonk",
    isAnimation: true,
    caption: "🔨 *Bonk! No more silly thoughts!* 😅\n\n✨ *Stay pure and focused!* 🌸",
    fetchingMessage: "🔨 *Preparing a bonk just for you...* 💥",
  },
  {
    command: "/yeet",
    endpoint: "yeet",
    isAnimation: true,
    caption: "💨 *Yeet! Someone’s flying high!* 🌟",
    fetchingMessage: "💨 *Finding a fun yeet GIF...* ✨",
  },
  {
    command: "/blush",
    endpoint: "blush",
    isAnimation: true,
    caption: "😊 *Aww, you’re blushing!* 🌸",
    fetchingMessage: "😊 *Fetching a cute blush moment...* 🌸",
  },
  {
    command: "/smile",
    endpoint: "smile",
    isAnimation: true,
    caption: "😁 *Here’s a cheerful smile for you!* 🌟",
    fetchingMessage: "😁 *Looking for a bright smile...* ✨",
  },
  {
    command: "/wave",
    endpoint: "wave",
    isAnimation: true,
    caption: "👋 *Waving hello to brighten your day!* ✨",
    fetchingMessage: "👋 *Preparing a friendly wave...* 🌟",
  },
  {
    command: "/highfive",
    endpoint: "highfive",
    isAnimation: true,
    caption: "✋ *High five! Great job!* 💪",
    fetchingMessage: "✋ *Getting ready for a high five...* 🌟",
  },
  {
    command: "/handhold",
    endpoint: "handhold",
    isAnimation: true,
    caption: "🤝 *Here’s a caring hand to hold!* 🌸",
    fetchingMessage: "🤝 *Searching for a comforting handhold...* 🌟",
  },
  {
    command: "/nom",
    endpoint: "nom",
    isAnimation: true,
    caption: "🍴 *Nom nom! Delicious, isn’t it?* 😋",
    fetchingMessage: "🍴 *Fetching a yummy nom moment...* ✨",
  },
  {
    command: "/bite",
    endpoint: "bite",
    isAnimation: true,
    caption: "😬 *Ouch! Someone got bitten!* 🐾",
    fetchingMessage: "😬 *Looking for a playful bite...* 🐾",
  },
  {
    command: "/glomp",
    endpoint: "glomp",
    isAnimation: true,
    caption: "🤗 *Glomp attack incoming!* 🌟",
    fetchingMessage: "🤗 *Finding a joyful glomp...* 🌟",
  },
  {
    command: "/happy",
    endpoint: "happy",
    isAnimation: true,
    caption: "😊 *Spreading happiness everywhere!* ✨",
    fetchingMessage: "😊 *Fetching a joyful happy GIF...* 🌸",
  },
  {
    command: "/wink",
    endpoint: "wink",
    isAnimation: true,
    caption: "😉 *Here’s a playful wink for you!* 💖",
    fetchingMessage: "😉 *Searching for a flirty wink...* ✨",
  },
  {
    command: "/poke",
    endpoint: "poke",
    isAnimation: true,
    caption: "👉 *Poke, poke! Did you feel that?* 🌟",
    fetchingMessage: "👉 *Preparing a playful poke...* 🌟",
  },
  {
    command: "/dance",
    endpoint: "dance",
    isAnimation: true,
    caption: "💃 *Let’s dance to the rhythm of life!* 🎶",
    fetchingMessage: "💃 *Finding the perfect dance for you...* 🌟",
  },
  {
    command: "/cringe",
    endpoint: "cringe",
    isAnimation: true,
    caption: "😖 *Oh no, it’s a cringe moment!* 🌸",
    fetchingMessage: "😖 *Fetching a funny cringe moment...* 🌟",
  },
];








const NekosCommandsListV2 = [
  {
    command: "/gecg",
    endpoint: "https://nekos.life/api/v2/img/gecg",
    isAnimation: false,
    caption: "🔮 *Behold the mysterious image I’ve conjured for you!* 🌌\n\n✨ *Feeling curious? Type /gecg again!* 💫",
    fetchingMessage: "🔮 *Summoning something mysterious... Hold on!* 🌟",
  },
  {
    command: "/meow",
    endpoint: "https://nekos.life/api/v2/img/meow",
    isAnimation: false,
    caption: "😺 *Here’s an adorable meow for you!* 🐱\n\n✨ *Aren’t cats just magical?* 🌟",
    fetchingMessage: "😺 *Fetching a cute kitty for you...* 🐾",
  },
  {
    command: "/wallpaper",
    endpoint: "https://nekos.life/api/v2/img/wallpaper",
    isAnimation: false,
    caption: "🎨 *Here’s your beautiful wallpaper!* 🖼️\n\n✨ *Enjoy the scenery!* 🌄",
    fetchingMessage: "🎨 *Preparing a magical wallpaper for you...* ✨",
  },
  {
    command: "/tickle",
    endpoint: "https://nekos.life/api/v2/img/tickle",
    isAnimation: true,
    caption: "😂 *Tickle, tickle!* 🤭\n\n✨ *Can you handle this much laughter?* 🌟",
    fetchingMessage: "😂 *Searching for a tickle animation...* 🪄",
  },
 /* {
    command: "/spank",
    endpoint: "https://nekos.life/api/v2/img/spank",
    isAnimation: false,
    caption: "👋 *Someone just got spanked!* 💥\n\n✨ *Watch out next time!* 😅",
    fetchingMessage: "👋 *Fetching a spank image for you...* 💢",
  },**/
  {
    command: "/waifu",
    endpoint: "https://api.waifu.pics/sfw/waifu",
    isAnimation: false,
    caption: "🌸 *Here’s your lovely waifu!* 💖\n\n✨ *Isn’t she enchanting?* 🌟",
    fetchingMessage: "🌸 *Summoning a beautiful waifu for you...* 💖",
  },
  {
    command: "/hug",
    endpoint: HugGif,
    isAnimation: true,
    caption: "🤗 *Here's a warm and loving hug just for you!* 💖\n\n*Spread the love and happiness!* ✨",
    fetchingMessage: "🤗 *Hold on! Finding the perfect hug GIF for you...* 💖",
  },
  {
    command: "/kiss",
    endpoint: KissGif,
    isAnimation: true,
    caption: "💋 *Sending a sweet kiss your way!* 💕\n\n*Feel the love and warmth!* 🌹",
    fetchingMessage: "💋 *Searching for the sweetest kiss GIF...* 💕",
  },
  {
    command: "/smug",
    endpoint: SmugGif,
    isAnimation: true,
    caption: "😏 *Feeling smug, aren't we?* 😎\n\n*Here's your perfect smug GIF!* 🔥",
    fetchingMessage: "😏 *Hold on! Fetching a smug GIF for you...* 😎",
  },
  {
    command: "/avatar",
    endpoint: Avatars,
    isAnimation: false,
    caption: "🖼️ *Here's a cool avatar for you!* 🌟\n\n*Show it off proudly!* 🔥",
    fetchingMessage: "🖼️ *Finding the coolest avatar just for you...* 🌟",
  },
];




export { NekosCommandsListV2, NekosCommandsList }
