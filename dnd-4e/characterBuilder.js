const apiLink = `https://api.marchingwest.com`
const skillKey = {
  "acr": "acrobatics",
  "arc": "arcana",
  "ath": "athletics",
  "blu": "bluff",
  "dip": "diplomacy",
  "dun": "dungeoneering",
  "end": "endurance",
  "hea": "heal",
  "his": "history",
  "ins": "insight",
  "itm": "intimidation",
  "nat": "nature",
  "prc": "perception",
  "rel": "religion",
  "stl": "stealth",
  "stw": "streetwise",
  "thi": "thievery"
};

const swappedKeys = Object.fromEntries(Object.entries(skillKey).map(([k, v]) => [v, k]))
let data = `====== Created Using Wizards of the Coast D&D Character Builder ======
testCharacter, level 16
Bugbear, Avenger, Relentless Slayer
Build: Commanding Avenger
Avenger's Censure: Censure of Unity

FINAL ABILITY SCORES
Str 13, Con 11, Dex 14, Int 18, Wis 22, Cha 9.

STARTING ABILITY SCORES
Str 10, Con 10, Dex 11, Int 14, Wis 18, Cha 8.


AC: 30 Fort: 23 Reflex: 26 Will: 28
HP: 115 Surges: 7 Surge Value: 28

TRAINED SKILLS
Religion +17, Athletics +16, Perception +19, Stealth +17

UNTRAINED SKILLS
Acrobatics +10, Arcana +12, Bluff +9, Diplomacy +9, Dungeoneering +14, Endurance +8, Heal +14, History +12, Insight +14, Intimidate +9, Nature +14, Streetwise +7, Thievery +10

FEATS
Level 1: Ritual Caster
Level 2: Divine Rage
Level 4: Whip Training
Level 6: Foreign Memories
Level 8: Steady Feet
Level 10: Rose King's Run
Level 11: Combat Reflexes
Level 12: Surging Flame
Level 14: Strike and Shove
Level 16: Shifting Defense

POWERS
Avenger at-will 1: Radiant Vengeance
Avenger at-will 1: Avenging Shackles
Avenger encounter 1: Rictus Grin
Avenger daily 1: Argent Mantle
Avenger utility 2: Blessing of Vengeance
Avenger encounter 3: Fury's Advance
Avenger daily 5: Dawn Fire Sigil
Avenger utility 6: Prayer of Sacrifice
Avenger encounter 7: Celestia Endures
Avenger daily 9: Fated Doom
Avenger utility 10: Avenger's Readiness
Avenger encounter 13: Weaving Blades (replaces Rictus Grin)
Avenger daily 15: Bond of the Sacred Duel (replaces Argent Mantle)
Avenger utility 16: Battle Blessing

ITEMS
Supremely Vicious Greatsword +4, Magic Feyweave Armor +4, Amulet of Seduction +3, Cloth Armor (Basic Clothing), Adventurer's Kit, Greatsword, Holy Symbol
====== Copy to Clipboard and Press the Import Button on the Summary Tab ======
`
data = data.split('\n')

const statLine = data[data.findIndex(i => i.includes('FINAL')) + 1]
const defenseLine = data[data.findIndex(i => i.includes('AC:'))]
const skillLine = data[data.findIndex(i => i.includes('TRAINED')) + 1]
const healthLine = data[data.findIndex(i => i.includes('HP:'))]
function getFeats(data) {
  const feats = []
  const featStart = data.findIndex(i => i.includes('FEAT')) + 1

  for (let i = featStart; i < data.length; i++) {

    let line = data[i]

    if (line.length < 6) {
      break
    }
    feats.push(line)
    //clean up the feats
  }
  let cleanFeats = feats.map(i => i.replace(/^.+: /, ""))
  return cleanFeats
}
function getPowers(data) {
  const powers = []
  const powerStart = data.findIndex(i => i.includes('POWER')) + 1

  for (let i = powerStart; i < data.length; i++) {

    let line = data[i]

    if (line.length < 6) {
      break
    }
    powers.push(line)
    //clean up the powers 
  }
  let cleanPowers = powers.map(i => i.replace(/^.+: /, "").replace(/\(.+\)/, "").trim())
  return cleanPowers
}
const feats = getFeats(data)
const powers = getPowers(data)
const stats = statLine.match(/\d+/gi).map(i => Number(i))
const defenses = defenseLine.match(/\d+/gi).map(i => Number(i))
const trainedSkills = skillLine.split(', ').map(i => i.replace(/[^a-zA-Z]/gi, "")).map(i => swappedKeys[i.toLowerCase()])
const health = healthLine.match(/\d+/gi).map(i => Number(i))
const cLevel = Number(data[1].match(/\d+/)[0])
const [race, cClass,] = data[2].split(', ')
const name = data[1].split(', ')[0]
const [str, con, dex, int, wis, cha] = stats
const [strmod, conmod, dexmod, intmod, wismod, chamod] = stats.map(i => Math.floor((i - 10) / 2))
const [ac, fort, ref, wil] = defenses.map(i => i - Math.floor(cLevel / 2))
const [hp, surges, surgeValue] = health
//create our actor
let create = await Actor.create({ name, type: "Player Character" });
let createdActor = await game.actors.getName(name)
//update abilities
await createdActor.update({
  "data.abilities.str.value": str,
  "data.abilities.dex.value": dex,
  "data.abilities.con.value": con,
  "data.abilities.int.value": int,
  "data.abilities.wis.value": wis,
  "data.abilities.cha.value": cha,
  "data.defences.ac.value": ac,
  "data.defences.fort.value": fort - conmod,
  "data.defences.ref.value": ref - dexmod,
  "data.defences.wil.value": wil - wismod,
  "data.details.surgeValue": surgeValue,
  "data.details.surges.max": surges,
  "data.details.surges.value": surges,
  "data.attributes.hp.value": hp,
  "data.attributes.hp.max": hp,
  "data.details.level": cLevel,
  "data.details.class": cClass,
  "data.details.race": race,
})


trainedSkills.forEach(async (v) => {
  let update = {}
  update[`data.skills.${v}.value`] = 5

  await createdActor.update(update)
})
const powerIndex = await getIndexes('power')
const featIndex = await getIndexes('feat')
powers.forEach(async (v) => {
  let id = powerIndex.find(i => i === v)
  if (id) {
    await importFromAPI("power", id, createdActor)
  }
})

feats.forEach(async (v) => {
  let id = featIndex.find(i => i === v)
  if (id) {
    await importFromAPI("feat", id, createdActor)
  }
})
async function importFromAPI(itemType, id, actor) {
  const response = await window.fetch(
    `${apiLink}/content/${itemType}/${id}`,
    {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }
  );
  const feat = await response.json();
  const item = new Item(JSON.parse(feat.JSON));
  actor.createEmbeddedDocuments("Item", [item.toObject()]);
};
async function getIndexes(itemType) {
  const response = await window.fetch(
    `${apiLink}/content/${itemType}/indexes`,
    {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }
  );
  let indexes = await response.json();
  return indexes;
}
