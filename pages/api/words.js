// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import lsjIndex from "../../data/lexica/LSJ.index.json";

export default (req, res) => {
  const requestedWordSearchString = req.query.wordSearchString;
  const lsjWithFirstIndexWordOnly = lsjIndex.find((index) => {
    const searchString = Object.keys(index)[0];
    const onlyThreeForms = index[searchString].w.length === 3;
    if (!onlyThreeForms) {
      console.log(
        "Index has erroneous entry. Greek words should be formatted: [current entry, previous entry, next entry]",
        searchString
      );
    }
    return {
      s: searchString,
      w: index[searchString].w[0],
    };
  });
  res.statusCode = 200;
  res.json(lsjWithFirstIndexWordOnly);
};
