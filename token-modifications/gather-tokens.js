function getMousePosition() {
  const mouse = canvas.app.renderer.plugins.interaction.mouse;
  return mouse.getLocalPosition(canvas.app.stage);
}

async function move(mousePosition) {
  let otherfolders = [];
  for (let child of game.folders.getName("Marchers").children) {
    otherfolders.push(child.data._id);
  }
  let tokens = canvas.tokens.ownedTokens.filter((i) => {
    if (i.actor.data.folder == game.folders.getName("Marchers").id) {
      return true;
    } else if (otherfolders.includes(i.actor.data.folder)) {
      return true;
    } else {
      return false;
    }
  });
  for (token of tokens) {
    await token.update({ x: mousePosition.x, y: mousePosition.y });
  }
}

move(getMousePosition());
