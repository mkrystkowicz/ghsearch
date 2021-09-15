import React from "react"
import PropTypes from "prop-types"
import Wrapper from "../Wrapper/Wrapper"
import colors from "../../helpers/colors.contants"
import classes from "./ReposItem.module.scss"
import statuses from "../../helpers/statuses.contants"

const ReposItem = ({ name, description, language, error, status }) => {
  const nameClass = status === statuses.ERROR && error ? classes.NameErrored : classes.Name

  return (
    <Wrapper className={classes.ItemWrapper} color={colors.WHITE}>
      <li className={classes.Item}>
        <h4 className={nameClass}>{name}</h4>
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
  error: PropTypes.shape(PropTypes.any),
  status: PropTypes.string,
}

ReposItem.defaultProps = {
  description: "",
  language: "",
  error: { error: false, message: "" },
  status: "",
}

export default ReposItem
