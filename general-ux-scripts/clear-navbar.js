async function clearNav() {
  let scenes = Array.from(game.scenes);
  await scenes.forEach((i) => i.update({ navigation: false }));
}
clearNav();
