async function getFolderAndRoll() {
  let folders = game.folders.filter(
    (i) => i.data.type == "RollTable" && i.data.parent === null
  );
  let folderOptions = "";

  folders.forEach((item) => {
    folderOptions += `<option value="${item.data.name}">${item.data.name}</option>`;
  });

  let content = `
    <form>
      <div class="form-group">
        <label for="folder">Folder:</label>
        <select id="folder" name="folder" autofocus>
          ${folderOptions}
    </select>
      </div>
    </form>
    `;
  new Dialog({
    title: `Select Folder`,
    content,
    buttons: {
      yes: {
        icon: "<i class='fas fa-check'></i>",
        label: `Choose`,
        callback: async (html) => {
          let folderselected = html.find("#folder").val();
          let folder = game.folders.getName(folderselected);
          console.log(folder);
          await rollFromFolder(folder);
        },
      },
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel`,
    },
  }).render(true);
}

async function rollFromFolder(folder) {
  let folderid = folder.id;
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
        callback: async (html) => {
          let tableselected = html.find("#table").val();
          console.log(tableselected);
          let table = game.tables.getName(tableselected);
          console.log(table);
          let theRoll = await table.roll();
          let results = Array.from(theRoll.results);
          console.log(results);
          let output = `${table.data.description}<br><table><tr><td><b>${table.name}</td></tr></b>`;
          for (let result of results) {
            output = output + `<tr><td>${result.data.text.trim()}</td></tr>`;
          }
          output += `</table>`;
          let chatData = {
            user: game.user._id,
            content: output,
          };
          ChatMessage.create(chatData, {});
        },
      },
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel`,
    },
  }).render(true);
}
getFolderAndRoll();
