import React from "react"
import classes from "./SearchButton.module.scss"

const SearchButton = () => {
  return (
    <button className={classes.SearchButton} type="button">
      <i className="fas fa-search" />
    </button>
  )
}

export default SearchButton
