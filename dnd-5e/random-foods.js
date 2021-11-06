const updateItemsHealing = async () => {
  let items = Array.from(game.items).filter(
    (i) => i.data.folder == game.folders.getName("Food").id
  );
  const dice = [4, 6, 8, 10, 12];
  for (let item of items) {
    console.log(item);
    let die = dice[Math.floor(Math.random() * dice.length)];
    let numDie = await getRandomWholeNumber(3);
    let dmgBonus = await getRandomWholeNumber(5);
    let numUses = await getRandomWholeNumber(5);

    changeDamage({
      item,
      str: `${numDie}d${die}+${dmgBonus}`,
      type: "healing",
    });

    await item.update({
      "data.price": (numDie + die + dmgBonus) * numUses,
      "data.uses.max": numUses,
      "data.uses.value": numUses,
      "data.uses.per": "charges",
    });
  }
};

async function changeDamage({ item, str = ``, type = `` }) {
  let { parts } = duplicate(item.data.data.damage);
  console.log(parts);
  parts[0] = [str, type];

  return await item.update({ "data.damage.parts": parts });
}

updateItemsHealing();

async function getRandomWholeNumber(highestNumber) {
  return Math.floor(Math.random() * highestNumber) + 1;
}
