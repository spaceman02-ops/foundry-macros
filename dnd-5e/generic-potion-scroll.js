async function generics() {
  for (let token of canvas.tokens.controlled) {
    for (let item of token.actor.items) {
      /*if (item.data.type !== "spell" && item.data.type !== "class" && item.data.type !== "feat")  {
       */
      let type = item.data.data.consumableType;
      let potions = await FilePicker.browse(
        "data",
        "systems/dnd5e/icons/items/potions"
      );
      let scrolls = await FilePicker.browse("public", "icons/sundries/scrolls");
      let potionsArr = potions.files;
      let scrollsArr = scrolls.files;

      if (
        type == "potion" &&
        item.data.img === "modules/plutonium/media/icon/potion-ball.svg"
      ) {
        let randomPotionImg =
          potionsArr[Math.floor(Math.random() * potionsArr.length)];

        await item.update({ img: randomPotionImg });
      }

      if (
        type == "scroll" &&
        item.data.img === "modules/plutonium/media/icon/scroll-unfurled.svg"
      ) {
        let randomScrollImg =
          scrollsArr[Math.floor(Math.random() * scrollsArr.length)];
        await item.update({ img: randomScrollImg });
      }
    }
  }
}
generics();
