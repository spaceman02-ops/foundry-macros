async function clearNav() {
  let scenes = Array.from(game.scenes);
  scenes.forEach(async (i) => {
    if (!i.data.active) {
      await i.update({ navigation: false });
    }
  })
}
clearNav();
