async function addXP(addedxp) {
  for (let t of canvas.tokens.controlled) {
    const totalxp = Number(t.actor.data.data.details.xp) + addedxp;
    await t.actor.update({ "data.details.exp": totalxp });
  }
}
let content = `
<div style="padding: 5px" class="form-group dialog distance-prompt">
  <label>Input xp:</label> <input type="number" id="addxpinput"
  name="addxpinput" value="" / autofocus>
</div>
`;

new Dialog({
  title: `Renaming Dialog`,
  content,
  buttons: {
    inputxp: {
      icon: "<i class='fas fa-pencil-alt'></i>",
      label: `Input`,
      callback: (html) => {
        let newxp = Number(html.find("#addxpinput").val());
        addXP(newxp)
      },
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel`,
    },
  },
}).render(true);
