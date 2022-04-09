/* eslint-disable no-undef */
async function walk(type, dir) {
  const filesFound = [];
  // eslint-disable-next-line no-undef
  const data = await FilePicker.browse(type, dir, {
    extensions: ['.webp', '.png'],
  });
  filesFound.push(...data.files);
  data.dirs.forEach((i) => filesFound.push(walk(type, i)));
  return Promise.all(filesFound);
}
function cleanString(str) {
  let newstr = str;
  newstr = newstr.replaceAll(/%20/g, '');
  if (newstr.match(/[ \w-]+?(?=\.)/g)?.[0]) {
    newstr = newstr.match(/[ \w-]+?(?=\.)/g)?.[0];
  }
  newstr = newstr.toLowerCase();
  newstr = newstr.replace(/[^a-z]/gim, '');
  return newstr;
}
const longestCommonSubsequence = (str1 = '', str2 = '') => {
  const s1 = [...str1];
  const s2 = [...str2];
  const arr = Array(s2.length + 1)
    .fill(null)
    .map(() => Array(s1.length + 1).fill(null));
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
    return '';
  }
  let res = '';
  while (arr[row][col] > 0) {
    res = s1[col - 1] + res;
    row -= 1;
    col -= 1;
  }
  return res;
};
async function compareAndUpdate(item) {
  let choices = await walk('public', 'icons/skills');
  choices = [...choices, ...(await walk('public', 'icons/magic')), ...(await walk('public', 'icons/weapons'))];
  choices = choices.flat();
  let best = [
    {
      path: '',
      value: 0,
    },
  ];
  for (let i = 0; i < choices.length; i += 1) {
    const filename = choices[i];
    const ratio = longestCommonSubsequence(cleanString(item.data.name), cleanString(filename));
    if (ratio.length >= best[0].value && ratio.length > 2) {
      const newbest = {
        path: choices[i],
        value: ratio.length,
      };
      best.push(newbest);
    }
  }
  console.log(best);
  best = best.sort((a, b) => b.value - a.value);
  console.log(best);
  console.log(item.data.name, best[0].path);
  return best.map((i) => i.path);
}

async function updateArt() {
  const choices = await walk('data', 'tokens/ronnik');
  game.actors.forEach((actor) => {
    if (actor.data.folder === game.folders.getName('Ronnik').id) {
      compareAndUpdate(actor, choices);
    }
  });
}

async function updateActorsInFolder() {
  game.actors.contents.forEach(async (actor) => {
    if (actor.data.folder === game.folders.getName('Image Macro').id) {
      actor.data.items.contents.forEach(async (item) => {
        let images = await compareAndUpdate(item);
        images = images.slice(1, 8);
        const buttons = images.map((i) => ({
          label: `<img src="${i}" width="50px" height="50px">`,
          callback: async () => {
            await item.update({ img: i });
          },
        }));
        const dialogOutter = await new Promise((resolve) => {
          const dialog = new Dialog({
            title: item.data.name,
            buttons,
            close: () => resolve(dialog),
          });
          dialog.render(true);
        });
        await dialogOutter();
      });
    }
  });
}

updateActorsInFolder();
//updateArt();
