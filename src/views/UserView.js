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
import useMobile from "../hooks/useMobile"

const UserView = ({ onSetUser, userInfo }) => {
  const mobile = useMobile()
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
        key={mobile}
        className={classes.HeaderWrapper}
        initial="hidden"
        animate="visible"
        variants={mobile ? headerWrapperVariants : headerDesktopWrapperVariants}
        color={colors.BLACK}
      >
        <Header onSetUser={onSetUser} userData={userInfoCamelled} />
      </Wrapper>
    </Wrapper>
  )
}

UserView.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.any),
  onSetUser: PropTypes.func.isRequired,
  // mobile: PropTypes.bool.isRequired,
}

UserView.defaultProps = {
  userInfo: null,
}

export default UserView
