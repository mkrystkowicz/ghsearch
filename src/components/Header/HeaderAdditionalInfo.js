import React from "react"
import PropTypes from "prop-types"
import classes from "./Header.module.scss"

const HeaderAdditionalInfo = ({ location, email, company, repos, following, followers, twitter }) => {
  return (
    <div className={classes.HeaderExpanded}>
      <div className={classes.VerticalItems}>
        {location && <p>Location: {location}</p>}
        {email && <p>E-mail: {email}</p>}
        {company && <p>Company: {company}</p>}
        {twitter && <p>Twitter: @{twitter}</p>}
      </div>
      <div className={classes.HorizontalItems}>
        <div className={classes.ItemContainer}>
          <span>{repos}</span>
          <p>Repos</p>
        </div>
        <div className={classes.ItemContainer}>
          <span>{following}</span>
          <p>Following:</p>
        </div>
        <div className={classes.ItemContainer}>
          <span>{followers}</span>
          <p>Followers:</p>
        </div>
      </div>
    </div>
  )
}

HeaderAdditionalInfo.propTypes = {
  location: PropTypes.string,
  email: PropTypes.string,
  company: PropTypes.string,
  twitter: PropTypes.string,
  repos: PropTypes.number,
  following: PropTypes.number,
  followers: PropTypes.number,
}

HeaderAdditionalInfo.defaultProps = {
  location: "",
  email: "",
  company: "",
  twitter: "",
  repos: 0,
  following: 0,
  followers: 0,
}

export default HeaderAdditionalInfo
