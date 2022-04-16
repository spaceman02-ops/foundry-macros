let folderName = '';
let desiredCR = 0;
for (let actor of game.actors.filter((i) => game.folders.getName(folderName).data._id === i.data.folder)) {
  let level = actor.data.data.details.level;
  if (level !== desiredCR) {
    level = desiredCR;
    actor.update({ 'data.details.level': level });
  }
  let updates = {
    'data.attributes.hp.max': 24 + level * 8,
    'data.attributes.hp.min': 24 + level * 8,
    'data.attributes.hp.max': 24 + level * 8,
    'data.attributes.hp.starting': 24 + level * 8,
    'data.attributes.hp.value': 24 + level * 8,
    'data.defences.ac.base': 14 + level,
    'data.defences.fort.base': 12 + level,
    'data.defences.ref.base': 12 + level,
    'data.defences.wil.base': 12 + level,
  };
  await actor.update(updates);

  for (let item of actor.data.items) {
    let itemupdates = {
      'data.attributes.attack.base': 5 + level,
      'data.attributes.hit.base': 5 + level,
      'data.hit.formula': `${Math.ceil(level / 5)}d6 + ${level}`,
      'data.hit.critFormula': `${Math.ceil(level / 5)}*6 + ${level}`,
    };
    await item.update(itemupdates);
  }
}
