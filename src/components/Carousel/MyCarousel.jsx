import React, { Component } from "react"
import SwipeableViews from "react-swipeable-views"
import { bindKeyboard } from "react-swipeable-views-utils"
import Button from "@material-ui/core/Button"
import { ChevronLeft, ChevronRight } from "@material-ui/icons"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import CarouselStepper from "./CarouselStepper"
import "./MyCarousel.css"

const EnhancedSwipeableViews = bindKeyboard(SwipeableViews)

const getTouches = evt => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  )
}

class MyCarousel extends Component {
  constructor(p) {
    super(p)

    this.state = {
      carouselFullscreen: false,
      currIndex: 0,
      xDown: null,
      yDown: null,
    }

    this.toggleFullscreen = this.toggleFullscreen.bind(this)
    this.handleChangeIndex = this.handleChangeIndex.bind(this)
    this.decrementCarouselIndex = this.decrementCarouselIndex.bind(this)
    this.incrementCarouselIndex = this.incrementCarouselIndex.bind(this)
    this.centerThumbnail = this.centerThumbnail.bind(this)
    this.handleSwipe = this.handleSwipe.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.carouselFullscreen) {
      document.body.style.overflow = "hidden"
      document.body.scroll = "no"
    } else {
      document.body.style.overflow = "initial"
      document.body.scroll = "yes"
    }
  }

  componentDidMount() {
    document.addEventListener("touchstart", this.handleTouchStart, false)
    document.addEventListener("touchmove", this.handleSwipe, true)
  }

  componentWillUnmount() {
    document.removeEventListener("touchstart", this.handleTouchStart, false)
    document.removeEventListener("touchmove", this.handleSwipe, true)
  }

  handleTouchStart(evt) {
    const xDown = getTouches(evt)[0].clientX
    const yDown = getTouches(evt)[0].clientY

    this.setState({ xDown, yDown })
  }

  handleSwipe(evt) {
    const { xDown, yDown } = this.state

    if (!xDown || !yDown) {
      return
    }

    const xUp = evt.touches[0].clientX
    const yUp = evt.touches[0].clientY

    const xDiff = xDown - xUp
    const yDiff = yDown - yUp

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      // this.centerThumbnail()
      if (xDiff > 0) {
        /* left swipe */
      } else {
        /* right swipe */
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }

    this.setState({ xDown: null, yDown: null })
  }

  centerThumbnail() {
    const stepperThumbContainer = document.getElementById(
      "stepperThumbContainer"
    )
    const stepperCurrThumb = document.getElementById("stepperCurrThumb")

    const containerWidth = stepperThumbContainer.clientWidth
    const targetWidth = stepperCurrThumb.clientWidth + 10

    if (stepperThumbContainer) {
      const leftScreenOffset = (containerWidth - targetWidth) / 2
      const leftSiblingOffset = targetWidth * this.state.currIndex
      const scrollValue = leftSiblingOffset - leftScreenOffset

      stepperThumbContainer.scrollLeft = Math.max(0, scrollValue)
    }
  }

  toggleFullscreen() {
    this.setState({ carouselFullscreen: !this.state.carouselFullscreen })
  }

  handleChangeIndex(currIndex) {
    this.setState({ currIndex })
  }

  decrementCarouselIndex() {
    let newIndex = this.state.currIndex - 1

    if (newIndex < 0) {
      newIndex = this.props.data.length - 1
    }

    this.setState({ currIndex: newIndex })
    // this.centerThumbnail()
  }

  incrementCarouselIndex() {
    let newIndex = this.state.currIndex + 1

    if (newIndex > this.props.data.length - 1) {
      newIndex = 0
    }

    this.setState({ currIndex: newIndex })
    // this.centerThumbnail()
  }

  render() {
    const { data, showStatus, showArrows, showThumbnails } = this.props
    const { currIndex } = this.state

    return (
      <div id="myCarousel" className="mycarousel">
        <EnhancedSwipeableViews
          resistance
          index={currIndex}
          onChangeIndex={this.handleChangeIndex}
        >
          {data.map(elem => (
            <Img
              fluid={elem.node.childImageSharp.fluid}
              key={elem.node.id}
              alt={elem.node.name.replace(/-/g, " ").substring(2)}
            />
          ))}
        </EnhancedSwipeableViews>

        {showStatus && (
          <div className="mycarousel__status">{`${currIndex + 1} of ${
            data.length
          }`}</div>
        )}

        {showArrows && (
          <div className="mycarousel__arrow-container">
            <div className="mycarousel__arrow-left">
              <Button
                variant="fab"
                mini
                aria-label="left-arrow"
                onClick={this.decrementCarouselIndex}
              >
                <ChevronLeft />
              </Button>
            </div>
            <div className="mycarousel__arrow-right">
              <Button
                variant="fab"
                mini
                aria-label="right-arrow"
                onClick={this.incrementCarouselIndex}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        )}

        <CarouselStepper
          dots={data.length}
          index={currIndex}
          onChangeIndex={this.handleChangeIndex}
        />
      </div>
    )
  }
}

export default MyCarousel
