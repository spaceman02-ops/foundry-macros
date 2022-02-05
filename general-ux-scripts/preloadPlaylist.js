async function gogetem(name) {
    let p = game.playlists.getName(name);
    console.log(p);
    for (let s of p.value.data.sounds) {
        await AudioHelper.preloadSound(s.data.path);
    }
}
gogetem("Carpenter Brut");
