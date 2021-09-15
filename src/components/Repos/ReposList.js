import React from "react"
import PropTypes from "prop-types"
import ReposItem from "./ReposItem"
import getCamelledJSON from "../../helpers/getCamelledJSON"
import classes from "./ReposList.module.scss"
import statuses from "../../helpers/statuses.contants"

const ReposList = ({ repos, error, status }) => {
  const camelledRepos = repos.map((repo, i) => getCamelledJSON(repos[i]))

  return (
    <ul className={classes.ReposList}>
      {camelledRepos.map(({ name, description, language, id }) => (
        <ReposItem status={status} error={error} key={id} name={name} description={description} language={language} />
      ))}
    </ul>
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
