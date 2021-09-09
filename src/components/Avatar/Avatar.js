import React from "react"
import PropTypes from "prop-types"
import classes from "./Avatar.module.scss"

const Avatar = ({ avatarUrl, username }) => {
  return (
    <div className={classes.Avatar}>
      <img src={avatarUrl} alt={`${username}'s avatar`} />
    </div>
  )
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default Avatar
