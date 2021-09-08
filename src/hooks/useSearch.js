import { useState, useEffect } from "react"
import axios from "axios"
import statuses from "../helpers/statuses.contants"

const useSearch = url => {
  const [status, setStatus] = useState(statuses.IDLE)
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setStatus(statuses.PENDING)
    axios
      .get(url)
      .then(res => res.data)
      .then(data => {
        setStatus(statuses.SUCCESS)
        setValue(data)
      })
      .catch(err => {
        setStatus(statuses.ERROR)
        setError({
          error: true,
          errorMessage: err.message,
        })
      })
  }, [url])

  return { status, value, error }
}

export default useSearch
