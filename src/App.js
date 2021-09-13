import React, { useState } from "react"
import SearchingView from "./views/SearchingView"
import UserView from "./views/UserView"
import useSearch from "./hooks/useSearch"
import statuses from "./helpers/statuses.contants"
import useMobile from "./hooks/useMobile"

function App() {
  const mobile = useMobile()
  const [username, setUsername] = useState("")
  const { status, value, error } = useSearch(`https://api.github.com/users/${username}`)

  return (
    <>
      {status !== statuses.SUCCESS && <SearchingView onSetUser={setUsername} status={status} error={error} />}
      {status === statuses.SUCCESS && <UserView mobile={mobile} onSetUser={setUsername} userInfo={value} />}
    </>
  )
}

export default App
