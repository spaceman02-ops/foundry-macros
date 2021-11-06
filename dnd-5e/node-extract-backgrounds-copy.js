const fs = require("fs");
const path = require("path");

let rawdata = fs.readFileSync(
  path.resolve("", "backgrounds-sublist-data.json")
);
let backgrounds = JSON.parse(rawdata);

let textOut = backgrounds
  .map((i) => i.entries)
  .flat()
  .filter((i) => i.name == "Suggested Characteristics")
  .map((i) => i.entries)
  .map((i) => i.filter((i) => typeof i == "object"))
  .flat()
  .map((i) => i.rows)
  .flat()
  .map((i) => i[1])
  .join("#");
fs.writeFile("fortable.txt", textOut, function (err) {
  if (err) return console.log(err);
  console.log("done");
});
