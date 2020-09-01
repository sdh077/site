import Offer from './offer';
import React, { useState, useRef, useEffect} from 'react';

export default function Offers({ data }) {
    const [currentOffer, setCurrent] = useState(0);
    const slideRef = useRef(null);

    useEffect(() => {
        slideRef.current.style.transform = `translate3d(-${currentOffer * 270}px, 0px, 0px)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }, [currentOffer]);
    const preOffer = () => 
        setCurrent(currentOffer > 4 ? currentOffer - 4 : 0 );
    const nextOffer = () => 
        setCurrent(data.offers.length > currentOffer + 8 ? currentOffer + 4 : data.offers.length - 4);
    return (
        <div>
            <div className='offerFrame'>
                <div className='offers'>
                    <div className='flex' ref={slideRef}>
                    {data.offers.map(offer => (
                        <Offer offer={offer} key={offer.id} />
                    ))}
                    </div>
                </div>
                <div className={currentOffer === 0 ? 'displayNone':'offerleft'} onClick={()=>preOffer()}>
                    <img src='/myreal/arrowleftC.svg'/>
                </div>
                <div className={data.offers.length === currentOffer+4 ? 'displayNone':'offerright'} onClick={()=>nextOffer()}>
                    <img src='/myreal/arrowrightC.svg'/>
                </div>
            </div>
            <style JSX>
            {`
            .offerFrame {
                position:relative;
            }
            .offers {
                overflow: hidden;
                width:100%;
            }
            .offerleft {
                all: unset;
                border-radius: 100%;
                position: absolute;
                left: -20px;
                top: 50%;
                background-color: white;
                box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 2px 6px 0 rgba(0,0,0,.05), 0 4px 12px 0 rgba(0,0,0,.05);
            }
            .offerright {
                all: unset;
                border-radius: 100%;
                position: absolute;
                right: -20px;
                top: 50%;
                background-color: white;
                box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 2px 6px 0 rgba(0,0,0,.05), 0 4px 12px 0 rgba(0,0,0,.05);
            }
            .offerright > img {
                padding: 8px;
            }
            .offerleft > img {
                padding: 8px;
            }
            .displayNone {
                display:none;
            }
            `}
            </style>
        </div>
        )
}