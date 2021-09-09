import React, { useState } from "react"
import PropTypes from "prop-types"
import colors from "../../helpers/colors.contants"
import UserInfo from "../UserInfo/UserInfo"
import Button from "../Form/Button"
import classes from "./Header.module.scss"

const Header = ({ userData: { avatarUrl, name, hireable } }) => {
  const [isActive, setIsActive] = useState(false)
  // eslint-disable-next-line
  console.log(isActive)
  return (
    <header className={classes.Header}>
      <UserInfo avatarUrl={avatarUrl} username={name} hireable={hireable} />
      <Button onClick={() => setIsActive(prevState => !prevState)} color={colors.WHITE} icon="fas fa-caret-down" />
    </header>
  )
}

Header.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Header
