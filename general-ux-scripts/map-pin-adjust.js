let newNoteData = {};

for (let c of canvas.notes.children[0].children) {
    newNoteData = duplicate(c.data);
    newNoteData.fontFamily = "Modesto Condensed";
    newNoteData.fontSize = 32;
    //newNoteData.icon = "icons/svg/book.svg";
    newNoteData.iconSize = 32;
    newNoteData.iconTint = "#1985A1";
    //newNoteData.text = "test";
    //newNoteData.textAnchor = 1;
    //newNoteData.textColor = "#f5f5f5";
    //newNoteData.x = 2250;
    //newNoteData.y = 2050;

   await c.update(newNoteData);

}

async () => {
    await canvas.draw()
} 