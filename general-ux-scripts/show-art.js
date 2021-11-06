let d = new Dialog({
  title: "Show Art",
  buttons: {
    one: {
      label: "Token",
      callback: () => {
        for (let token of canvas.tokens.controlled) {
          let popout = new ImagePopout(token.data.img).render(true);
          popout.shareImage();
        }
      },
    },
    two: {
      label: "Art",
      callback: () => {
        for (let token of canvas.tokens.controlled) {
          let popout = new ImagePopout(token.actor.data.img).render(true);
          popout.shareImage();
        }
      },
    },
  },
  render: (html) => console.log("Decision logged"),
  close: (html) => console.log("Art Displayed"),
});
d.render(true);
