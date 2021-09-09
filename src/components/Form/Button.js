import React from "react"
import PropTypes from "prop-types"
import colors from "../../helpers/colors.contants"
import classes from "./Button.module.scss"

const Button = ({ icon, color }) => {
  let combinedClasses = [classes.Button]

  if (color === colors.BLACK) {
    combinedClasses = [...combinedClasses, classes.Black].join(" ")
  } else if (color === colors.WHITE) {
    combinedClasses = [...combinedClasses, classes.White].join(" ")
  }

  return (
    <button className={combinedClasses} type="submit">
      <i className={icon} />
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Button
