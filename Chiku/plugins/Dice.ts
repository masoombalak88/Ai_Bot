export const DICE_COMMANDS = [
  {
    command: "/dart",
    emoji: "🎯",
    caption: (score: number) =>
      `🎯 *You played Dart!* 🎮\n\n🌟 *Your score is*: ${score}\n\n💫 Aim for the bullseye next time! 🎯`,
    fetchingMessage: "🎯 *Aiming for the bullseye...* 🌟",
  },
  {
    command: "/dice",
    emoji: "🎲",
    caption: (score: number) =>
      `🎲 *You rolled the Dice!* 🎮\n\n🌟 *Your score is*: ${score}\n\n💫 Roll again and beat your score! 🎲`,
    fetchingMessage: "🎲 *Rolling the Dice...* 🌟",
  },
  {
    command: "/basketball",
    emoji: "🏀",
    caption: (score: number) =>
      `🏀 *You played Basketball!* 🎮\n\n🌟 *Your score is*: ${score}\n\n💫 Aim for the hoop and score higher! 🏀`,
    fetchingMessage: "🏀 *Preparing for a slam dunk...* 🌟",
  },
  {
    command: "/jackpot",
    emoji: "🎰",
    caption: (score: number) =>
      `🎰 *You played Jackpot!* 🎮\n\n🌟 *Your score is*: ${score}\n\n💫 Spin again for a big win! 🎰`,
    fetchingMessage: "🎰 *Spinning the Jackpot wheel...* 🌟",
  },
  {
    command: "/football",
    emoji: "⚽",
    caption: (score: number) =>
      `⚽ *You played Football!* 🎮\n\n🌟 *Your score is*: ${score}\n\n💫 Kick again to score higher! ⚽`,
    fetchingMessage: "⚽ *Getting ready to kick...* 🌟",
  },
];
