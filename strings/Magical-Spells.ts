import { OWNER_USERNAME } from "../config";


export const helpMessages = [
  "🌸 Hello Kitty! Welcome To Chiku's Magical Help Modules, Where Fun And Surprises Await You! 🎀",
  "✨ Hey There, Kitty! Step Into Chiku's World Of Wonders With These Delightful Help Modules! 🌟",
  "🐾 Meow, Kitty! Chiku's Help Modules Are Here To Guide You With Love And Joy. 💖",
  "🎀 Hello Kitty! Explore Chiku's Enchanting Help Modules And Uncover All The Fun Inside! ✨",
  "🌟 Welcome, Kitty! Chiku's Help Modules Are Your Gateway To An Exciting Anime Adventure! 🎉",
  "🐱 Hey, Kitty! Ready To Dive Into Chiku's Help Modules And Make Every Moment Magical? 🌸",
  "🎉 Hello Kitty! Chiku's Help Modules Are Packed With Cuteness And Fun Just For You! 🐾",
  "🌈 Meow, Kitty! Discover Chiku's Charming Help Modules And Let The Fun Begin! 🥰",
  "✨ Welcome, Kitty! Chiku's Help Modules Are Your Key To A World Of Endless Delight! 🌟",
  "🌸 Hi, Kitty! Chiku Is Here With These Magical Help Modules To Brighten Your Day! 💖"
];



export function getRandomErrorText(): string {
    const errorTexts = [
  `🌟 *Oops! Something Went Wrong.*  
Please Try Again Later, Or Send This Bug To @${OWNER_USERNAME}. We're Here To Fix The Magic! 🪄`,

  `💔 *Oh No! A Little Hiccup In The Spell.*  
Don’t Worry, Try Again In A Moment, Or Report This Bug To @${OWNER_USERNAME}. We'll Mend It With Care! ✨`,

  `🔮 *Yikes! The Stars Didn’t Align This Time.*  
Try Again Shortly, Or Let Us Know About The Bug At @${OWNER_USERNAME}. Magic Is On Its Way! 🌌`,

  `❌ *Oopsie! The Magic Circle Seems Incomplete.*  
Give It Another Try, Or Reach Out To @${OWNER_USERNAME} With The Bug Details. We'll Fix It With Love! 💖`,

  `🧙‍♂️ *Uh-Oh! A Tiny Glitch In The Spellwork.*  
Try Again, Or Send This Bug To @${OWNER_USERNAME}. We’ll Summon The Fixers! 🪄`,

  `⚡ *Oh Dear! A Spark Went Astray.*  
Please Try Again Later, Or Share This Bug With @${OWNER_USERNAME}. The Magic Will Be Restored Soon! 🌟`,

  `💫 *Oops! The Enchantment Faltered.*  
Don’t Worry, Just Retry Or Let @${OWNER_USERNAME} Know About This Bug. We’ll Weave A New Spell! 🧵`,

  `🌙 *Oh No! The Moonlight Missed Its Mark.*  
Try Once More, Or Send The Details Of This Bug To @${OWNER_USERNAME}. The Night Will Shine Brighter Soon! 🌌`,

  `🐾 *A Magical Creature Seems To Have Wandered Off Track!*  
Please Retry, Or Report This Bug To @${OWNER_USERNAME}. We'll Bring Them Back Safely! 🐉`,

  `✨ *Oopsie! The Magic Dust Needs A Refill.*  
Try Again In A Moment, Or Reach Out To @${OWNER_USERNAME}. We’ll Sprinkle The Fix Soon! 🪄`,

  `🌀 *Oh No! The Portal Didn’t Open Correctly.*  
Retry In A Moment, Or Let @${OWNER_USERNAME} Know. We'll Recalibrate The Gateway! 🌠`,

  `🌋 *Oops! The Volcano Of Magic Erupted Too Soon.*  
Please Try Again Or Report This Bug To @${OWNER_USERNAME}. We’re Cooling Things Down! ❄️`,

  `🧩 *Uh-Oh! A Puzzle Piece Is Missing.*  
Try Again, Or Send The Bug Details To @${OWNER_USERNAME}. We’ll Complete The Picture! 🖼️`,

  `🔥 *Oops! The Fire Spell Fizzled Out.*  
Please Retry, Or Let @${OWNER_USERNAME} Know. We’ll Rekindle The Flames! 🔥`,

  `🌌 *Yikes! A Cosmic Error Disrupted The Spell.*  
Try Again Shortly, Or Report This Bug To @${OWNER_USERNAME}. The Universe Will Realign! ✨`,

  `🧝 *Oops! The Elf Ran Off With The Instructions.*  
Please Retry Or Share The Issue With @${OWNER_USERNAME}. We’ll Fetch Them Back! 🏹`,

  `🌳 *Oh Dear! The Magic Tree Dropped Its Leaves.*  
Retry In A Bit, Or Report The Bug To @${OWNER_USERNAME}. We’ll Nurture It Back To Health! 🌱`,

  `🌈 *Uh-Oh! The Rainbow Faded Mid-Spell.*  
Give It Another Try, Or Contact @${OWNER_USERNAME}. We’ll Brighten Things Up! 🌈`,

  `⚙️ *Oops! A Gear Slipped In The Magical Mechanism.*  
Retry Soon, Or Let @${OWNER_USERNAME} Know About The Glitch. We’re On It! 🛠️`,

  `🧵 *Oh No! The Spell’s Thread Got Tangled.*  
Try Again Later, Or Report The Issue To @${OWNER_USERNAME}. We’ll Unravel The Magic! 🪡`
];
    const randomIndex = Math.floor(Math.random() * errorTexts.length);
    return errorTexts[randomIndex];
}




