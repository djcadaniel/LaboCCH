import React from "react";
import '../../../Css/Layout/Home/SliderItem.css'

function SliderItem(props){
    return(
        <div className="contentSlider">
            <picture className="picture">
                <source 
                    srcSet={props.src1}
                    media="(min-width:964px)" 
                    // src={props.src}
                />
                <source 
                    srcSet={props.src2}
                    media="(min-width:728px)" 
                />
                <img 
                    className="contentSlider__img"
                    src={props.src3}
                    alt="" 
                />
            </picture>
            <div className="splide__slide--description">
                <p className="description__p">
                    Desde 2014 cuidando <br />
                    de ti y tu familia
                </p>
                <span className="description__span">
                    Trayectoria de confianza
                </span>
            </div>
        </div>
    )
}

export {SliderItem}