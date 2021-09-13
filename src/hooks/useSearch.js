import axios from "axios"
import { useState, useEffect, useRef } from "react"
import statuses from "../helpers/statuses.contants"

const useSearch = url => {
  const [status, setStatus] = useState(statuses.IDLE)
  const [value, setValue] = useState(null)
  const [error, setError] = useState({ error: false, message: "" })
  const initialRender = useRef(true)

  useEffect(() => {
    setError({
      error: false,
      message: "",
    })
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    setStatus(statuses.PENDING)
    axios
      .get(url)
      .then(res => res.data)
      .then(data => {
        setStatus(statuses.SUCCESS)
        setValue(data)
      })
      .catch(err => {
        setError({
          error: true,
          message: err.message,
        })
        setStatus(statuses.ERROR)
      })
  }, [url])

  return { status, value, error }
}

export default useSearch
