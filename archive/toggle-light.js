const sunlight = () => {
  let token = canvas.tokens.controlled[0];
  token.data.brightLight < 60
    ? token.update({
        brightLight: 60,
        dimLight: 90,
        lightAnimation: {
          intensity: 4,
          speed: 1,
          type: "sunburst",
        },
        lightColor: "#ffbb00",
        lightAlpha: 0.1,
      })
    : token.update({ brightLight: 20, dimLight: 40 });
};
sunlight();
