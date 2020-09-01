import Head from 'next/head'
import fetch from 'node-fetch';
import Nav from '../components/myrealtrip/Nav'
import Quick from '../components/myrealtrip/Quick'
import Cate from '../components/myrealtrip/cate'
import Slider from '../components/myrealtrip/Slider'
import OfferGroup from '../components/myrealtrip/offerGroup';

export default function Home({ posts, main }) {
    return (
        <div>
            <Head>
                <title>마이리얼트립 :: 여행의 모든 것</title>
            </Head>
            <div className="myrealContainer">
                <Nav></Nav>
                <h2 className="h2">
                    국내여행, 떠나볼까요?
                </h2>
                <Quick quicks={main.quickLinksCities}></Quick>
                <div className="cateTitle">여행 카테고리</div>
                <Cate cateItems={main.verticalItems}></Cate>
                <div className="bottomMargin"></div>
                <Slider slides={main.banners}></Slider>
                <OfferGroup datas={posts.popular_offers}></OfferGroup>
            </div>
            <style JSX>{`
                .myrealContainer {
                    width:1060px;
                    margin: 0 auto;
                }
                .h2 {
                    margin: 64px 0 32px;
                    text-align: center;
                    color: #343a40;
                    font-size: 40px;
                    font-weight: 600;
                    line-height: 48px;
                    letter-spacing: -.4px;
                }
                .cateTitle {
                    margin-top: 50px;
                    color: #343a40;
                    font-size: 24px;
                    margin-bottom: 20px;
                    font-weight: 700;
                }
                .bottomMargin {
                    margin-bottom: 56px;
                }
            `}</style>
        </div>
    )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/api/myreal')
  const res2 = await fetch('http://localhost:3001/api/myrealMain')
  const posts = await res.json()
  const main = await res2.json()
  return {
    props: {
      posts,
      main
    },
  }
}