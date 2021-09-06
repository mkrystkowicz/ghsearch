import React from "react"
import PropTypes from "prop-types"
import classes from "./Input.module.scss"

const Input = ({ placeholder }) => {
  return <input type="text" className={classes.Input} placeholder={placeholder} autoComplete="off" />
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

export default Input
