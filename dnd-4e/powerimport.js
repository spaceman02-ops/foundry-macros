window.myFunction = function () {
    $("#filteredList").empty();
    let filteredPowers = powerIndexes.filter((i) => {
        let input = document.getElementById("myInput");
        let f = input.value.toLowerCase();
        return i.Name.toLowerCase().includes(f);
    });
    if (filteredPowers.length < 100) {
        for (let pow of filteredPowers) {
            $("#filteredList")
                .append(`<div style="margin: 10px; display: block">
                <div
                    onClick="importPowerFromAPI(${pow.ID})"
                    style="
                        display: inline;
                        color: #444;
                        border: 1px solid #ccc;
                        background: #ddd;
                        box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
                        cursor: pointer;
                        vertical-align: middle;
                        max-width: 100px;
                        padding: 5px;
                        margin: 5px;
                        text-align: center;
                    "
                >
                    Import
                </div>
                ${pow.Name}
            </div>
            `);
        }
    }
};

window.importPowerFromAPI = async function (id) {
    const response = await window.fetch(
        `https://b705-99-131-6-209.ngrok.io/powers/${id}`,
        { headers: { "Content-Type": "application/json" }, method: "GET" }
    );
    const power = await response.json();
    console.log(power.JSON);
    let i = await Item.create({ name: "test", type: "power" });
    game.items.getName("test").importFromJSON(power.JSON);
};

async function getIndexes() {
    const response = await window.fetch(
        "https://b705-99-131-6-209.ngrok.io/powers/indexes",
        { headers: { "Content-Type": "application/json" }, method: "GET" }
    );
    let indexes = await response.json();
    return indexes;
}
let powerIndexes = await getIndexes();

new Dialog({
    title: `Power Search`,
    content: `<div class="inputcontainer" style="width: 95%; height: 200px; overflow: scroll; margin: 10px;">
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for powers..." title="Type in a name">
    <div id="filteredList"></div>
</div>
      `,
    buttons: {
        confirm: {
            label: `Close`,
            default: true,
        },
    },
}).render(true);
