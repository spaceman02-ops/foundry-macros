let content = `

<div style="padding: 5px" class="form-group dialog distance-prompt">
  <label>Input an image:</label> <input type="text" id="newimage"
  name="newimage" value="image address goes here" / autofocus>
</div>
`;

new Dialog({
  title: `Renaming Dialog`,
  content,
  buttons: {
    inputname: {
      icon: "<i class='fas fa-pencil-alt'></i>",
      label: `Accept`,
      callback: (html) => {
        let newimage = html.find("#newimage").val();
        async function randomart(tokens = [], newimage) {
          for (let token of tokens) {
            let tokname = token.actor.data.name;
            let tokactor = game.actors.filter((a) => a.data.name == tokname);
            for (let el of tokactor) {
              await el.update({
                img: newimage,
                "token.img": newimage,
              });
            }
          }
        }
        randomart(canvas.tokens.controlled, newimage);
      },
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel`,
    },
  },
}).render(true);
