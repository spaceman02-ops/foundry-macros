let updates = [];
for (let token of canvas.tokens.controlled) {
    updates.push({
        _id: token.id,
        "flags.about-face.flipOrRotate": "rotate",
    });
    console.log(token.data.flags["about-face"].flipOrRotate);
}
canvas.scene.updateEmbeddedDocuments("Token", updates);
