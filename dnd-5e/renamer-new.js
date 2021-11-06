let folderid = game.folders.getName("Names").id;
let tables = game.tables.filter((i) => i.data.folder == folderid);
let options = "";

tables.sort(function (a, b) {
  var nameA = a.data.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.data.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

tables.forEach((item) => {
  options += `<option value="${item.data.name}">${item.data.name}</option>`;
});

let content = `
<form>
  <div style="padding: 5px" class="form-group">
    <label for="table">Use a random table:</label>
    <select id="table" name="table" autofocus>
      ${options}
    </select>
  </div>
</form>
<div style="padding: 5px" class="form-group dialog distance-prompt">
  <label>Input a name:</label> <input type="text" id="obscuredName"
  name="obscuredName" value="" / autofocus>
</div>
`;

new Dialog({
  title: `Renaming Dialog`,
  content,
  buttons: {
    randomtable: {
      icon: "<i class='fas fa-dice'></i>",
      label: `Random`,
      callback: (html) => {
        let tableselected = html.find("#table").val();
        console.log(tableselected);
        const rename = async () => {
          for (token of canvas.tokens.controlled) {
            let table = game.tables.getName(tableselected);
            let result = await table.roll();
            let name = result.results[0].data.text.trim();
            await token.document.update({ name: name });
          }
        };
        rename();
      },
    },
    inputname: {
      icon: "<i class='fas fa-pencil-alt'></i>",
      label: `Input`,
      callback: (html) => {
        let newname = html.find("#obscuredName").val();
        const rename = async () => {
          for (token of canvas.tokens.controlled) {
            await token.document.update({ name: newname });
          }
        };
        rename();
      },
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel`,
    },
  },
}).render(true);
