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
  userInfo: null,
}

export default UserView
