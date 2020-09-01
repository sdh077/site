import React from 'react';
import styled from "styled-components";
import StarImg from './starImg'

export default function Star ({count}) {
    const full = Math.floor(count / 2);
    const half = count === 11 ? 0 : count % 2;
    const arr = Array.from(Array(full).keys());
    
    return (
    <div className='flex'>
    {arr.map(i => (
        <StarImg img='starfull'></StarImg>
    ))
    }
    {half ? <StarImg img='starhalf'></StarImg> : ''}
    </div>
    )
    
}
