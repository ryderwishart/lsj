import lsjIndex from '../../data/lexica/LSJ.index.json';
import lsj from '../../data/lexica/LSJ.entries.json'

const handler = (req, res) => {
  console.log(req.query.word)
  const searchStringWord = req.query.word;
  let wordData;
  try {
    const lsjIndexGreekWordFromSearchString = lsjIndex.find((i) => Object.keys(i)[0] === searchStringWord)
  console.log(lsjIndexGreekWordFromSearchString)
  const greekWordForm = lsjIndexGreekWordFromSearchString[searchStringWord].w[0]
  console.log({greekWordForm})
    wordData = lsj.find(word => word.id === greekWordForm)
  } catch (error) {
    wordData = null;
  }
  if (!!wordData) {
    res.status(200).json(wordData);
  } else {
    res.status(404).json({ message: `The requested word, ${searchStringWord}, was not found.` });
  }


};

export default handler;
