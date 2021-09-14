import React, { useState } from "react"
import SearchingView from "./views/SearchingView"
import UserView from "./views/UserView"
import useSearch from "./hooks/useSearch"
import statuses from "./helpers/statuses.contants"

function App() {
  const [isSearching, setIsSearching] = useState(true)
  const [username, setUsername] = useState("")
  const { status, value, error } = useSearch(`https://api.github.com/users/${username}`)

  return (
    <>
      {status !== statuses.SUCCESS && (
        <SearchingView setIsSearching={setIsSearching} onSetUser={setUsername} status={status} error={error} />
      )}
      {status === statuses.SUCCESS && !isSearching && <UserView onSetUser={setUsername} userInfo={value} />}
    </>
  )
}

export default App
