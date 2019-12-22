import React, { Component } from "react"
import SwipeableViews from "react-swipeable-views"
import { autoPlay, bindKeyboard } from "react-swipeable-views-utils"
import IconButton from "@material-ui/core/IconButton"
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
      currIndex: 0,
      xDown: null,
      yDown: null,
    }
  }

  componentWillUpdate(nextProps, nextState) {
    document.body.style.overflow = "initial"
    document.body.scroll = "yes"
  }

  componentDidMount() {
    document.addEventListener("touchstart", this.handleTouchStart, false)
    document.addEventListener("touchmove", this.handleSwipe, true)
  }

  componentWillUnmount() {
    document.removeEventListener("touchstart", this.handleTouchStart, false)
    document.removeEventListener("touchmove", this.handleSwipe, true)
  }

  handleTouchStart = evt => {
    const xDown = getTouches(evt)[0].clientX
    const yDown = getTouches(evt)[0].clientY

    this.setState({ xDown, yDown })
  }

  handleSwipe = evt => {
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

  handleChangeIndex = currIndex => {
    this.setState({ currIndex })
  }

  decrementCarouselIndex = () => {
    let newIndex = this.state.currIndex - 1

    if (newIndex < 0) {
      newIndex = this.props.data.length - 1
    }

    this.setState({ currIndex: newIndex })
  }

  incrementCarouselIndex = () => {
    let newIndex = this.state.currIndex + 1

    if (newIndex > this.props.data.length - 1) {
      newIndex = 0
    }

    this.setState({ currIndex: newIndex })
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
              imgStyle={{ objectFit: "contain" }}
            />
          ))}
        </EnhancedSwipeableViews>

        {showStatus && (
          <div className="mycarousel__status">{`${currIndex + 1} of ${
            data.length
          }`}</div>
        )}

        <div className="mycarousel__arrow-container">
          <IconButton
            aria-label="left-arrow"
            onClick={this.decrementCarouselIndex}
          >
            <ChevronLeft />
          </IconButton>

          <CarouselStepper
            dots={data.length}
            index={currIndex}
            onChangeIndex={this.handleChangeIndex}
          />

          <IconButton
            aria-label="right-arrow"
            onClick={this.incrementCarouselIndex}
          >
            <ChevronRight />
          </IconButton>
        </div>
      </div>
    )
  }
}

export default MyCarousel
