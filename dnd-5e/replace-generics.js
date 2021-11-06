async function generics() {
  for await (let token of canvas.tokens.controlled) {
    for await (let item of token.actor.items) {
      if (item.data.type === "feat") {
        console.log(item.name)
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
  }
}
generics();
