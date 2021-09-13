import React, { useState } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Input from "./Input"
import Button from "./Button"
import classes from "./Form.module.scss"

const Form = ({ color, onSubmit, error, ...props }) => {
  const [username, setUsername] = useState()

  const handleFormSubmit = e => {
    e.preventDefault()
    onSubmit(username)
  }

  const handleInputChange = ({ target: { value } }) => {
    setUsername(value)
  }

  return (
    <motion.form onSubmit={handleFormSubmit} className={classes.Form} {...props}>
      <Input color={color} onInputChange={handleInputChange} value={username} placeholder="Github name" />
      <Button color={color} icon="fas fa-search" />
      {error.error === true && (
        <p className={classes.ErrorMessage}>
          {error.message ? error.message : "Something went wrong"}, please try again!
        </p>
      )}
    </motion.form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  error: PropTypes.shape({
    error: PropTypes.bool,
    message: PropTypes.string,
  }),
}

Form.defaultProps = {
  error: { error: false, message: "" },
}

export default Form
