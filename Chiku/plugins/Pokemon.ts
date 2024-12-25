import { POKEAPI_BASE_URL } from "../../config";
import { ChikuAi } from "../../Chiku";
import { capitalizeFirstLetter } from "../../Chiku/utils";


async function getPokemon(message: any) {
  const chatId = message.chat.id;
  const commandParts = message.text?.split(" ").slice(1);

  if (!commandParts || commandParts.length === 0) {
    await ChikuAi.send_message(chatId, "❌ Oops! Please tell me the name of a Pokémon to fetch its magic. ✨");
    return;
  }

  const pokemonName = commandParts[0].toLowerCase();
  const pokemonUrl = `${POKEAPI_BASE_URL}pokemon/${pokemonName}`;

  try {
    const response = await fetch(pokemonUrl);

    

    const data = await response.json();
    const name = capitalizeFirstLetter(data.name);
    const abilities = data.abilities
      .map((ability: { ability: { name: string } }) => ability.ability.name)
      .join(", ");
    const stats = data.stats.reduce(
      (acc: Record<string, number>, stat: { stat: { name: string }; base_stat: number }) => {
        acc[capitalizeFirstLetter(stat.stat.name)] = stat.base_stat;
        return acc;
      },
      {}
    );

    let responseMessage = `✨ **${name}** ✨\n\n🌟 **Abilities:** ${abilities}\n\n📊 **Stats:**\n`;
    for (const [stat, value] of Object.entries(stats)) {
      responseMessage += `   🔹 **${stat}:** ${value}\n`;
    }

    const pokeImgUrl = `https://img.pokemondb.net/artwork/${pokemonName}.jpg`;

    await ChikuAi.send_photo(chatId, pokeImgUrl, {
      caption: responseMessage,
      parse_mode: "Markdown",
    });
  } catch (error: any) {
    if (error.message.includes("404")) {
      await ChikuAi.send_message(chatId, "❌ Uh-oh! Couldn't find that Pokémon. 🕵️‍♂️ Try another name!");
    } else {
      await ChikuAi.send_message(chatId, "❌ Something went wrong while fetching your Pokémon. 😢");
    }
  }
}



    
export { getPokemon } 
