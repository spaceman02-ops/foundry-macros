(() => {
  if (!token) return;
  let token_data = canvas.tokens.controlled[0].data;
  let actor_data = duplicate(token.actor.data);
  actor_data.name = token_data.name;
  actor_data.token.name = token.data.name;
  actor_data.token.img =
    canvas.tokens.controlled[0].actor.options.token.data.img;
  actor_data.img = canvas.tokens.controlled[0].actor.options.token.data.img;
  actor_data.token.actorLink = true;
  Actor.create(actor_data);
})();
