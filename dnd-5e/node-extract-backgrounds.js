const fs = require("fs");
const path = require("path");

let rawdata = fs.readFileSync(
  path.resolve("", "backgrounds-sublist-data.json")
);
let backgrounds = JSON.parse(rawdata);

let bgEntries = backgrounds.map((i) => i.entries).flat();
let chars = bgEntries.filter((i) => i.name == "Suggested Characteristics");
let final = chars.map((i) => i.entries);
let finalreally = final
  .map((i) => i.filter((i) => typeof i == "object"))
  .flat();
let final2 = finalreally.map((i) => i.rows).flat();
let final3 = final2.map((i) => i[1]);
let textOut = final3.filter((i) => i.includes("Evil")).join("\n");
fs.writeFile("evil-features.txt", textOut, function (err) {
  if (err) return console.log(err);
  console.log("done");
});
