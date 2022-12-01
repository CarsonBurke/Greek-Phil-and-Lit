import React from "react"
import { SlideType } from "../config"
import './slide.css'

function generateImage(image: string | undefined) {

    if (!image) return

    return <img src={image} alt="" className="slideImage animate floatUp" />
}

export function Slide(opts: SlideType) {

    return (
        <section className={`slideContainer parallaxifyBg ${opts.align}Align`} style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${opts.BGImage})` }}>
            <div className={`slideParent ${opts.theme}Theme animate floatUp`}>

                <div className={`slideTopper`}>

                    <h2 className="slideHeader animate floatUp">{opts.title}</h2>

                </div>

                <div className="slideContent">

                    <p className="slideText animate floatUp">{opts.text}</p>

                    {generateImage(opts.image)}

                </div>
            </div>
        </section>
    )
}