import React, { useState, useEffect } from "react"
import {
  InputLabel,
  InputContainer,
  TextFieldContainer,
  InputErrorContainer,
  ErrorLabel,
  CharCount,
} from "./inputStyles"

// interface TextInputProps {
//     containerClassName?: string;
//     deleteValueHandler?: () => void;
//     defaultValue?: string;
//     disabled?: boolean;
//     errorMsg?: string;
//     id: string;
//     inputProps?: any;
//     label?: any;
//     maxLength?: any;
//     name: string;
//     onChange?: any;
//     placeholder?: string;
//     readOnly?: boolean;
//     success?: boolean;
//     type?: string;
//     value?: string;
// }

const TextInput = props => {
  const [focusing, setFocusing] = useState(false)
  const [error, setError] = useState(false)
  const [valueLength, setValueLength] = useState(0)
  const {
    containerClassName,
    deleteValueHandler,
    errorMsg,
    label,
    onChange,
    success,
    type = "text",
    ...inputProps
  } = props

  /**
   * Set value length
   */
  useEffect(() => {
    if (inputProps.defaultValue) {
      setValueLength(inputProps.defaultValue.length)
    }
    if (inputProps.value) {
      setValueLength(inputProps.value.length)
    }
  }, [])

  /**
   * Sets the state of this input instance to `focusing: true`
   */
  function handleOnFocus() {
    setFocusing(true)
  }

  /**
   * Sets the state of this input instance to `focusing: false`
   */
  function handleOnBlur() {
    setFocusing(false)
  }

  /**
   * Handles border styling on the input. Only has 3 states for now: normal/default,
   * error, and focused.
   */
  function handleInputBorder() {
    if (success) {
      return "success"
    } else if (error) {
      return "error"
    } else if (focusing) {
      return "active"
    } else {
      return ""
    }
  }

  /**
   * Passes the event to parent and handles error state.
   * @param event user input recorded in this input element
   */
  function handleOnChange(event) {
    if (onChange) {
      onChange(event)
    }

    setValueLength(event.currentTarget.value.length)
  }

  return (
    <TextFieldContainer className={containerClassName}>
      {label && <InputLabel htmlFor={inputProps.id}>{label}</InputLabel>}

      <InputContainer>
        <fieldset aria-hidden="true" className={handleInputBorder()} />
        <input
          type={type}
          id={inputProps.id}
          name={inputProps.name}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          {...inputProps}
          autoComplete="off"
          data-lpignore={true}
        />
      </InputContainer>

      {inputProps.maxLength ? (
        <CharCount>{`${valueLength}/${inputProps.maxLength}`}</CharCount>
      ) : (
        ""
      )}
    </TextFieldContainer>
  )
}

export default TextInput
