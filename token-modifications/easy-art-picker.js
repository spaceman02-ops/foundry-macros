/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-undef */
async function easyArtPick(items) {
  for await (const item of items) {
    const chatData = {
      user: game.user._id,
      content: `${item.data.name}`,
    };
    ChatMessage.create(chatData, {});
    // eslint-disable-next-line no-unused-vars
    const value = await new Promise((resolve) => {
      new FilePicker({
        type: 'image',
        current: 'icons/',
        async callback(imagePath) {
          resolve(await item.update({ img: imagePath }));
        },
      }).browse('icons/');
    });
  }
}

async function getActors(folder) {
  const actors = [];
  for (const actor of game.actors.contents) {
    if (actor.data.folder === game.folders.get(folder).data._id) {
      actors.push(actor);
    }
  }
  for (const actor of actors) {
    // eslint-disable-next-line no-await-in-loop
    await easyArtPick(actor.data.items);
  }
}

getActors('Enemies');
