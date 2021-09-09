import React from "react"
import Avatar from "../Avatar/Avatar"
import classes from "./UserInfo.module.scss"

const UserInfo = () => {
  return (
    <div className={classes.UserInfo}>
      <Avatar />
      <p className={classes.Username}>mkrystkowicz</p>
    </div>
  )
}

export default UserInfo
