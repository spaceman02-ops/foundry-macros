const addOngoingDamageMacro = async (token = {}, type = "", amount = 0) => {
  const flagSet = await token.actor.setFlag("world", "ongoing", {
    type,
    amount,
  });
  console.log(flagSet);
  return { type, amount };
};
const checkOngoingDamageMacro = async (token = {}) => {
  const flagReturn = await token.actor.getFlag("world", "ongoing");
  return flagReturn;
};
const createDamageChatMessage = async (token = {}, dmgObject = {}) => {
  console.log(token, dmgObject);
  if (dmgObject.amount) {
    const content = `${token.actor.name} takes ${dmgObject.amount} ongoing ${dmgObject.type} damage.`;
    const messageData = {
      content,
    };
    const messageClass = getDocumentClass("ChatMessage");
    messageClass.create(messageData);
  }
};

const check = async (t) => {
  let damage = await checkOngoingDamageMacro(t);
  if (damage.amount){
  createDamageChatMessage(t, damage);
  }
};
addOngoingDamageMacro(canvas.tokens.controlled[0], "acid", 15);
Hooks.on("updateCombat", () => {
  check(this.arguments[0].token);
});
