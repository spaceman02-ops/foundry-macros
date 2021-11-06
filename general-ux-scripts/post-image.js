let content = `
<div style="padding: 5px" class="form-group dialog distance-prompt">
  <label>Input a name:</label> <input type="text" id="linkinput"
  name="linkinput" value="" / autofocus>
</div>
`;
new Dialog({
  title: `Renaming Dialog`,
  content,
  buttons: {
    link: {
      icon: "<i class='fas fa-pencil-alt'></i>",
      label: `Post Image`,
      callback: (html) => {
        let linky = html.find("#linkinput").val();

        let chatData = {
          user: game.user._id,
          content: `<img src="${linky}" />`,
        };
        ChatMessage.create(chatData, {});
      },
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel`,
    },
  },
}).render(true);
