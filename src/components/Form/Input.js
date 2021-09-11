import React from "react"
import PropTypes from "prop-types"
import classes from "./Input.module.scss"
import colors from "../../helpers/colors.contants"

const Input = ({ color, placeholder, onInputChange }) => {
  let combinedClasses = [classes.Input]

  if (color === colors.BLACK) {
    combinedClasses = [...combinedClasses, classes.Black].join(" ")
  } else if (color === colors.WHITE) {
    combinedClasses = [...combinedClasses, classes.White].join(" ")
  }

  return (
    <input
      onChange={onInputChange}
      type="text"
      className={combinedClasses}
      placeholder={placeholder}
      autoComplete="off"
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}

export default Input
