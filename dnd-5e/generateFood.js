async function walk(dir) {
  console.log('ran');
  let filesFound = [];
  data = await FilePicker.browse('public', dir, { extensions: ['.webp'] });
  filesFound.push(...data.files);
  for (let subDir of data.dirs) {
    filesFound.push(...(await walk(subDir)));
  }
  return filesFound;
}

let choices = await walk('icons/consumables/food');
for (let c of choices) {
  let filename = c.match(/[ \w-]+?(?=\.)/g);
  let i = await Item.create({
    name: filename,
    type: 'consumable',
    'data.consumableType': 'food',
    folder: 'AVuJUlZwJjA0ivmt',
    img: c,
  });
}
