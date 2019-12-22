import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Lens } from "@material-ui/icons"
import "./MyCarousel.css"

const styles = () => ({
  icon: {
    borderRadius: 100,
    margin: 2,
    fontSize: 14,
    color: "#74a3b7",
    cursor: "pointer",
  },
})

const renderIcons = props => {
  const dots = []

  for (let i = 0; i < props.dots; i++) {
    dots.push(
      <Lens
        key={i}
        className={props.classes.icon}
        style={props.index === i ? {} : { color: "#f2eee2" }}
        onClick={() => props.onChangeIndex(i)}
      />
    )
  }
  return dots
}

const CarouselStepper = props => (
  <div className="stepper__container">
    <div className="stepper__icon-container">{renderIcons(props)}</div>
  </div>
)

export default withStyles(styles)(CarouselStepper)
