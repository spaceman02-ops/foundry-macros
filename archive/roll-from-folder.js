let folderid = game.folders.getName("Loot").id;
let tables = game.tables.filter((i) => i.data.folder == folderid);
let options = "";

tables.forEach((item) => {
  options += `<option value="${item.data.name}">${item.data.name}</option>`;
});

let content = `
<form>
  <div class="form-group">
    <label for="table">Table:</label>
    <select id="table" name="table" autofocus>
      ${options}
</select>
  </div>
</form>
`;
new Dialog({
  title: `Select Name Table`,
  content,
  buttons: {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Choose`,
      callback: (html) => {
        let tableselected = html.find("#table").val();
        let table = game.tables.getName(tableselected);
        game.betterTables.betterTableRoll(table);
      },
    },
  },
  no: {
    icon: "<i class='fas fa-times'></i>",
    label: `Cancel`,
  },
}).render(true);
