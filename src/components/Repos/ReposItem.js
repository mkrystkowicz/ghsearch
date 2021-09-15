import React from "react"
import PropTypes from "prop-types"
import Wrapper from "../Wrapper/Wrapper"
import colors from "../../helpers/colors.contants"
import classes from "./ReposItem.module.scss"

const ReposItem = ({ name, description, language }) => {
  return (
    <Wrapper className={classes.ItemWrapper} color={colors.WHITE}>
      <li className={classes.Item}>
        <h4 className={classes.Name}>{name}</h4>
        <p className={classes.Description}>{description}</p>
        <span className={classes.Language}>{language}</span>
      </li>
    </Wrapper>
  )
}

ReposItem.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string,
  description: PropTypes.string,
}

ReposItem.defaultProps = {
  description: "",
  language: "",
}

export default ReposItem
