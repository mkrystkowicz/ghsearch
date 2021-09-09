import React from "react"
import PropTypes from "prop-types"
import Avatar from "../Avatar/Avatar"
import classes from "./UserInfo.module.scss"

const UserInfo = ({ username, hireable, avatarUrl }) => {
  let usernameText

  if (hireable) {
    usernameText = <p className={[classes.Username, classes.ForHire].join(" ")}>{username}</p>
  } else {
    usernameText = <p className={classes.Username}>{username}</p>
  }

  return (
    <div className={classes.UserInfo}>
      <Avatar avatarUrl={avatarUrl} username={username} />
      {usernameText}
    </div>
  )
}
UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  hireable: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string.isRequired,
}

export default UserInfo
