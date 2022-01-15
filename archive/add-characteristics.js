let table = game.tables.getName('Background Characteristics');
let theRoll = await table.roll();
let results = Array.from(theRoll.results);
for (let result of results) {
  output = output + `<tr><td>${result.data.text.trim()}</td></tr>`;
}