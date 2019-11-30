import React, { useState } from "react"
import styled from "@emotion/styled"
import { withStyles } from "@material-ui/core/styles"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Button from "@material-ui/core/Button"

import TextInput from "./TextInput"
import { InputLabel } from "./inputStyles"

const FormSection = styled.div`
  display: flex;
  margin: 20px 0;

  > div {
    flex-grow: 1;

    &:first-child {
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

const styles = () => ({
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

  console.log(guestAdded)

  return (
    <form>
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
        <TextInput label="Email" id="email" name="email" placeholder="Email" />
      </FormSection>

      <FormSection>
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
      </FormSection>

      <HiddenSection className={guestAdded === "Yes" ? "active" : ""}>
        <TextInput
          label="Guest Name"
          id="guest_name"
          name="guest_name"
          placeholder="Guest Name"
        />
      </HiddenSection>

      <Button variant="outlined">Submit</Button>
    </form>
  )
}

export default withStyles(styles)(RsvpForm)
