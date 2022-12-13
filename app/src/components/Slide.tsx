import React from "react"
import { slideChild, slides, SlideType } from "../config"
import './slide.css'

function generateImage(image: string | undefined) {

    if (!image) return

    return <img src={image} alt="" className="slideImage" />
}

function createSlideChildrenEls(slideChildren: slideChild[]) {

    const slideChildrenEls = []

    for (const slideChild of slideChildren) {

        slideChildrenEls.push(
            <div className={`slideChild hidden ${slideChild.theme}Theme ${slideChild.align}Align`}>
    
            <div className={`slideTopper`}>
    
                <h2 className="slideHeader">{slideChild.title}</h2>
    
            </div>
    
            <div className="slideContent">
    
                <p className="slideText">{slideChild.text}</p>
    
                {generateImage(slideChild.image)}
    
            </div>
        </div>
        )
    }

    return slideChildrenEls
}

interface SlideArgs {
    slideIndex: number
}

export function Slide(args: SlideArgs) {

    const slide = slides[args.slideIndex]

    return (
        <section className={`slideParent parallaxifyBg hidden`} style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${slide.BGImage})` }}>
            { createSlideChildrenEls(slide.slideChildren) } 
        </section>
    )
}