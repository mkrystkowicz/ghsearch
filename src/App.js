import React from "react"
import axios from "axios"
import SearchingView from "./views/SearchingView"

function App() {
  // const [isSearching, setIsSearching] = useState(true)

  const getData = name => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then(res => res.data)
      .then(data => console.log(data))
  }

  return <SearchingView onGetData={getData} />
}

export default App
