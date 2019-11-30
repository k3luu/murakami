import React from "react"
import styled from "@emotion/styled"

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

const RsvpForm = props => {
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
        <input type="radio" name="guestAdded" value="Yes" />{" "}
        <InputLabel>Yes</InputLabel>
        <input type="radio" name="guestAdded" value="No" />{" "}
        <InputLabel>No</InputLabel>
      </FormSection>

      <HiddenSection>
        <TextInput
          label="Guest Name"
          id="guest_name"
          name="guest_name"
          placeholder="Guest Name"
        />
      </HiddenSection>
    </form>
  )
}

export default RsvpForm
