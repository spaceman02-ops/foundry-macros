async function gogetem() {
    game.scenes.forEach(async (k, v) => {
        console.log(k.data._id);
        await game.scenes.preload(k.data._id, true);
    });
}
gogetem();
