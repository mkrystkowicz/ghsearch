import React from "react"
import PropTypes from "prop-types"
import classes from "./Button.module.scss"

const Button = ({ icon }) => {
  return (
    <button className={classes.Button} type="submit">
      <i className={icon} />
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Button
