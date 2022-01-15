async function makeTraits() {
  let tokens = canvas.tokens.controlled;
  let arr = ["trait", "bond", "flaw", "ideal"];
  for (let token of tokens) {
    for (let a of arr) {
      await token.actor.createEmbeddedDocuments([{
        name: a.toString().charAt(0).toUpperCase() + a.toString().slice(1),
        data: {
          description: {
            value: token.actor.data.data.details[a],
          },
        },
        type: "feat",
        img: "icons/sundries/gaming/dice-runed-brown.webp"
      }]);
    }
  }
}
makeTraits();