import React from 'react';
import styled from "styled-components";

export default function StarImg ({img}) {
    return <div>
    <img className='simg' src={`/myreal/${img}.png`}/>
    <style JSX>
    {`
    .simg {
        width:12px;
    }
    `}    
    </style>    
    </div>
}

