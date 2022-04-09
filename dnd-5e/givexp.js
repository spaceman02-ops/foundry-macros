async function giveXP(xp) {
    let updates = [];
    const actors = canvas.tokens.controlled.map((i) => i.actor); // filters out the actors that have a player owner.
    for (let actor of actors) {
        // ensures the actor actually has a token on the field.
        updates.push({
            _id: actor.id,
            "data.details.xp.value": actor.data.data.details.xp.value + xp,
        }); // makes the update object.
        let chatData = {
            user: game.user._id,
            content: `Gave ${actor.name} ${xp} XP!`,
        };
        ChatMessage.create(chatData, {});
    }
    await Actor.updateDocuments(updates); // does the actual updating.
}
let content = `
<div style="padding: 5px" class="form-group dialog distance-prompt">
  <label>Total XP to award:</label> <input type="text" id="xp"
  name="xp" value="" / autofocus>
</div>
`;
new Dialog({
    title: `How much XP?`,
    content,
    buttons: {
        link: {
            icon: "<i class='fas fa-pencil-alt'></i>",
            label: `Give XP`,
            callback: (html) => {
                let totalXP = Number(html.find("#xp").val());
                let evenXP = Math.floor(
                    totalXP / canvas.tokens.controlled.length
                );
                giveXP(evenXP);
            },
        },
        no: {
            icon: "<i class='fas fa-times'></i>",
            label: `Cancel`,
        },
    },
}).render(true);
