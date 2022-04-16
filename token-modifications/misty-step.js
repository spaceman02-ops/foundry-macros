async function main() {
  token.actor.sheet.minimize();
  const tokenCenter = token.center;
  let cachedDistance = 0;
  const checkDistance = async (crosshairs) => {
    while (crosshairs.inFlight) {
      //wait for initial render
      await warpgate.wait(100);

      const ray = new Ray(tokenCenter, crosshairs);

      const distance = canvas.grid.measureDistances([{ ray }], { gridSpaces: true })[0];

      //only update if the distance has changed
      if (cachedDistance !== distance) {
        cachedDistance = distance;
        if (distance > 30) {
          crosshairs.icon = 'icons/svg/hazard.svg';
        } else {
          crosshairs.icon = token.data.img;
        }

        crosshairs.draw();

        crosshairs.label = `${distance} ft`;
      }
    }
  };

  const callbacks = {
    show: checkDistance,
  };

  const location = await warpgate.crosshairs.show({ size: token.data.width, icon: token.data.img, label: '0 ft.' }, callbacks);

  console.log(location);

  if (location.cancelled) return;
  if (cachedDistance > 30) {
    ui.notifications.error('Misty Step has a maximum range of 30 ft.');
    return;
  }

  let tokenD = canvas.tokens.controlled[0];
  let destination = await warpgate.crosshairs.show({
    config: {
      rememberControlled: true,
      interval: -1,
    },
  });
  let sequence = new Sequence()
    .effect()
    .file('modules/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamIntro_01_Regular_Blue_400x400.webm')
    .atLocation(tokenD)
    .scale(0.35)
    .wait(1000)
    .effect()
    .file('modules/jb2a_patreon/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_30ft_1600x400.webm')
    .atLocation(tokenD)
    .reachTowards({
      x: destination.x,
      y: destination.y,
    })
    .wait(1000)
    .animation()
    .on(tokenD)
    .teleportTo({
      x: destination.x,
      y: destination.y,
    })
    .waitUntilFinished()
    .effect()
    .file('modules/jb2a_patreon/Library/2nd_Level/Moonbeam/MoonbeamOutro_01_Regular_Blue_400x400.webm')
    .atLocation(destination);

  sequence.play();
}
main();
