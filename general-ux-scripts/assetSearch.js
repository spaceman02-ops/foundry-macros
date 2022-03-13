async function walk(dir) {
    let filesFound = [];
    data = await FilePicker.browse("data", dir, { extensions: [".webp"] });
    filesFound.push(...data.files);
    for (let subDir of data.dirs) {
        filesFound.push(...(await walk(subDir)));
    }
    return filesFound;
}

async function createIndex(dir) {
    let index = [];
    let choices = await walk(dir);
    for (let i = 0; i < choices.length; i++) {
        let filename = choices[i].match(/([^\/]*$)/g);
        if (filename) {
            index.push({ name: filename[0], path: choices[i] });
        }
    }
    return index;
}
const assetIndex = await createIndex("assets/pickard/ct-burned-forest");
console.log(assetIndex);
window.handleSearch = async function () {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    //$("#previewOfAsset").empty();
    console.log("called");
    //$("#filteredList").empty();
    let filteredItems = assetIndex.filter((i) => {
        return i.name
            .toLowerCase()
            .includes(document.getElementById("myInput").value.toLowerCase());
    });
    if (filteredItems.length < 1000) {
        for (let f of filteredItems) {
            let thumb = resizeMe(f.path);
            console.log(thumb);
            var myImg = $("<img />", {
                src: thumb,
                alt: "Alt text",
            });
            $("#filteredList").append(myImg);
        }
    }
};

new Dialog(
    {
        title: `Content Import`,
        content: `
  <div style="margin-bottom:10px; margin-right:10px;">
  <button onclick="handleSearch()">Search</button>
  <input type="text" id="myInput" placeholder="Search for content..." title="Type in a name">
  </div>
  <div id="previewOfAsset"></div>
    <div id="filteredList"></div>
</div>
      `,
        buttons: {
            confirm: {
                label: `Close`,
                default: true,
            },
        },
    },
    { width: 500, height: 500 }
).render(true);

function resizeMe(path) {
    var img = new Image(200, 200);
    img.src = path;
    var canvas = document.createElement("canvas");
    width = 200;
    height = 200;
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    let data = canvas.toDataURL("", 1);
    console.log(data);
    return data; // get the data from canvas as 70% JPG (can be also PNG, etc.)
}
