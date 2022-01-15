//bookmark

async function applyDamage({ actor, type, value } = {}) {
  if (!actor || !type || !value) return;
  let { di, dr, dv } = actor.data.data.traits;

  let multiplier = 1;
  if (arrInclude(di, type)) {
    multiplier = null;
  } else {
    if (arrInclude(dr, type)) {
      multiplier = 0.5;
    } else {
      if (arrInclude(dv, type)) {
        multiplier = 2;
      } else {
        multiplier = 1;
      }
    }
  }
  if (multiplier !== null) actor.applyDamage(value, multiplier);
  return Math.floor(value * multiplier)

  function arrInclude(obj, val) {
    return [...obj.value, ...obj.custom.split(`;`)].includes(val);
  }
}
async function getAllConditions() {
  let options = `<option value="none">none</option>`;
  for (let effect of SpaceEffects.effects) {
    options += `<option value="${effect.label}">${effect.label}</option>`;
  }
  return options;
}

async function listTargets() {
  let targets = canvas.tokens.controlled;
  return targets.map(
    (i) => `<div style="margin: 5px;">${i.data.name}<br><select name="adv" id="${i.data._id}">
  < option value = "" > Advantage ?</option >
  <option value="normal">Normal</option>
  <option value="advantage">Advantage</option>
  <option value="disadvantage">Disadvantage</option>
</select > </div>`
  ).join(`<br>`);
}
new Dialog({
  title: `Total Damage`,
  content: `
  <div style="display:flex;flex-direction:row;flex-wrap: wrap;align-items:center;justify-content:flex-start;margin: 5px;">
  ${await listTargets()}
  </div>
  <form>
    <div class="form-group">
        <label>Damage:</label>
        <input type="number" id="dmg" name="dmg" autofocus />

    </div>
    <div class="form-group">
        <label>Save DC:</label>
        <input type="number" id="dc" name="dc" />

    </div>

    <div class="form-group">
        <label for="type">Damage Type:</label>

        <select name="type" id="type">
            <option value="slashing">slashing</option>
            <option value="piercing">piercing</option>
            <option value="bludgeoning">bludgeoning</option>
            <option value="poison">poison</option>
            <option value="acid">acid</option>
            <option value="fire">fire</option>
            <option value="cold">cold</option>
            <option value="radiant">radiant</option>
            <option value="necrotic">necrotic</option>
            <option value="lightning">lightning</option>
            <option value="thunder">thunder</option>
            <option value="force">force</option>
            <option value="psychic">psychic</option>
        </select>
    </div>

    <div class="form-group">
        <label for="condition">Condition Inflicted:</label>

        <select name="condition" id="condition">
        ${await getAllConditions()}
        </select>
    </div>

    <div class="form-group">
        <label for="save">Choose a save:</label>

        <select name="save" id="save">
            <option value="str">Strength</option>
            <option value="dex">Dexterity</option>
            <option value="con">Constitution</option>
            <option value="int">Intelligence</option>
            <option value="wis">Wisdom</option>
            <option value="cha">Charisma</option>
        </select>
    </div>
    </form >
    `,
  buttons: {
    confirm: {
      icon: "<i class='fas fa-skull-crossbones'></i>",
      label: `Save`,
      default: true,
      callback: async (html) => {
        let grab = (string, h = html) => {
          return h.find(`#${string}`).val();
        };
        let typeofsave = grab("save");
        let savedc = html.find("#dc").val();
        let dmg = Number(html.find("#dmg").val());
        let type = html.find("#type").val();
        let condition = html.find("#condition").val();
        let finalMessage = `
        The results of this mass roll were: <br>
        <ul>
        `;
        let overallDamage = 0;
        for (let token of canvas.tokens.controlled) {
          let resultInfo = [`${token.data.name}`];
          let adv = html.find(`#${token.data._id}`).val();
          let r = await token.actor.rollAbilitySave(typeofsave, {
            fastForward: true,
          });
          let rolls = r
            .entriesFlattened()
            .filter((i) => i.hasOwnProperty("total"))
            .map((i) => i.total);
          let total = 0;
          console.log(adv)
          switch (adv) {
            case "normal":
              total = rolls[0];
              break;
            case "advantage":
              total = Math.max(...rolls);
              break;
            case "disadvantage":
              total = Math.min(...rolls);
              break;
            default:
              total = rolls[0];
              break;
          }
          let taken = 0
          if (total < savedc) {
            resultInfo.push("failed")
            taken = await applyDamage({
              actor: token.actor,
              type: type,
              value: dmg,
            });
            overallDamage += taken
            if (condition != "none")
              await SpaceEffects.applyEffect(
                condition,
                token.actor
              );
          } else {
            resultInfo.push("succeeded")
            taken = await applyDamage({
              actor: token.actor,
              type: type,
              value: dmg * 0.5,
            });
            overallDamage += taken
          }
          finalMessage += `<li>${resultInfo[0]} ${resultInfo[1]} with a ${total} on the save and took ${taken} damage.`
        }
        finalMessage += `<ul><br>
        TOTAL DAMAGE: ${overallDamage}`

        let message = finalMessage
        let chatData = {
          user: game.user.id,
          content: message,
        };
        ChatMessage.create(chatData, {});
      },
    },
  },
  render: (html) => html.find("#dmg").focus(),
}).render(true);
