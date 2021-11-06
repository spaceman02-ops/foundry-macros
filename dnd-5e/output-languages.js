let languages =
  canvas.tokens.controlled[0].actor.data.data.traits.languages.value;
let output = "<table>";
languages.forEach((i) => (output += `<tr><td>${i}</td></tr>`));
output += `</table>`;

let chatData = {
  user: game.user._id,
  content: output,
};
ChatMessage.create(chatData, {});
