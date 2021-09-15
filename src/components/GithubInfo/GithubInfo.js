import React from "react"
import PropTypes from "prop-types"
import classes from "./GithubInfo.module.scss"
import LogoWhite from "../../assets/GitHub-Mark-Light-120px-plus.png"
import LogoDark from "../../assets/GitHub-Mark-120px-plus.png"
import colors from "../../helpers/colors.contants"

const GithubInfo = ({ logoColor }) => {
  let logo
  if (logoColor === colors.BLACK) {
    logo = LogoDark
  } else {
    logo = LogoWhite
  }

  return (
    <div className={classes.Info}>
      <h6 className={classes.Text}>Powered by Github.</h6>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <img className={classes.Logo} src={logo} alt="Github's logo" />
      </a>
    </div>
  )
}

GithubInfo.propTypes = {
  logoColor: PropTypes.string.isRequired,
}

export default GithubInfo
