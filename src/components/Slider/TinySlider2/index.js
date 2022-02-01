import React from "react";
import '../../../Css/Layout/Home/TinySlider.css'
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import slideA1 from '../../../img/slide/banner.jpg';
import slideA2 from '../../../img/slide/banner728.jpg';
import slideA3 from '../../../img/slide/bannervertical.jpg';
import { SliderItem } from "../SliderItem";

function TinySlider2(){

    const images =[
        {image1: slideA1, image2:slideA2, image3:slideA3, description:"Desde 2014 cuidando de ti y tu familia", description2:"Trayectoria de confianza"},
        {image1: slideA1, image2:slideA2, image3:slideA3, description:"Explora  más de 3000 análisis diferentes",description2:"Trayectoria de confianza"},
        {image1: slideA1, image2:slideA2, image3:slideA3, description:"Con un equipo de profesionales a tu servicio",description2:"Trayectoria de confianza"},
        {image1: slideA1, image2:slideA2, image3:slideA3, description:"A la vanguardia de la tencología",description2:"Trayectoria de confianza"}
    ]

    const settings={
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayButtonOutput: false,
        touch: true,
        lazyload: true,
        mouseDrag: true,
        controls:true,
        controlsContainer: '#customize-controls',
        prevButton: '.previous',
        nextButton: '.next',
        nav:true,
        navContainer: '#customize-nav',
        navAsThumbnails: true,
        arrowKeys: true,
    }

    return(
        <div className="contentSlider">
            <TinySlider
                className='TinySlider'
                settings={settings}
            >
                {images.map((item, index) => (
                    <SliderItem 
                        key={index}
                        src1={item.image1}
                        src2={item.image2}
                        src3={item.image3}
                        description={item.description}
                        description2={item.description2}
                    />
                ))}
            </TinySlider>
            <ul id="customize-controls">
                <li className="previous">
                    <i className="fas fa-caret-left"></i>
                </li>
                <li className="next">
                    <i className="fas fa-caret-right"></i>
                </li>
            </ul>
            <ul id='customize-nav'>
                {images.map((x,index)=>{
                    return <li key={index}></li>
                })}
            </ul>
        </div>
    )
}

export {TinySlider2}