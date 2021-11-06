let content = `
<div class="form-group">
<form>
<div class="form-group"><label>All Attacks</label><input type="text" id="atks" name="atks" /></div>
<div class="form-group"><label>All Damage</label><input type="text" id="dmg" name="dmg" /></div>
<div class="form-group"><label>Ability Checks</label><input type="text" id="check" name="check" /></div>
<div class="form-group"><label>Skill Checks</label><input type="text" id="skill" name="skill" /></div>
<div class="form-group"><label>Melee Spell Attacks</label><input type="text" id="msakattack" name="msakattack" /></div>
<div class="form-group"><label>Melee Spell Damage</label><input type="text" id="msakdmg" name="msakdmg" /></div>
<div class="form-group"><label>Melee Weapon Attacks</label><input type="text" id="mwakattack" name="mwakattack" /></div>
<div class="form-group"><label>Melee Weapon Damage</label><input type="text" id="mwakdmg" name="mwakdmg" /></div>
<div class="form-group"><label>Ranged Spell Attacks</label><input type="text" id="rsakattack" name="rsakattack" /></div>
<div class="form-group"><label>Ranged Spell Damage</label><input type="text" id="rsakdmg" name="rsakdmg" /></div>
<div class="form-group"><label>Ranged Weapon Attacks</label><input type="text" id="rwakattack" name="rwakattack" /></div>
<div class="form-group"><label>Ranged Weapon Damage</label><input type="text" id="rwakdmg" name="rwakdmg" /></div>
<div class="form-group"><label>All Spell Attacks</label><input type="text" id="spellattacks" name="spellattacks" /></div>
<div class="form-group"><label>All Spell Damage</label><input type="text" id="spelldmg" name="spelldmg" /></div>
<div class="form-group"><label>Spell Save DC</label><input type="text" id="spelldc" name="spelldc" /></div>
<div class="form-group"><label>All Weapon Attacks</label><input type="text" id="wpnatks" name="wpnatks" /></div>
<div class="form-group"><label>All Weapon Damage</label><input type="text" id="wpndmg" name="wpndmg" /></div>
</form>
`;

new Dialog({
  title: `Total Damage`,
  content: content,
  buttons: {
    confirm: {
      icon: "<i class='fas fa-skull-crossbones'></i>",
      label: `Apply`,
      default: true,
      callback: async (html) => {
        let grab = (string, h = html) => {
          return h.find(`#${string}`).val();
        };

        let options = {
          atks: grab("atks"),
          dmg: grab("dmg"),
          check: grab("check"),
          skill: grab("skill"),
          msakattack: grab("msakattack"),
          msakdmg: grab("msakdmg"),
          mwakattack: grab("mwakattack"),
          mwakdmg: grab("mwakdmg"),
          rsakattack: grab("rsakattack"),
          rsakdmg: grab("rsakdmg"),
          rwakattack: grab("rwakattack"),
          rwakdmg: grab("rwakdmg"),
          spellattacks: grab("spellattacks"),
          spelldmg: grab("spelldmg"),
          spelldc: grab("spelldc"),
          wpnatks: grab("wpnatks"),
          wpndmg: grab("wpndmg"),
        };
        for (const property in options) {
          if (options[property]) {
            await createEffect(property, options[property]);
          }
        }
      },
    },
  },
  render: (html) => html.find("#atks").focus(),
}).render(true);

const createEffect = async function (effect, value) {
  let target = canvas.tokens.controlled[0];
  let effectName = `${value} added to ${namePairs[effect]} by macro`;
  let effectData = {
    label: effectName,
    icon: `systems/dnd5e/icons/spells/explosion-orange-3.jpg`,
    changes: [
      {
        key: pairs[effect],
        mode: 0,
        value: value,
        priority: 0,
      },
    ],
  };
  await target.actor.createEmbeddedEntity("ActiveEffect", effectData);
  await target.toggleEffect(
    `systems/dnd5e/icons/spells/explosion-orange-3.jpg`,
    { active: true }
  );
};

const pairs = {
  atks: "data.bonuses.All-Attacks",
  dmg: "data.bonuses.All-Damage",
  check: "data.bonuses.abilities.check",
  skill: "data.bonuses.abilities.skill",
  msakattack: "data.bonuses.msak.attack",
  msakdmg: "data.bonuses.msak.damage",
  mwakattack: "data.bonuses.mwak.attack",
  mwakdmg: "data.bonuses.mwak.damage",
  rsakattack: "data.bonuses.rsak.attack",
  rsakdmg: "data.bonuses.rsak.damage",
  rwakattack: "data.bonuses.rwak.attack",
  rwakdmg: "data.bonuses.rwak.damage",
  spellattacks: "data.bonuses.spell.attack",
  spelldmg: "data.bonuses.spell.damage",
  spelldc: "data.bonuses.spell.dc",
  wpnatks: "data.bonuses.weapon.attack",
  wpndmg: "data.bonuses.weapon.damage",
};

const namePairs = {
  atks: "All Attacks",
  dmg: "All Damage",
  check: "Ability Checks",
  skill: "Skill Checks",
  msakattack: "Melee Spell Attacks",
  msakdmg: "Melee Spell Damage",
  mwakattack: "Melee Weapon Attacks",
  mwakdmg: "Melee Weapon Damage",
  rsakattack: "Ranged Spell Attacks",
  rsakdmg: "Ranged Spell Damage",
  rwakattack: "Ranged Weapon Attacks",
  rwakdmg: "Ranged Weapon Damage",
  spellattacks: "All Spell Attacks",
  spelldmg: "All Spell Damage",
  spelldc: "Spell Save DC",
  wpnatks: "All Weapon Attacks",
  wpndmg: "All Weapon Damage",
};
