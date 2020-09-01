import React, { useState } from 'react';
import Item from './quick/item';
export default function Quick({quicks}) {
const [choice, setChoice] = useState(1);

if (choice)
return (
    <div>
        <div className="Quick">
            <div className="QuickTab">
                {quicks.map(quick => (
                <div className="QuickBtn" key={quick.id}>
                    <button className={quick.id === choice ?'QuickBtnActive': ''} onClick={() => setChoice(quick.id)}>{quick.city_name}</button>
                </div>
                ))
                }
            </div>
            <div className="QuickList">
                {
                    quicks.filter(q=> q.id === choice)
                    .flatMap(i => i.quicklink_items)
                    .map(item => (
                        <Item key={item.id} item={item}></Item>
                    ))
                }
                
            </div>
        </div>
        <style JSX>{`
            .Quick{
                border: 1px solid #e9ecef;
                border-radius: 16px;
                box-shadow: 0 8px 16px 0 rgba(33,37,41,.15);
                overflow: hidden;
                width: 100%;
                text-align: center;
            }
            .QuickTab {
                background: #e9ecef;
                width: 100%;
                overflow: hidden;
                display: flex;
            }
            .QuickBtn {
                background: white;
                display: inline-block;
                flex:1;
            }
            .QuickBtn > button {
                padding: 14px 4px;
                width: 100%;
                border: none;
                font-size: 18px;
                color: #666d75;
                font-weight: 500;
            }
            .QuickBtnActive {
                background: white;
                font-weight: 700 !important;
                color: #343a40 !important;
            }
            .QuickList {
                display : flex;
                padding: 24px 49px 32px;
            }
            .QuickItem {
                width: 100%;
                margin:8px 0;
            }
            .QuickItem > a {
                text-decoration: none;
                color: black;
            }
            .QuickItemImg {
                width: 56px;
                margin: auto;
            }
            .QuickItemTitle {
                font-size: 16px;
            }
        `}</style>
    </div>
)
else return <div></div>
}