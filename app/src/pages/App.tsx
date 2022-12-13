import React, { ReactElement } from 'react'
import { Slide } from '../components/Slide'
import { slides, SlideType } from '../config'
import logo from '../images/logo.png'
import stock1 from '../images/stock1.jpg'
import { timer } from '../utils'
import './app.css'

class SlideManager {

  slideIndex = 0
  slideChildIndex = 0
  slideEls = document.getElementsByClassName('slideParent')
  slideChildEls: HTMLCollection[]

  constructor() {

    this.slideChildEls = []
  }

  init() {

    this.slideEls = document.getElementsByClassName('slideParent')

    console.log('init')
    for (const el of this.slideEls) {
      console.log(el.children)
      this.slideChildEls.push(el.children)
    }
    this.showSlide(this.slideEls[0])
    this.showSlideChild(this.slideChildEls[0][0])
  }

  createSlideEls() {

    const slideEls = []

    for (let i = 0; i < slides.length; i++) {

      slideEls.push(<Slide slideIndex={i} />)
    }
    
    return slideEls
  }

  findSlideChildEls() {

    for (const el of this.slideEls) {
      console.log(el.children)
      this.slideChildEls.push(el.children)
    }

  }

  hotkeyManager(event: any) {

    const key = event.key

    console.log(this.slideIndex, this.slideChildIndex, this.slideChildEls)
    if (key == 'ArrowLeft' || key == 'ArrowUp' || key == 'w' || key == 'a') {

        this.previousSlide()
        return
    }
    if (key == 'ArrowRight' || key == 'ArrowDown' || key == 's' || key == 'd') {

        this.nextSlide()
        return
    }
}

  async nextSlide() {

    if (await this.nextSlideChild()) return
    if (this.slideIndex + 1 === this.slideEls.length) return

    await this.hideSlide(this.slideEls[this.slideIndex])

    this.slideIndex += 1
    this.slideChildIndex = 0
    console.log('nextB', this.slideIndex, this.slideEls[this.slideIndex])
    this.showSlide(this.slideEls[this.slideIndex])
    this.showSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])
  }

  async previousSlide() {

    if (await this.previousSlideChild()) return
    if (this.slideIndex === 0) return

    await this.hideSlide(this.slideEls[this.slideIndex])

    this.slideIndex -= 1
    this.slideChildIndex = 0/* this.slideChildEls[this.slideIndex].length - 1 */
    console.log('prevB', this.slideIndex, this.slideEls[this.slideIndex])
    this.showSlide(this.slideEls[this.slideIndex])
    this.showSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])
  }

  async hideSlide(slide: Element) {

    slide.classList.add('slideHide')

    await timer(0.5)

    slide.classList.remove('slideHide')
    slide.classList.add('hidden')
  }

  async showSlide(slide: Element) {

    slide.classList.add('slideShow')
    slide.classList.remove('hidden')
  }

  async nextSlideChild() {

    if (this.slideChildIndex + 1 === this.slideChildEls[this.slideIndex].length) return false

    await this.hideSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])

    this.slideChildIndex += 1

    await this.showSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])
    return true
  }

  async previousSlideChild() {
    if (this.slideChildIndex === 0) return false

    await this.hideSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])

    this.slideChildIndex -= 1
    console.log('PB', this.slideChildIndex, this.slideChildEls[this.slideIndex][this.slideChildIndex])
    await this.showSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])
    return true
  }

  async hideSlideChild(slideChild: Element) {

    slideChild.classList.add('slideHide')

    await timer(0.5)

    slideChild.classList.remove('slideHide')
    slideChild.classList.add('hidden')
  }

  async showSlideChild(slideChild: Element) {

    slideChild.classList.add('slideShow')
    slideChild.classList.remove('hidden')
  }
}

const slideManager = new SlideManager()

document.addEventListener('keydown', (event) => { slideManager.hotkeyManager(event) })
window.addEventListener('load', slideManager.init)

export default function App() {
  return (
    <div className="app">
      <main>
        {slideManager.createSlideEls()}
      </main>
    </div>
  )
}