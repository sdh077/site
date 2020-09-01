import rp from 'request-promise';
import cheerio from 'cheerio';
export default async (req, res) => {
    const offer = await rp('https://www.myrealtrip.com/')
        .then((out) => out)
        .catch(console.log);
    const $ = cheerio.load(offer);
    const json = JSON.parse($('main script.js-react-on-rails-component').html())
  res.status(200).json(json)
}