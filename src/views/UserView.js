import React from "react"
import _ from "lodash"
import PropTypes from "prop-types"
import {
  headerWrapperVariants,
  viewWrapperVariants,
  headerDesktopWrapperVariants,
} from "../components/Wrapper/WrapperAnimationVariants"
import Header from "../components/Header/Header"
import Wrapper from "../components/Wrapper/Wrapper"
import colors from "../helpers/colors.contants"
import classes from "./UserView.module.scss"
import isMobile from "../helpers/isMobile"

// eslint-disable-next-line
// const userInfo = {
// avatar_url: "https://avatars.githubusercontent.com/u/63785812?v=4",
// bio: null,
// blog: "",
// company: null,
// created_at: "2020-04-16T10:20:22Z",
// email: null,
// events_url: "https://api.github.com/users/mkrystkowicz/events{/privacy}",
// followers: 0,
// followers_url: "https://api.github.com/users/mkrystkowicz/followers",
// following: 1,
// following_url: "https://api.github.com/users/mkrystkowicz/following{/other_user}",
// gists_url: "https://api.github.com/users/mkrystkowicz/gists{/gist_id}",
// gravatar_id: "",
// hireable: true,
// html_url: "https://github.com/mkrystkowicz",
// id: 63785812,
// location: "Ostrołęka, Poland",
// login: "mkrystkowicz",
// name: "mkrystkowicz.",
// node_id: "MDQ6VXNlcjYzNzg1ODEy",
// organizations_url: "https://api.github.com/users/mkrystkowicz/orgs",
// public_gists: 0,
// public_repos: 8,
// received_events_url: "https://api.github.com/users/mkrystkowicz/received_events",
// repos_url: "https://api.github.com/users/mkrystkowicz/repos",
// site_admin: false,
// starred_url: "https://api.github.com/users/mkrystkowicz/starred{/owner}{/repo}",
// subscriptions_url: "https://api.github.com/users/mkrystkowicz/subscriptions",
// twitter_username: null,
// type: "User",
// updated_at: "2021-09-06T14:50:18Z",
// url: "https://api.github.com/users/mkrystkowicz",
// }

const UserView = ({ onAddUser, userInfo }) => {
  const mobile = isMobile()
  const userInfoCamelled = _.mapKeys(userInfo, (v, k) => _.camelCase(k))

  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={viewWrapperVariants}
      className={classes.ViewWrapper}
      color={colors.WHITE}
    >
      <Wrapper
        className={classes.HeaderWrapper}
        variants={mobile ? headerWrapperVariants : headerDesktopWrapperVariants}
        color={colors.BLACK}
      >
        <Header onAddUser={onAddUser} userData={userInfoCamelled} />
      </Wrapper>
    </Wrapper>
  )
}

UserView.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.any),
  onAddUser: PropTypes.func.isRequired,
}

UserView.defaultProps = {
  userInfo: {},
}

export default UserView
