import React, { useState } from 'react';

export default function Cate({cateItems}) {
const cate = [
    {
        img:'tour.png',
        title: '투어&티켓'
    },
    {
        img: 'airplane.png',
        title: '해외항공권'
    },
    {
        img: 'hotel.png',
        title: '해외숙소'
    },
    {
        img: 'len.png',
        title: '랜선투어'
    },
    {
        img: 'career.png',
        title: '패키지'
    },
    {
        img: 'sale.png',
        title: '할인혜택'
    }
]
if(cateItems)
return (
    <div>
        {cateItems.map(item => (
        <div key={item.id} className="cateCard">
            <div className="cateCardInner">
                <img src={item.cms_icon_url} />
                <span>{item.title}</span>
            </div>
        </div>
        ))}
        <style JSX>
        {`
        .cateCard {
            display: inline-block;
            width: 123.75px;
            margin-right: 10px;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 10px 0;

        }
        .cateCardInner {
            text-align: center;
            color: #495056;
            font-size: 14px;
        }
        .cateCardInner > img {
            width: 40px;
            height: 40px;
            margin: auto;
        }
        `}
        </style>
    </div>
    
)
else 
        return <></>
}

