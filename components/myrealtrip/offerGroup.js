import Offers from './offers';

export default function OfferGroup({ datas }) {
  return (
        <div>
            {datas.map(item =>(
            <section className='oGroup'>
                <h2>{item.title}</h2>
                <Offers data={item} key={item.title}/>
            </section>
            ))
            }
            <style JSX>
            {`
            .oGroup {
            }
            `}
            </style>
        </div>
        )
}