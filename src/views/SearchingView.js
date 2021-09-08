import React from "react"
import PropTypes from "prop-types"
import Wrapper from "../components/Wrapper/Wrapper"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import Logo from "../components/Logo/Logo"
import Form from "../components/Form/Form"
import colors from "../helpers/colors.contants"
import statuses from "../helpers/statuses.contants"
import classes from "./SearchingView.module.scss"

const ViewWrapperVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
}

const SearchWrapperVariants = {
  hidden: { y: "-50%", x: "-50%", opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3,
      when: "beforeChildren",
    },
  },
}

const SearchWrapperChildrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.3 },
  },
}

const SearchingView = ({ onSetUser, status, error }) => {
  const handleFormSubmit = name => {
    onSetUser(name)
  }

  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={ViewWrapperVariants}
      className={classes.ViewWrapper}
      color={colors.BLACK}
    >
      <Wrapper variants={SearchWrapperVariants} className={classes.SearchWrapper} color={colors.WHITE}>
        <Logo variants={SearchWrapperChildrenVariants} />
        {status !== statuses.PENDING && (
          <Form error={error} onSubmit={handleFormSubmit} variants={SearchWrapperChildrenVariants} />
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
