import React, { useState, useRef, useEffect} from 'react';
import styled from "styled-components";
import Slide from './Slide'
export default function Slider({slides}) {
const [currentSlide, setCurrentSlide] = useState(0);
const [shown, setIsShown] = useState(false);
const slideRef = useRef(null);
const TOTAL_SLIDES = 9;

useEffect(() => {
    slideRef.current.style.transform = `translate3d(-${currentSlide * 1060}px, 0px, 0px)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
const nextSlide = () => 
      setCurrentSlide(currentSlide >= TOTAL_SLIDES ? 0 : currentSlide + 1);
const prevSlide = () => 
        setCurrentSlide(currentSlide === 0 ? TOTAL_SLIDES : currentSlide - 1);

return (
<>
    <div className='slide-container'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
        <SliderContainer ref={slideRef}
        >
            {slides.map(item => (
                <Slide img={item.image.desktop} />
            ))}
        </SliderContainer>
        <ButtonLeft onClick={prevSlide} className={shown ? 'hover':''}><img src='/myreal/arrowleft.svg'/></ButtonLeft>
        <ButtonRight onClick={nextSlide} className={shown ? 'hover':''}><img src='/myreal/arrowright.svg'/></ButtonRight>
    </div>
    <div className='bulletCase'>
            {slides.map((item, index) => (
                <div key={index} onClick={() => setCurrentSlide(index)} className={index == currentSlide? 'bullet bullet-active' : 'bullet'}></div>
            ))}
        </div>
    <style JSX>{
    `
    .slide-container {
        width: 1060px;
        height: 280px;
        overflow: hidden;
        position:relative;
    }
    .hover {
        color: gray;
        border: 1px solid gray;
        background: gray;
        display: block;
    }
    .bulletCase {
        width:100%;
        height: 5px;
        line-height: 1;
        text-align: center;
    }
    .bullet {
        background-color: #f1f1f1;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        display: inline-block;
        margin-left: 5px;
    }
    .bullet-active {
        background-color: gray;
    }
    .slideImg {
        width: 100%;
        height: 280px;
    }
    `
    }
    </style>
    </>
  );
}
const SliderContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
`;

const ButtonLeft = styled.button`
    all: unset;
    border-radius: 50px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-left: 10px;
    display: none;
`;
const ButtonRight = styled.button`
    all: unset;
    border-radius: 50px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-right: 10px;
    display: none;
`;