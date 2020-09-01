import React, { useState } from 'react';
import styled from 'styled-components'
import Star from './star'

export default function Offer({ unit }) {
return (
        <div> 
            <div className='cardInfo'>
                {unit.category} {unit.city.name}
            </div>
            <div className='cardTitle'>
                {unit.title}
            </div>
            <div className='marginTop'></div>
            <div className='flex'>
                <Star count={(Math.ceil(unit.review.star / 0.5))}/> 
                <div className='countView'>
                {unit.review.count}
                </div>
            </div>
            <div className='flex'>
                <div className='originPrice'>{
                unit.price.origin ? 
                unit.price.origin +
                '원' :
                ''
                }</div>
                <div className='mainPrice'>{unit.price.main}원 / 1인</div>
            </div>
            <style JSX>
            {`
            .cardInfo {
                color: #848c94;
                font-size: 12px;
                max-width: 100%;
                overflow: hidden;
            }
            .cardTitle {
                font-size: 15px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .flex {
                display: flex;
            }
            .countView {
                font-size: 12px;
                vertical-align: middle;
                color: #848c94;
                display: inline-block;
            }
            .marginTop {
                margin-top: 20px;
            }
            .originPrice {
                font-size:12px;
                text-decoration: line-through;
                color: #666d75;
                font-weight: 400;
            }
            .mainPrice {
                color: #666d75;
                font-size: 14px;
                font-weight: 500;
            }
            `}
            </style>
        </div>
    )
}