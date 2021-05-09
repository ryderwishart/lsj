// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import lsjIndex from '../../../data/lexica/LSJ.index.json'

export default (req, res) => {
  res.statusCode = 200
  res.json(lsjIndex)
}

// "frontmatter":"! LSJ.1940-8.1.txt. Fichier d'index pour le dico sus-nommé. créé par et pour la version résidente d'Eulexis. Le fichier HTML du LSJ a été revu Chaerephon. Philippe Verkerk 2020. Les lignes commençant par un ! sont des commentaires, Α",