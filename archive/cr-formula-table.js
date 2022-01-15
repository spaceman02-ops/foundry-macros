let tables = game.tables.filter(
  (i) => i.data.folder == game.folders.getName("Encounters").id
);
async function getEntities() {
  console.log("function ran");
  tables.forEach(async (table) => {
    let results = table.data.results;
    results.forEach(async (result) => {
      let pack = game.packs.get(result.collection);
      let entity = await pack.getEntity(result.resultId);

      let formula = crToFormula(entity);
      console.log(formula);
      result.flags["better-rolltables"]["brt-result-formula"].formula = formula;
      console.log(
        result.flags["better-rolltables"]["brt-result-formula"].formula
      );
    });
  });
}
getEntities();

const crToFormula = (entity) => {
  let cr = entity.data.data.details.cr;
  console.log(cr);
  let formula;
  if (cr > 15) formula = "0";
  else if (cr > 10) formula = "0";
  else if (cr > 5) formula = "1d2";
  else if (cr > 2) formula = "1d4";
  else if (cr > 0) formula = "1d6";
  else formula = "1d10";
  return formula;
};
