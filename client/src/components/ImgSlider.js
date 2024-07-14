import React from 'react'
import '../assets/CSS/ImgSlider.css';
import bg1 from '../assets/images/bg1.jpg'; 
import bg2 from '../assets/images/bg2.jpeg';
import bg3 from '../assets/images/bg3.jpg';
import bg4 from '../assets/images/bg4.jpg';
import bg5 from '../assets/images/bg5.jpg';

export const ImgSlider = () => {
  return (
    <div id="slider">
        <figure>
        <img src={bg1} alt="img"/>
        <img src={bg2} alt="img"/>
        <img src={bg3} alt="img"/>
        <img src={bg4} alt="img"/>
        <img src={bg5} alt="img"/>
        </figure>
    </div>
  )
}
