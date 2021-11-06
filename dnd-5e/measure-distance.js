let targettoken = Array.from(game.user.targets)[0];
let maintoken = canvas.tokens.controlled[0];

function tokenDistance(token1, token2) {
  if (!token1 || !token2) return;

  let distance = canvas.grid.measureDistance(token1, token2);
  if (token1.elevation !== token2.data.elevation) {
    let h_diff =
      token2.data.elevation > token1.data.elevation
        ? token2.data.elevation - token1.data.elevation
        : token1.data.elevation - token2.data.elevation;

    return Math.floor(Math.sqrt(Math.pow(h_diff, 2) + Math.pow(distance, 2)));
  } else {
    return Math.floor(distance);
  }
}
let chatData = {
  user: game.user._id,
  content: `${tokenDistance(
    maintoken,
    targettoken
  )} feet between the two tokens.`,
};
ChatMessage.create(chatData, {});
