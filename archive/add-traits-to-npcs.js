async function getATrait() {
  let table = game.tables.getName("Background Characteristics");
  let theRoll = await table.roll();
  let results = Array.from(theRoll.results);
  let output = "";
  for (let result of results) {
    output += result.data.text.trim();
  }
  return output;
}

async function makeTraits() {
  let tokens = canvas.tokens.controlled;
  for (let token of tokens) {
    await token.actor.createEmbeddedDocuments("Item", [
      {
        name: "Character Trait",
        data: {
          description: {
            value: getATrait(),
          },
        },
        type: "feat",
        img: "icons/sundries/gaming/dice-runed-brown.webp",
      },
    ]);
  }
}
makeTraits();
