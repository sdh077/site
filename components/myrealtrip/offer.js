import React, { useState } from 'react';
import OfferUnit from './offerUnit';
export default function Offer({ offer }) {
    const [view, setView] = useState(false);

  return (
        <div>
            <div className='offerCard'>
                <div className='offerImg'>
                    <img src={offer.image}/>
                </div>
                <div className='offerCardContent'>
                    <OfferUnit unit={offer}></OfferUnit>
                </div>
            </div>
            <style JSX>
            {`
            .offerCard {
                width:250px;
                height: 311px;
                border: 1px solid #e1e1e1;
                border-radius: 4px;
                overflow: hidden;
                margin-right: 20px;
            }
            .offerImg {
                width:  100%;
                height: 166px;
                overflow: hidden;
            }
            .offerCardContent {
                width:100%;
                height: 145px;
                padding: 10px 16px;
            }
            `}
            </style>
        </div>
        )
}