import React, { useState } from "react"
import styled from "@emotion/styled"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import TextInput from "./TextInput"

const Form = styled.form`
  padding: 30px;
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
const Title = styled.h2`
  margin: 50px 30px 10px 30px;
`

const Date = styled.div`
  font-size: 18px;
  margin: 10px 30px;
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

const RsvpCoctail = props => {
  const [firstNameVal, setFirstName] = useState(false)
  const [lastNameVal, setLastName] = useState(false)
  const [guestAdded, setGuestAdded] = useState(false)

  const { classes } = props

  function handleFirstNameChange(event) {
    const value = event.target.value
    setFirstName(value !== "")
  }

  function handleLastNameChange(event) {
    const value = event.target.value
    setLastName(value !== "")
  }

  function handleGuestChange(event) {
    const value = event.target.value
    setGuestAdded(value !== "")
  }

  return (
    <>
      <Title>Cocktail Reception</Title>
      <Date>Friday, December 11th</Date>

      <Form
        name="cocktail-rsvp"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="cocktail-rsvp"
          aria-label="hidden form"
        />

        <label style={{ visibility: "hidden" }} aria-label="hidden field">
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>

        <FormSection>
          <TextInput
            label="First Name"
            id="first_name"
            name="First Name"
            placeholder="First Name"
            onChange={handleFirstNameChange}
            aria-label="First Name"
          />
          <TextInput
            label="Last Name"
            id="last_name"
            name="first_name"
            placeholder="Last Name"
            onChange={handleLastNameChange}
            aria-label="Last Name"
          />
        </FormSection>

        <FormSection>
          <TextInput
            label="Number of guests attending"
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="9"
            onChange={handleGuestChange}
            aria-label="Number of guests attending"
          />
        </FormSection>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          classes={{ containedPrimary: classes.button }}
          disabled={!firstNameVal || !lastNameVal || !guestAdded}
        >
          Submit
        </Button>
      </Form>
    </>
  )
}

export default withStyles(styles)(RsvpCoctail)
