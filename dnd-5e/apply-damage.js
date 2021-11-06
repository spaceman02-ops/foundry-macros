//bookmark

async function applyDamage({ actor, type, value } = {}) {
  if (!actor || !type || !value) return;
  let { di, dr, dv } = actor.data.data.traits;

  let multiplier = arrInclude(di, type)
    ? null
    : arrInclude(dr, type)
    ? 0.5
    : arrInclude(dv, type)
    ? 2
    : 1;

  return multiplier !== null ? actor.applyDamage(value, multiplier) : actor;

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

new Dialog({
  title: `Total Damage`,
  content: `
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
        <label for="type">Choose damage type:</label>

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
    </form>
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

        for (let token of canvas.tokens.controlled) {
          let { total } = await token.actor.rollAbilitySave(typeofsave, {
            fastForward: true,
          });

          if (total < savedc) {
            await applyDamage({ actor: token.actor, type: type, value: dmg });
            condition != "none"
              ? await SpaceEffects.applyEffect(condition, token.actor)
              : {};
          } else {
            await applyDamage({
              actor: token.actor,
              type: type,
              value: dmg * 0.5,
            });
          }
        }
      },
    },
  },
  render: (html) => html.find("#dmg").focus(),
}).render(true);
