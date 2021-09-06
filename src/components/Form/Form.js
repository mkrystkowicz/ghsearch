import React, { useState } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Input from "./Input"
import SearchButton from "./SearchButton"
import classes from "./Form.module.scss"

const Form = ({ onSubmit, ...props }) => {
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
      <Input onInputChange={handleInputChange} value={username} placeholder="Github name" />
      <SearchButton />
    </motion.form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Form
