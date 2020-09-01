import rp from 'request-promise';
export default async (req, res) => {
    const offer = await rp('https://www.myrealtrip.com/experiences/offers')
        .then((out) => out)
        .catch(console.log);
  res.status(200).json(offer)
}