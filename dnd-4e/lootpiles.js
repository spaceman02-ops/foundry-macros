async function createPiles() {
  const never = CONST.TOKEN_DISPLAY_MODES.NONE;
  game.cub.removeAllConditions();
  const treasureImage = `assets/pickard/game-props-dungeon/196716-coins_1_1x1.webp`;
  if (!canvas.tokens.controlled.length) return;
  ItemPiles.API.turnTokensIntoItemPiles(canvas.tokens.controlled);
  for (let t of canvas.tokens.controlled) {
    await t.document.update({
      img: treasureImage,
      displayName: never,
      displayBars: never,
    });
    await t.actor.update({
      "data.currency.gp": Math.floor(Math.random() * 200),
    });
    for (let i of t.actor.items) {
      if (["power", "feat"].includes(i.type)) {
        await i.delete();
      }
    }
  }
}
createPiles();
