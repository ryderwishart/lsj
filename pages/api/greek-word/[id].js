// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import lsj from '../../data/lexica/LSJ.entries.json'

const handler = (req, res) => {
  const key = req.query.word || 'ἀάβηκτον';

  const selectedWordsArray = root.data.filter(
    (textContainer) => textContainer.text.key === key,
  );
  if (selectedTextArray) {
    res.status(200).json(selectedTextArray[0]);
  } else {
    res.status(404).json({ message: `Text with id ${key} not found.` });
  }
};

export default handler;

// TODO: these routes should be determined by the title, not the id, for SEO purposes
