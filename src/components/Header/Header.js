import React from "react"
import colors from "../../helpers/colors.contants"
import UserInfo from "../UserInfo/UserInfo"
import Button from "../Form/Button"
import classes from "./Header.module.scss"

const Header = () => {
  return (
    <header className={classes.Header}>
      <UserInfo />
      <Button color={colors.WHITE} icon="fas fa-caret-down" />
    </header>
  )
}

export default Header
