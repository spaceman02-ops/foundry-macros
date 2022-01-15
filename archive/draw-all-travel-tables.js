// let tableselected = html.find("#table").val();
// let table = game.tables.getName(tableselected);
// let results = await table.roll().results;
// let output = `${table.data.description}<br><table><tr><td><b>${table.name}</td></tr></b>`;
// for (let result of results) {
//   output = output + `<tr><td>${result.text.trim()}</td></tr>`;
// }
// output += `</table>`;
// let chatData = {
//   user: game.user._id,
//   content: output,
// };
// ChatMessage.create(chatData, {});

//get all tables
let tableNames = ["The Trail", "Potions", "Creatures", "Hirelings", "Scrolls"];
let tables = tableNames.map((i) => game.tables.getName(i));

//draw all results
const getResults = async () => {
  return Promise.all(tables.map((i) => i.roll().results));
};
let results = await getResults();
let resultIds = results.map((i) => i[0].resultId);
let resultText = results.map((i) => i[0].text);

// get entries from compendium to pull properties
let compendia = ["*Potions", "Creatures", "*Hirelings", "Scrolls"];
let compendiaArray = Array.from(game.packs).filter((i) =>
  compendia.includes(i.metadata.label)
);
let infoObject = {};
for (let comp of compendiaArray) {
  for (let resultId of resultIds) {
    let entity = await comp.getEntity(resultId);
    if (entity) {
      infoObject[comp.metadata.label] = entity;
    }
  }
}
console.log(infoObject);

//sync up results with properties

// need rarity or CR

//assign a DC

// create the message
