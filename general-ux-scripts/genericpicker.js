pick_table();
async function pick_table() {
  let tables = game.tables;

  let choice = await choose(
    tables.map((p) => {
      return p.data.name;
    }),
    `Choose: `
  );

  async function rollit() {
    let table = game.tables.getName(choice);
    let draw = await table.draw();
    let drawresults = draw.results;
    let final = "";
    for (let el of drawresults) {
      final += `<p>${el.text} 
        `;
    }
    let chatData = {
      content: final,
    };
    ChatMessage.create(chatData, {});
  }
  rollit();
}

async function choose(options = [], prompt = ``) {
  let value = await new Promise((resolve, reject) => {
    let dialog_options =
      options[0] instanceof Array
        ? options
            .map((o) => `<option value="${o[0]}">${o[1]}</option>`)
            .join(``)
        : options.map((o) => `<option value="${o}">${o}</option>`).join(``);

    let content = `${prompt}<br><select id="choice">${dialog_options}</select>`;

    new Dialog({
      content,
      buttons: {
        OK: {
          label: `OK`,
          callback: async (html) => {
            resolve(html.find("#choice").val());
          },
        },
      },
    }).render(true);
  });
  return value;
}
