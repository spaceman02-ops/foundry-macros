async function gogetem(name) {
    let p = game.playlists.getName(name);
    console.log(p);
    for (let s of p.data.sounds) {
        await AudioHelper.preloadSound(s.data.path);
    }
}
gogetem(
    await choose(Array.from(game.playlists).map((i) => i.data.name)),
    `Pick a playlist!`
);

async function choose(options = [], prompt = ``) {
    let value = await new Promise((resolve, reject) => {
        let dialog_options =
            options[0] instanceof Array
                ? options
                      .map((o) => `<option value="${o[0]}">${o[1]}</option>`)
                      .join(``)
                : options
                      .map((o) => `<option value="${o}">${o}</option>`)
                      .join(``);

        let content = `${prompt}<br><select id="choice">${dialog_options}</select>`;

        new Dialog({
            content,
            buttons: {
                OK: {
                    label: `OK`,
                    callback: async (html) => {
                        resolve(html.find("#choice").val());
                    },
                },
            },
        }).render(true);
    });
    return value;
}
