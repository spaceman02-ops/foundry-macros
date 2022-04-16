let folder = folder.getName('Jungle Island');
let scenes = game.scenes.filter((i) => i.data.folder === folder.id);
for (let scene of scenes) {
  await scene.update({ thumb: 'https://i.imgur.com/ngqOyDJ.jpg' });
}
