import React, { useState } from "react"
import SearchingView from "./views/SearchingView"
import useSearch from "./hooks/useSearch"

function App() {
  // const [isSearching, setIsSearching] = useState(true)
  const [username, setUsername] = useState("")
  // eslint-disable-next-line
  const { status, value, error } = useSearch(`https://api.github.com/users/${username}`)

  return <SearchingView onSetUser={setUsername} />
}

export default App
