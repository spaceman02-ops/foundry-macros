let folders = Array.from(game.folders);
let colorScheme = ["#353B3C", "#2B3A67", "#22223B"];
const getFolderById = (FolderId) => {
  return Array.from(game.folders).find((i) => i.id == FolderId);
};
for (let folder of folders) {
  let immediateParent = folder.data.parent;
  let nextParent = getFolderById(immediateParent)?.data.parent;
  if (folder.data.parent == null)
    await folder.update({ color: colorScheme[0] });
  else if (nextParent == null) await folder.update({ color: colorScheme[1] });
  else await folder.update({ color: colorScheme[2] });
}