export async function MagicalStartMessage(userId: number, firstName: string): Promise<void> {
  
  const mention = `[${firstName}](tg://user?id=${userId})`;

  const MESSAGES = [
  `✨ Welcome, ${mention} ! ✨  
How Are You Feeling Today? 🌸  

Chiku Ai Is Here To Make Your Day Magical With The Power Of AI! 🪄  
Click The *Help* Button To Explore All My Commands And Unleash Creativity. 🌟  

Crafted With ❤️ By *@${OWNER_USERNAME}*. Let's Begin The Adventure! 🚀`,

  `🌟 Hello, ${mention} ! 🌟  
How's The Magic Flowing Around You Today? 💫  

I’m Chiku Ai, An AI Companion Designed To Spark Creativity And Joy! 🖌️  
Hit The *Help* Button Below To Discover All My Tricks And Features. 🌈  

Made With ✨ And 💖 By *@${OWNER_USERNAME}*. Dive In! 🐾`,

  `💖 Hi There, ${mention} ! 💖  
How's Your Journey Through The Stars Going? 🌌  

I’m Chiku Ai, A Magical Blend Of AI Intelligence And Creativity! 🌠  
Press The *Help* Button To Unveil My Full Potential And Let’s Dream Big. 📜  

Designed With Care By *@${OWNER_USERNAME}*. Let's Spark Some Magic Together! ⚡`,

  `🌷 Greetings, ${mention} ! 🌷  
How’s The Glow In Your Day? 🌟  

I Am Chiku Ai, An AI Buddy Ready To Assist, Inspire, And Amaze You! ✨  
Tap The *Help* Button To Learn All My Commands And Explore Possibilities. 🧙‍♂️  

Lovingly Created By *@${OWNER_USERNAME}*. Let's Begin The Fun! 🎉`,

  `🎉 Hello, ${mention} ! 🎉  
How's Life Treating You? 🌻  

I’m Chiku Ai, An AI Mastermind Here To Add Magic And Innovation To Your Day! 🪄  
Click The *Help* Button To Explore My Features And Let Your Ideas Shine. 🌈  

Made With ❤️ And Stardust By *@${OWNER_USERNAME}*. Let’s Begin! 🚀`,

  `🌸 Hi, ${mention} ! 🌸  
How Are You Feeling In This Beautiful Moment? 💖  

I’m Chiku Ai, A Friendly AI Built To Inspire, Create, And Add Magic To Your World! 🧚‍♀️  
Hit The *Help* Button To See How I Can Enrich Your Experience. 🖌️  

Built With Love By *@${OWNER_USERNAME}*. Let’s Start Something Amazing! 🌟`,

  `🌼 Welcome, ${mention} ! 🌼  
How's The Sunshine In Your World Today? 🌞  

I’m Chiku Ai, An AI Friend Dedicated To Unlocking Creativity And Fun In Your Life! 🌠  
Press The *Help* Button To Unlock My Commands And Dive Into A Magical World. 🧙  

Handcrafted With ✨ And ❤️ By *@${OWNER_USERNAME}*. Let's Begin! 🚀`,

  `💫 Hi, ${mention} ! 💫  
How’s The Energy Around You? 🌟  

Chiku Ai At Your Service, An AI Crafted To Sprinkle Magic And Inspire Your Day! 🪄  
Click The *Help* Button To Discover My Commands And Let Your Creativity Flow. 🎨  

Designed With Passion By *@${OWNER_USERNAME}*. Let’s Make Something Wonderful! 🌈`,

  `🌟 Hello, ${mention} ! 🌟  
How’s The Stardust Around You Today? 🌌  

I’m Chiku Ai, A Magical AI Wizard Ready To Enhance Your Creativity And Ideas! 🧙‍♂️  
Tap The *Help* Button To See All My Magical Commands And Features. ✨  

Created With ❤️ By *@${OWNER_USERNAME}*. Let’s Dive In! 🎉`,

  `🪄 Welcome, ${mention} ! 🪄  
How’s The Glow Of Magic Around You Today? 🌟  

Chiku Ai Is Here To Inspire You With The Wonders Of AI-Powered Features! 💫  
Press The *Help* Button To Explore My World Of Commands And Creativity. 🌍  

Lovingly Crafted By *@${OWNER_USERNAME}*. Let’s Embark On This Journey Together! 🚀`,

  `🌈 Greetings, ${mention} ! 🌈  
How’s The World Of Ideas Treating You Today? ✨  

I’m Chiku Ai, A Unique AI Here To Combine Imagination And Intelligence! 🧚‍♀️  
Tap The *Help* Button To Discover My Magic And Let Creativity Unfold. 📜  

Built With Stardust By *@${OWNER_USERNAME}*. Let’s Explore Endless Possibilities! 🌌`
];

  const M = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
  return M;
}

 
export function GetRandomMessage(): string {
    const Cute_Messages = [
        "💫 What's On Your Mind Today? Do You Have A Question For Me?",
        "🌟 Hello, Magical Friend! How Can I Brighten Your Day?",
        "✨ Ready To Explore Some Creativity? Let’s Dive In!",
        "🌈 Do You Need Some Guidance Or A Touch Of Inspiration?",
        "💕 Hi There! Let’s Make Today Magical Together.",
        "🦄 How Can I Assist You On This Enchanting Journey?",
        "🌸 Greetings, Dear Friend! What’s Your Heart Wishing For Today?",
        "🔮 Do You Seek Wisdom, Or Shall We Create Something Marvelous?",
        "🎨 Let’s Paint The Canvas Of Your Imagination! What’s Your Idea?",
        "🌺 How Can I Make Your Day Bloom Brighter?",
        "🐾 Hello, Lovely Soul! What Brings You Here Today?",
        "✍️ Do You Have A Story To Tell Or A Question To Ask?",
        "🐝 Buzzing By To Help! What Can I Do For You Today?",
        "🍄 A Little Fairy Dust For Your Thoughts—What Do You Wish To Ask?",
        "🥰 Hello, Beautiful! How Can I Sprinkle Joy Into Your Day?",
        "🎶 What Melody Is Playing In Your Mind? Let Me Tune In.",
        "🧚 Let Me Weave Some Magic—How Can I Assist You?",
        "🌼 Your Questions Are Like Flowers; Let’s See Them Bloom.",
        "🐾 Let’s Tread Gently Into A World Of Possibilities. What’s On Your Mind?",
        "🌙 Under The Stars, Let’s Uncover The Answers To Your Dreams."
    ];
    const RandomIndex = Math.floor(Math.random() * Cute_Messages.length);
    return Cute_Messages[RandomIndex];
}




