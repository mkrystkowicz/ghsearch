import React from "react"
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
import useMobile from "../hooks/useMobile"
import getCamelledJSON from "../helpers/getCamelledJSON"
import ReposList from "../components/Repos/ReposList"
import DUMMY_DATA from "../helpers/reposDummyData"

const UserView = ({ onSetUser, userInfo }) => {
  const mobile = useMobile()
  const userInfoCamelled = getCamelledJSON(userInfo)

  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={viewWrapperVariants}
      className={classes.ViewWrapper}
      color={colors.WHITE}
    >
      <Wrapper
        key={mobile}
        className={classes.HeaderWrapper}
        initial="hidden"
        animate="visible"
        variants={mobile ? headerWrapperVariants : headerDesktopWrapperVariants}
        color={colors.BLACK}
      >
        <Header onSetUser={onSetUser} userData={userInfoCamelled} />
      </Wrapper>
      <ReposList repos={DUMMY_DATA} />
    </Wrapper>
  )
}

UserView.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.any),
  onSetUser: PropTypes.func.isRequired,
}

UserView.defaultProps = {
  userInfo: null,
}

export default UserView
