let tiles = canvas.tiles.placeables;
for (let i = 0; i < tiles.length; i++) {
  let tile = tiles[i];
  let response = await fetch(tiles[i].data.img);
  let blob = await response.blob();
  let filename = `convertedAsset${Date.now()}.png`;
  let file = new File([blob], filename);
  let fileResponse = await FilePicker.upload(
    "data",
    "converted-assets",
    file,
    {}
  );
  await tile.update({ img: `/converted-assets/${filename}` });
}
