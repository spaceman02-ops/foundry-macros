pick_compendium();

async function pick_compendium() {
  let packs = game.packs.filter((p) => game.user.isGM || !p.private);
  let pack_choice = await choose(
    packs.map((p) => {
      return [p.collection, p.title];
    }),
    `Chose a compendium to create a table from : `
  );
  let data = await create_Data(packs.find((p) => p.collection === pack_choice));
  RollTable.create(data);
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

async function create_Data(pack) {
  console.log(pack);
  let data = {
    name: `${pack.title} Table`,
    formula: "",
    replacement: true,
    displayRoll: false,
    results: [],
  };
  let contents = await pack.getContent(),
    range = 0,
    type = 0,
    weight = 1;
  for (let content of contents) {
    data.results.push({
      collection: pack.collection,
      drawn: false,
      img: content.img,
      range: [range, range],
      resultId: content.id,
      text: `@Compendium[${pack.collection}.${content.id}]{${content.name}}`,
      type,
      weight,
    });
    range++;
  }
  data.formula = `1d${contents.length}`;
  return data;
}
