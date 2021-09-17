import React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import classes from "./ReposItem.module.scss"
import statuses from "../../helpers/statuses.contants"

const ReposItem = ({ name, description, language, error, status, variants }) => {
  const nameClass = status === statuses.ERROR && error ? classes.NameErrored : classes.Name

  return (
    <motion.li variants={variants} className={classes.Item}>
      <h4 className={nameClass}>{name}</h4>
      <p className={classes.Description}>{description}</p>
      <span className={classes.Language}>{language}</span>
    </motion.li>
  )
}

ReposItem.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.shape(PropTypes.any),
  status: PropTypes.string,
  variants: PropTypes.shape(PropTypes.any).isRequired,
}

ReposItem.defaultProps = {
  description: "",
  language: "",
  error: { error: false, message: "" },
  status: "",
}

export default ReposItem
