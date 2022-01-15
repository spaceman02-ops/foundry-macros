let d = new Dialog({
  title: "Show or Hide",
  content: "<p>Adjust name and bar settings:</p>",
  buttons: {
    one: {
      icon: '<i class="fas fa-eye"></i>',
      label: "Show",
      callback: async () => {
        let tokens = canvas.tokens.controlled;
        for (token of tokens) {
          await token.update({
            bar1: { attribute: "attributes.hp" },
            displayBars: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
            displayName: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
          });
        }
      },
    },
    two: {
      icon: '<i class="fas fa-eye-slash"></i>',
      label: "Hide",
      callback: async () => {
        let tokens = canvas.tokens.controlled;
        for (token of tokens) {
          await token.update({
            bar1: { attribute: "attributes.hp" },
            displayBars: CONST.TOKEN_DISPLAY_MODES.NONE,
            displayName: CONST.TOKEN_DISPLAY_MODES.NONE,
          });
        }
      },
    },
    three: {
      icon: '<i class="fas fa-mouse-pointer"></i>',
      label: "Hover",
      callback: async () => {
        let tokens = canvas.tokens.controlled;
        for (token of tokens) {
          await token.update({
            bar1: { attribute: "attributes.hp" },
            displayBars: CONST.TOKEN_DISPLAY_MODES.HOVER,
            displayName: CONST.TOKEN_DISPLAY_MODES.HOVER,
          });
        }
      },
    },
    four: {
      icon: '<i class="fas fa-bars"></i>',
      label: "Bar Only",
      callback: async () => {
        let tokens = canvas.tokens.controlled;
        for (token of tokens) {
          await token.update({
            bar1: { attribute: "attributes.hp" },
            displayBars: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
            displayName: CONST.TOKEN_DISPLAY_MODES.NONE,
          });
        }
      },
    },
    five: {
      icon: '<i class="fas fa-user-tag"></i>',
      label: "Name Only",
      callback: async () => {
        let tokens = canvas.tokens.controlled;
        for (token of tokens) {
          await token.update({
            bar1: { attribute: "attributes.hp" },
            displayBars: CONST.TOKEN_DISPLAY_MODES.NONE,
            displayName: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
          });
        }
      },
    },
  },
  default: "two",
  render: (html) => console.log("Decision logged"),
  close: (html) =>
    console.log("This always is logged no matter which option is chosen"),
});
d.position.width = 680;
d.position.heigh = 250;
d.render(true);
