import React, { useState } from 'react';

export default function Item({item}) {
if(item)
return (
    <div className="QuickItem">
        <a href={item.link}>
            <img className="QuickItemImg" src={item.cms_icon_url}/>
            <span className="QuickItemTitle">
                {item.title}
            </span>
        </a>
    </div>
    
)
else return <></>
}

