import React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import ReposItem from "./ReposItem"
import getCamelledJSON from "../../helpers/getCamelledJSON"
import classes from "./ReposList.module.scss"
import statuses from "../../helpers/statuses.contants"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 80,
    },
  },
}

const ReposList = ({ repos, error, status }) => {
  const camelledRepos = repos.map((_, i) => getCamelledJSON(repos[i]))

  return (
    <>
      {camelledRepos && (
        <motion.ul initial="hidden" animate="visible" variants={container} className={classes.ReposList}>
          {camelledRepos.map(({ name, description, language, id }) => (
            <ReposItem
              variants={item}
              status={status}
              error={error}
              key={id}
              name={name}
              description={description}
              language={language}
            />
          ))}
        </motion.ul>
      )}
    </>
  )
}

ReposList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.objectOf(PropTypes.any),
  status: PropTypes.string,
}

ReposList.defaultProps = {
  repos: [],
  error: { error: false, message: "" },
  status: statuses.IDLE,
}

export default ReposList
