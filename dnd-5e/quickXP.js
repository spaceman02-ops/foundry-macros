if (!canvas.tokens.controlled.length) {
    ui.notifications.warn("There must be at least one token selected.");
}
else {
    let totalXP = canvas.tokens.controlled
        .filter(t => !(!!t.actor.isPC || !!t.actor.hasPlayerOwner))
        .map(t => {
            return t.actor.data.data.details.level || t.actor.data.data.details.xp.value
        })
        .reduce((acc, next) => acc + next);
    const numberOfXPCombatants = canvas.tokens.controlled
        .filter(t => (!!t.actor.isPC || !!t.actor.hasPlayerOwner))
        .length
    const mod = Math.floor((canvas.tokens.controlled.length - numberOfXPCombatants) / 5)
    console.log(mod)
    totalXP *= mod
    const html = `Total XP: ${totalXP}<br>Split XP: ${totalXP / numberOfXPCombatants}`;

    ChatMessage.create({ content: html });
}