async function generics(folderName) {
  let folderid = game.folders.getName(folderName).id;
  let items = game.items.filter((i) => i.data.folder == folderid);
  for await (let item of items) {
    let chatData = {
      user: game.user._id,
      content: `${item.data.name}`,
    };
    ChatMessage.create(chatData, {});
    let value = await new Promise((resolve) => {
      new FilePicker({
        type: "image",
        current: "icons/",
        callback: async function (imagePath) {
          resolve(await item.update({ img: imagePath }));
        },
      }).browse("icons/");
    });
  }
}
generics("Custom Loot");
