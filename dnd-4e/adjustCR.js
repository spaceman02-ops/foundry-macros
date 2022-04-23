//MM3 on a business card
const folderName = '';
const desiredCR = 0;
for (const actor of game.actors.filter((i) => game.folders.getName(folderName).data._id === i.data.folder)) {
  let level = actor.data.data.details.level;
  if (level !== desiredCR) {
    level = desiredCR;
    actor.update({ 'data.details.level': level });
  }
  const mobTypes = {
    brute: {
      hp: 26 + 10 * level,
      ac: 12 + 1 * level,
    },
    skirmisher: {
      hp: 24 + 8 * level,
      ac: 14 + 1 * level,
    },
    soldier: {
      hp: 24 + 8 * level,
      ac: 16 + 1 * level,
    },
    controller: {
      hp: 24 + 8 * level,
      ac: 14 + 1 * level,
    },
    artillery: {
      hp: 21 + 6 * level,
      ac: 12 + 1 * level,
    },
    lurker: {
      hp: 21 + 6 * level,
      ac: 14 + 1 * level,
    },
  }
  const bruteDamage = {
    damage: `${Math.floor(Math.ceil(level / 5) * 1.4)}d6 + ${level}`,
    crit: `${Math.floor(Math.ceil(level / 5) * 1.4)}*6 + ${level}`
  }
  const standardDamage = {
    damage: `${Math.ceil(level / 5)}d6 + ${level}`,
    crit: `${Math.ceil(level / 5)}*6 + ${level}`,
  }
  const encounterDamage = {
    damage: `${Math.floor(Math.ceil(level / 5) * 2)}d6 + ${level}`,
    crit: `${Math.floor(Math.ceil(level / 5) * 2)}*6 + ${level}`
  }

  let { damage, crit } = standardDamage
  if (actor.data.data.details.role.primary === 'brute') {
    damage = bruteDamage.damage;
    crit = bruteDamage.crit
  }
  let { hp, ac } = mobTypes[actor.data.data.details.role.primary] || mobTypes.controller
  switch (actor.data.data.details.role.secondary) {
    case 'elite':
      hp = hp * 2
      break
    case 'solo':
      hp = hp * 4
      break
    case 'minion':
      hp = 1
      damage, crit = Math.floor(4 + level / 2)
      break
  }
  const defs = 12 + level;
  const updates = {
    'data.attributes.hp.max': hp,
    'data.attributes.hp.min': hp,
    'data.attributes.hp.max': hp,
    'data.attributes.hp.starting': hp,
    'data.attributes.hp.value': hp,
    'data.defences.ac.base': ac,
    'data.defences.fort.base': defs,
    'data.defences.ref.base': defs,
    'data.defences.wil.base': defs,
  };
  await actor.update(updates);

  for (const item of actor.data.items) {
    if (item.data.data.useType === "encounter") {
      damage = encounterDamage.damage
      crit = encounterDamage.crit
    }
    const itemupdates = {
      'data.attack.formula': `${5 + level}`,
      'data.hit.base': `${5 + level}`,
      'data.hit.formula': damage,
      'data.hit.critFormula': crit
    };
    await item.update(itemupdates);
  }
}

