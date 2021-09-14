import React from "react"
import PropTypes from "prop-types"
import {
  viewWrapperVariants,
  searchWrapperVariants,
  searchWrapperChildrenVariants,
} from "../components/Wrapper/WrapperAnimationVariants"
import Wrapper from "../components/Wrapper/Wrapper"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import Logo from "../components/Logo/Logo"
import Form from "../components/Form/Form"
import colors from "../helpers/colors.contants"
import statuses from "../helpers/statuses.contants"
import classes from "./SearchingView.module.scss"

const SearchingView = ({ onSetUser, status, error }) => {
  const handleFormSubmit = name => {
    onSetUser(name)
  }

  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={viewWrapperVariants}
      className={classes.ViewWrapper}
      color={colors.BLACK}
    >
      <Wrapper variants={searchWrapperVariants} className={classes.SearchWrapper} color={colors.WHITE}>
        <Logo variants={searchWrapperChildrenVariants} />
        {status !== statuses.PENDING && (
          <Form
            color={colors.BLACK}
            error={error}
            onSubmit={handleFormSubmit}
            variants={searchWrapperChildrenVariants}
          />
        )}
        {status === statuses.PENDING && <LoadingSpinner />}
      </Wrapper>
    </Wrapper>
  )
}

SearchingView.propTypes = {
  onSetUser: PropTypes.func.isRequired,
  status: PropTypes.string,
  error: PropTypes.shape({
    error: PropTypes.bool,
    message: PropTypes.string,
  }),
}

SearchingView.defaultProps = {
  status: statuses.IDLE,
  error: null,
}

export default SearchingView
