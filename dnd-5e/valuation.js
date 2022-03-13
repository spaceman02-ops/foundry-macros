const rarityKey = {
    common: 250,
    uncommon: 750,
    rare: 1500,
    veryRare: 3000,
    legendary: 7500,
    artifact: 15000,
};

let tokens = canvas.tokens.controlled;
for (let token of tokens) {
    for (let item of token.actor.data.items.contents) {
        if (item.data.data.rarity) {
            let rar = item.data.data.rarity;
            item.update({ "data.price": rarityKey[rar] });
        }
    }
}
