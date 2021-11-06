async function doubleUp() {
  let actor = canvas.tokens.controlled[0].actor;
  let choiceArr = actor.items
    .filter((i) => i.data.type !== "spell")
    .map((i) => i.data.name);
  let [item, number] = await choose(choiceArr, `Choose an item to duplicate:`);
  let itemData = duplicate(actor.items.getName(item));
  for (let i = 0; i < number; i++) {
    await actor.createOwnedItem(itemData);
  }
}

async function choose(options = [], prompt = ``) {
  let value = await new Promise((resolve, reject) => {
    let dialog_options =
      options[0] instanceof Array
        ? options
            .map((o) => `<option value="${o[0]}">${o[1]}</option>`)
            .join(``)
        : options.map((o) => `<option value="${o}">${o}</option>`).join(``);

    let content = `${prompt}<br><select id="choice">${dialog_options}</select><br>How many copies do you want to make?<br><input type='number' id='number'></input>`;

    new Dialog({
      content,
      buttons: {
        OK: {
          label: `OK`,
          callback: async (html) => {
            resolve([html.find("#choice").val(), html.find("#number").val()]);
          },
        },
      },
    }).render(true);
  });
  return value;
}

doubleUp();
