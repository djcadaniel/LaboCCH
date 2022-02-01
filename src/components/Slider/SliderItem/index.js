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
                <p className="description__p" data-aos="fade-right">
                    {props.description}
                </p>
                <span className="description__span">
                    {props.description2}
                </span>
            </div>
        </div>
    )
}

export {SliderItem}