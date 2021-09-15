import React from "react"
import PropTypes from "prop-types"
import ReposItem from "./ReposItem"
import getCamelledJSON from "../../helpers/getCamelledJSON"
import classes from "./ReposList.module.scss"

const ReposList = ({ repos }) => {
  const camelledRepos = repos.map((repo, i) => getCamelledJSON(repos[i]))
  console.log(camelledRepos)

  return (
    <ul className={classes.ReposList}>
      {camelledRepos.map(({ name, description, language, id }) => (
        <ReposItem key={id} name={name} description={description} language={language} />
      ))}
    </ul>
  )
}

ReposList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object),
}

ReposList.defaultProps = {
  repos: [],
}

export default ReposList
