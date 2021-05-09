// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import lsj from '../../data/lexica/LSJ.entries.json'

export default (req, res) => {
  res.statusCode = 200
  res.json(lsj)
}