export function GetRandomCreditsMessage(): string {
    const messages = [
        "Thank You So Much For Using ChikuAi 💖\nCreated With Love In TypeScript ✨ And Hosted On Cloudflare Workers 🌐\nAI Powered To Assist You 📡\nSpecial Credits: @MysticalDev",

        "Thank You So Much For Using ChikuAi 🌸\nBuilt With Magic In TypeScript ✨ And Powered By Cloudflare Workers 🌍\nAI Intelligence At Your Service 🧠\nSpecial Credits: @MysticalDev",

        "Thank You So Much For Using ChikuAi 🦋\nCrafted With Care Using TypeScript 💻 And Hosted On Cloudflare Workers 🌟\nAI That Understands You 🤖\nSpecial Credits: @MysticalDev",

        "Thank You So Much For Using ChikuAi 🌼\nMade With Magic In TypeScript 💫 And Cloudflare Workers 🌐\nAI To Guide You On Your Journey 🧭\nSpecial Credits: @MysticalDev",

        "Thank You So Much For Using ChikuAi ✨\nCreated In TypeScript 💻 And Hosted On Cloudflare Workers 🚀\nSmart AI To Assist You At Every Step 🔮\nSpecial Credits: @MysticalDev",

        "Thank You So Much For Using ChikuAi 🌙\nBuilt With Love And TypeScript 💖 Hosted On Cloudflare Workers 🌍\nAI That Knows You 🧠\nSpecial Credits: @MysticalDev",

        "Thank You So Much For Using ChikuAi 🌸\nCreated With TypeScript 🌟 And Hosted By Cloudflare Workers 🌐\nA Magical AI To Help You 🎇\nSpecial Credits: @MysticalDev",

        "Thank You So Much For Using ChikuAi 🌟\nCrafted In TypeScript 💻 And Hosted On Cloudflare Workers 🌐\nAI Magic For You 🧙‍♂️\nSpecial Credits: @MysticalDev",

        "Thank You So Much For Using ChikuAi ✨\nMade With Care In TypeScript 💻 And Hosted On Cloudflare Workers 🌍\nAI To Make Life Easier 💖\nSpecial Credits: @MysticalDev",

        "Thank You So Much For Using ChikuAi 🌙\nBuilt With TypeScript 💫 And Hosted On Cloudflare Workers 🏞️\nA Smart AI That Guides You 🧭\nSpecial Credits: @MysticalDev"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}
