import styled from "@emotion/styled"

export const TextFieldContainer = styled.div``

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  line-height: 1.1;
  text-align: left;
  color: #000;
  font-family: "Raleway";
`

export const DropdownSearchLabel = styled.label`
  position: absolute;
  top: -22px;
  display: block;
  font-size: 14px;
  line-height: 1.1;
  text-align: left;
  color: #000;
  font-family: "Raleway";
`

export const DropdownSubLabel = styled.div`
  font-size: 14px;
  line-height: 1.1;
  text-align: left;
  color: #000;
  font-family: "Raleway";
`

export const InputContainer = styled.div`
  position: relative;
  margin: 6px 0;

  fieldset {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    transition: padding-left 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      border-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      border-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    border: solid 1px #eee;
    pointer-events: none;

    &.textbox__fieldset {
      bottom: 6px;
    }
  }

  fieldset.active {
    border: 2px solid #3f51b5;
  }

  fieldset.error {
    border: 1px solid red;
  }

  fieldset.success {
    border: 1px solid green;
  }

  input,
  textarea {
    border: solid 1px #eee;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    padding: 16px 14px;
    width: 100%;
    resize: none;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #eee;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.43;
      letter-spacing: normal;
    }
  }

  textarea {
    height: unset;
  }

  svg {
    height: 20px;
    width: 22px;
    position: absolute;
    top: 15px;
    right: 12px;
    cursor: pointer;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  svg.solid-close {
    height: 16px;
    margin-right: 25px;
    margin-top: 3px;
  }
`

export const CharCount = styled.div`
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: #000;
  font-style: normal;
  font-weight: 400;
  font-family: Roboto;
  margin: 5px 0;
`

export const InputErrorContainer = styled.div`
  display: inline-block;
  margin: 0 12px;
  visibility: ${props => (props.error ? "visible" : "hidden")};
  transition: padding-left 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    border-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    border-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  svg {
    height: 13px;
    width: 13px;
  }
`

export const ErrorLabel = styled.label`
  display: inline-block;
  font-size: 14px;
  line-height: 1.1;
  text-align: left;
  color: #000;
  font-family: "Raleway";
  margin: 0 12px;
`
