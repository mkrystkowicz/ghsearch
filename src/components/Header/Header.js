import React, { useState } from "react"
import PropTypes from "prop-types"
import AdditionalInfo from "./HeaderAdditionalInfo"
import colors from "../../helpers/colors.contants"
import UserInfo from "../UserInfo/UserInfo"
import Button from "../Form/Button"
import classes from "./Header.module.scss"

const Header = ({
  userData: { avatarUrl, name, hireable, location, email, company, publicRepos, following, followers, twitterUsername },
}) => {
  const [isActive, setIsActive] = useState(true)

  const handleHeaderToggle = () => {
    setIsActive(prevState => !prevState)
  }

  return (
    <header className={classes.Header}>
      <UserInfo avatarUrl={avatarUrl} username={name} hireable={hireable} />
      <Button onClick={handleHeaderToggle} color={colors.WHITE} icon="fas fa-caret-down" />
      {isActive && (
        <AdditionalInfo
          location={location}
          email={email}
          company={company}
          repos={publicRepos}
          following={following}
          followers={followers}
          twitter={twitterUsername}
        />
      )}
    </header>
  )
}

Header.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Header
