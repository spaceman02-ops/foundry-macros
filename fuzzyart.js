async function updateTokenArt(gameFolder, artDirectory, filesystem) {
    let choices = await walk(filesystem, artDirectory);
    for (let actor of game.actors.contents) {
        if (actor.data.folder == game.folders.getName(gameFolder).id) {
            compareAndUpdate(actor, choices);
        }
    }
}

async function updateItemArt(gameFolder, artDirectory, filesystem) {
    let choices = await walk(filesystem, artDirectory);
    for (let actor of game.actors.contents) {
        if (actor.data.folder !== game.folders.getName(gameFolder).id) {
            continue;
        }
        for (let item of actor.data.items.contents) {
            await compareAndUpdate(item, choices);
        }
    }
}

async function walk(type, dir) {
    let filesFound = [];
    data = await FilePicker.browse(type, dir, {
        extensions: [".webp", ".png"],
    });
    filesFound.push(...data.files);
    for (let subDir of data.dirs) {
        filesFound.push(...(await walk(type, subDir)));
    }
    return filesFound;
}

async function compareAndUpdate(actor, choices) {
    let best = {
        path: "",
        value: 0,
    };
    for (let i = 0; i < choices.length; i++) {
        let filename = choices[i];
        let ratio = longestCommonSubsequence(
            cleanString(actor.data.name),
            cleanString(filename)
        );
        if (ratio.length >= best.value) {
            best.path = choices[i];
            best.value = ratio.length;
        }
    }
    console.log(`${cleanString(actor.data.name)}: ${cleanString(best.path)}`);
    await actor.update({ img: best.path });
}

const longestCommonSubsequence = (str1 = "", str2 = "") => {
    const s1 = [...str1];
    const s2 = [...str2];
    const arr = Array(s2.length + 1)
        .fill(null)
        .map(() => {
            return Array(s1.length + 1).fill(null);
        });
    for (let j = 0; j <= s1.length; j += 1) {
        arr[0][j] = 0;
    }
    for (let i = 0; i <= s2.length; i += 1) {
        arr[i][0] = 0;
    }
    let len = 0;
    let col = 0;
    let row = 0;
    for (let i = 1; i <= s2.length; i += 1) {
        for (let j = 1; j <= s1.length; j += 1) {
            if (s1[j - 1] === s2[i - 1]) {
                arr[i][j] = arr[i - 1][j - 1] + 1;
            } else {
                arr[i][j] = 0;
            }
            if (arr[i][j] > len) {
                len = arr[i][j];
                col = j;
                row = i;
            }
        }
    }
    if (len === 0) {
        return "";
    }
    let res = "";
    while (arr[row][col] > 0) {
        res = s1[col - 1] + res;
        row -= 1;
        col -= 1;
    }
    return res;
};
function cleanString(str) {
    str = str.replaceAll(/%20/g, "");
    if (str.match(/[ \w-]+?(?=\.)/g)?.[0]) {
        str = str.match(/[ \w-]+?(?=\.)/g)?.[0];
    }
    str = str.toLowerCase();
    str = str.replace(/[^a-z]/gim, "");
    return str;
}
