import React from "react"
// import PropTypes from "prop-types"
import classes from "./Avatar.module.scss"

const Avatar = () => {
  return (
    <div className={classes.Avatar}>
      <img src="https://avatars.githubusercontent.com/u/63785812?v=4" alt="img" />
    </div>
  )
}

// Avatar.propTypes = {
//     avatarUrl: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
// }

export default Avatar

// "https://avatars.githubusercontent.com/u/63785812?v=4"
// const Avatar = ({ avatarUrl, username }) => {
//   return (
//     <div className={classes.Avatar}>
//       <img src={avatarUrl} alt={`${username}'s avatar`} />
//       <img src={avatarUrl} alt={`${username}'s avatar`} />
//     </div>
//   )
// }
