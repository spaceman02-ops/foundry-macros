const tiles = canvas.background.controlled;
let avg = 0;
let tileIds = [];
if (tiles.length > 0) {
    for (let tile of tiles) {
        avg += tile.data.y;
        tileIds.push(tile.data._id);
    }
    avg = Math.floor(avg / tiles.length);
}

const update = tileIds
    .map((t) => canvas.scene.data.tiles.get(t))
    .map((t) => ({ _id: t.id, y: avg }));
await canvas.scene.updateEmbeddedDocuments("Tile", update);
