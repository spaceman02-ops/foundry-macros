for (let actor of game.actors.contents) {
    for (let item of actor.data.items.contents) {
        if (item.data.data.save.dc) {
            await item.update({
                "flags.betterRolls5e.quickDesc.value": true
            })
        }
    }
}