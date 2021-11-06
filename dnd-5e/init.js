let tokens = canvas.tokens.controlled;
let filtered = [];
for (let token of tokens) {
    let name = token.actor.name;
    let filteredNames = filtered.map(i=>i.actor.name)
    if (!filteredNames.includes(name)) filtered.push(token)
}

async function start(filtered) {
    for ( let filter of filtered) {    
        console.log(filter)  
      if (filter.inCombat === false){
        
        await filter.toggleCombat().then(() => game.combat.rollNPC({formula: null, messageOptions:{rollMode: 'gmroll'}}));
      }
    }
  }
start(filtered);