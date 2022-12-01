import React from 'react'
import { Slide } from '../components/Slide'
import { slides } from '../config'
import logo from '../images/logo.png'
import stock1 from '../images/stock1.jpg'
import './app.css'

function generateSlides() {

  const slideEls = []

  for (const slide of slides) 
    slideEls.push(<Slide title={slide.title} text={slide.text} BGImage={slide.BGImage} image={slide.image} align={slide.align} theme={slide.theme} />)
  
  return slideEls
}

const slideParents = document.getElementsByClassName('slideContainer')

let slideIndex = 0,
    scrollTop = 0

document.addEventListener('wheel', scrollManager)
document.addEventListener('keydown', hotKeyManager)

function scrollManager() {

  window.scroll({
    left: window.pageXOffset,
    top: scrollTop
  })
}

function hotKeyManager(event: any) {

    const key = event.key

    if (key == 'ArrowLeft' || key == 'ArrowUp' || key == 'w' || key == 'a') {

        previousSlide()
        return
    }
    if (key == 'ArrowRight' || key == 'ArrowDown' || key == 's' || key == 'd') {

        nextSlide()
        return
    }
}

function nextSlide() {

    if (slideIndex + 1 == slideParents.length) return

    slideIndex++

    const slide = slideParents[slideIndex] as any

    scrollTop = slide.offsetTop
    
    window.scroll({
        top: scrollTop,
        behavior: 'smooth'
    })
}

function previousSlide() {

    if (slideIndex - 1 == -1) return

    slideIndex--

    const slide = slideParents[slideIndex] as any

    scrollTop = slide.offsetTop

    window.scroll({
        top: scrollTop,
        behavior: 'smooth'
    })
}

export default function App() {
  return (
    <div className="app">
      <main>
        {generateSlides()}
      </main>
    </div>
  )
}