import React from "react"
import PropTypes from "prop-types"
import classes from "./Input.module.scss"

const Input = ({ placeholder, onInputChange }) => {
  return (
    <input
      onChange={onInputChange}
      type="text"
      className={classes.Input}
      placeholder={placeholder}
      autoComplete="off"
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
}

export default Input
