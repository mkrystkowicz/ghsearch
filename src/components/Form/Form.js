import React from "react"
import { motion } from "framer-motion"
import Input from "./Input"
import SearchButton from "./SearchButton"
import classes from "./Form.module.scss"

const Form = ({ ...props }) => {
  return (
    <motion.form className={classes.Form} {...props}>
      <Input placeholder="Github name" />
      <SearchButton />
    </motion.form>
  )
}

export default Form
