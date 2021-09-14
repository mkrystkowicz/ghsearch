import React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import normalizeHttpAddress from "../../helpers/normalizeHttp"
import checkIfQuoted from "../../helpers/checkQuoted"
import classes from "./Header.module.scss"

const TWITTER_URL = `twitter.com/`

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const HeaderAdditionalInfo = ({
  location,
  email,
  company,
  repos,
  following,
  followers,
  twitter: twitterName,
  blog,
  bio,
}) => {
  const fullTwitterUrl = TWITTER_URL + twitterName
  const normalizedTwitterAddress = normalizeHttpAddress(fullTwitterUrl)
  const normalizedBlogAddress = normalizeHttpAddress(blog)
  const getQuotedBio = () => {
    if (checkIfQuoted(bio)) return <p className={classes.Bio}>{bio}</p>

    return <p className={classes.Bio}>{`"${bio}"`}</p>
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={headerVariants} className={classes.HeaderExpanded}>
      <div className={classes.VerticalItems}>
        {location && <p>Location: {location}</p>}
        {email && <p>E-mail: {email}</p>}
        {company && <p>Company: {company}</p>}
        {twitterName && (
          <p>
            {" "}
            Twitter:{" "}
            <a href={normalizedTwitterAddress} rel="noreferrer" target="_blank" className={classes.Link}>
              {" "}
              @{twitterName}
            </a>{" "}
          </p>
        )}
        {blog && (
          <p>
            <a href={normalizedBlogAddress} rel="noreferrer" target="_blank" className={classes.Link}>
              {blog}
            </a>
          </p>
        )}
        {bio && getQuotedBio()}
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
  blog: PropTypes.string,
  bio: PropTypes.string,
}

HeaderAdditionalInfo.defaultProps = {
  location: "",
  email: "",
  company: "",
  twitter: "",
  repos: 0,
  following: 0,
  followers: 0,
  blog: "",
  bio: "",
}

export default HeaderAdditionalInfo
