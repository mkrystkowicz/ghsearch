import React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import classes from "./Header.module.scss"

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const HeaderAdditionalInfo = ({ location, email, company, repos, following, followers, twitter }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={headerVariants} className={classes.HeaderExpanded}>
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
          <p>Following</p>
        </div>
        <div className={classes.ItemContainer}>
          <span>{followers}</span>
          <p>Followers</p>
        </div>
      </div>
    </motion.div>
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
