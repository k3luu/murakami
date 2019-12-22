import React, { useState } from "react"
import styled from "@emotion/styled"
import { withStyles } from "@material-ui/core/styles"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Button from "@material-ui/core/Button"

import TextInput from "./TextInput"
import { InputLabel } from "./inputStyles"

const Form = styled.form`
  margin-top: 50px;
`

const FormSection = styled.div`
  display: flex;
  margin: 20px 0;

  > div {
    flex-grow: 1;
    margin-right: 20px;

    &:last-child {
      margin-right: 20px;
    }
  }
`

const HiddenSection = styled.div`
  margin-bottom: 50px;
  transform: scale(1, 0);
  transition: 500ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

  &.active {
    transform: scale(1, 1);
  }
`

const Title = styled.h2`
  margin: 10px 0;
`

const Date = styled.div`
  font-size: 18px;
`

const styles = () => ({
  button: {
    backgroundColor: "#74a3b7",
    marginTop: 100,
    boxShadow: "#74a3b77a 1px 1px 8px -3px",
    transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:hover": {
      backgroundColor: "#74a3b7",
      boxShadow: "#051a23bd 1px 1px 13px -5px",
      opacity: 0.9,
    },
  },
  label: {
    color: "#000",
    fontFamily: "Raleway",
    fontSize: 14,
    lineHeight: 1.1,
    width: 50,
  },
  group: {
    display: "flex",
    flexDirection: "row",
  },
})

const RsvpForm = props => {
  const [guestAdded, setGuestAdded] = useState(false)
  const { classes } = props

  function handleChange(event) {
    setGuestAdded(event.target.value)
  }

  return (
    <>
      <Title>Cocktail Reception</Title>
      <Date>Friday, September 19th</Date>

      <Form
        name="cocktail-rsvp"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Cocktail RSVP" />

        <label style={{ visibility: "hidden" }}>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>

        <FormSection>
          <TextInput
            label="First Name"
            id="first_name"
            name="First Name"
            placeholder="First Name"
          />
          <TextInput
            label="Last Name"
            id="last_name"
            name="first_name"
            placeholder="Last Name"
          />
        </FormSection>

        <FormSection>
          <TextInput
            label="Number of Guests Attending"
            type="number"
            id="guests"
            name="guests"
            placeholder="guests"
            min="1"
            max="9"
          />
        </FormSection>

        {/* <FormSection>
          <InputLabel style={{ margin: "15px 50px 15px 0" }}>
            Plus One?
          </InputLabel>
          <RadioGroup
            aria-label="guest-added"
            name="guestAdded"
            className={classes.group}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio color="primary" />}
              label="Yes"
              classes={{ label: classes.label }}
            />
            <FormControlLabel
              value="No"
              control={<Radio color="primary" />}
              label="No"
              classes={{ label: classes.label }}
            />
          </RadioGroup>
        </FormSection> */}

        {/* <HiddenSection className={guestAdded === "Yes" ? "active" : ""}>
          <TextInput
            label="Guest Name"
            id="guest_name"
            name="guest_name"
            placeholder="Guest Name"
          />
        </HiddenSection> */}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          classes={{ containedPrimary: classes.button }}
        >
          Submit
        </Button>
      </Form>
    </>
  )
}

export default withStyles(styles)(RsvpForm)
