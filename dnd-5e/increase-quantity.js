async function generics() {
  for (let token of canvas.tokens.controlled) {
    for (let item of token.actor.items) {
      await item.update({ "data.quantity": 50 });
    }
  }
}
generics();
