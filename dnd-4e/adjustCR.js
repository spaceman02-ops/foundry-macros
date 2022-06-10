//MM3 on a business card
const folderName = "";
const desiredCR = 0;
const workingFolder = game.folder.getName(folderName);
const actors = game.actors.filter(
  (i) => workingFolder.data._id === i.data.folder
);

for (const actor of actors) {
  let level = actor.data.data.details.level;
  if (level !== desiredCR) {
    level = desiredCR;
    actor.update({ "data.details.level": level });
  }

  const mobTypes = {
    brute: {
      hp: Math.floor(26 + 10 * level*.75),
      ac: Math.floor(12 + 1 * level*.75),
    },
    skirmisher: {
      hp: Math.floor(24 + 8 * level*.75),
      ac: Math.floor(14 + 1 * level*.75),
    },
    soldier: {
      hp: Math.floor(24 + 8 * level*.75),
      ac: Math.floor(16 + 1 * level*.75),
    },
    controller: {
      hp: Math.floor(24 + 8 * level*.75),
      ac: Math.floor(14 + 1 * level*.75),
    },
    artillery: {
      hp: Math.floor(21 + 6 * level*.75),
      ac: Math.floor(12 + 1 * level*.75),
    },
    lurker: {
      hp: Math.floor(21 + 6 * level*.75),
      ac: Math.floor(14 + 1 * level*.75),
    },
  };

  let { hp, ac } =
    mobTypes[actor.data.data.details.role.primary] || mobTypes.controller;

  const bruteDamage = {
    damage: `${Math.floor(Math.ceil(level / 5) * 1.4)}d10 + ${Math.ceil(level*1.5)}`,
    crit: `${Math.floor(Math.ceil(level / 5) * 1.4)}*10 + ${Math.ceil(level*1.5)}`,
  };
  const standardDamage = {
    damage: `${Math.ceil(level / 5)}d6 + ${Math.ceil(level*1.5)}`,
    crit: `${Math.ceil(level / 5)}*6 + ${Math.ceil(level*1.5)}`,
  };
  const encounterDamage = {
    damage: `${Math.floor(Math.ceil(level / 5) * 2)}d8 + ${Math.ceil(level*1.5)}`,
    crit: `${Math.floor(Math.ceil(level / 5) * 2)}*8 + ${Math.ceil(level*1.5)}`,
  };

  let { damage, crit } = standardDamage;

  switch (actor.data.data.details.role.secondary) {
    case "elite":
      hp = hp * 2;
      break;
    case "solo":
      hp = hp * 4;
      break;
    case "minion":
      hp = 1;
      damage, crit = Math.floor(4 + level / 2);
      break;
  }

  const defs = 10 + level;
  const updates = {
    "data.attributes.hp.max": hp,
    "data.attributes.hp.min": hp,
    "data.attributes.hp.max": hp,
    "data.attributes.hp.starting": hp,
    "data.attributes.hp.value": hp,
    "data.defences.ac.base": ac,
    "data.defences.fort.base": defs,
    "data.defences.ref.base": defs,
    "data.defences.wil.base": defs,
  };

  await actor.update(updates);


  if (actor.data.data.details.role.primary === "brute") {
    damage = bruteDamage.damage;
    crit = bruteDamage.crit;
  }
  for (const item of actor.data.items) {
    if (
      item.data.data.useType === "encounter" ||
      item.data.data.useType === "recharge"
    ) {
      damage = encounterDamage.damage;
      crit = encounterDamage.crit;
    }
    const itemupdates = {
      "data.attack.formula": `${5 + level}`,
      "data.hit.base": `${5 + level}`,
      "data.hit.formula": damage,
      "data.hit.critFormula": crit,
    };
    await item.update(itemupdates);
  }
}
