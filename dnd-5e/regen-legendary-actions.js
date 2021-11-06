async function regenLegendary() {
  let token = canvas.tokens.controlled[0];
  let actor = token.actor;
  let legacts = actor.data.data.resources.legact.max;
  await token.update({ bar2: { attribute: "resources.legact" } });
  await actor.update({ "data.resources.legact.value": legacts });
}
regenLegendary();
