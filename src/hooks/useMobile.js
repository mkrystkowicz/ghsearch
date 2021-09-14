import { useState, useEffect } from "react"
import _ from "lodash"
import isMobile from "../helpers/isMobile"

const useMobile = () => {
  const [mobile, setMobile] = useState()

  useEffect(() => {
    const checkIfMobile = () => setMobile(isMobile)
    window.addEventListener("resize", _.debounce(checkIfMobile), 300)
    checkIfMobile()

    return () => {
      window.removeEventListener("resize", _.debounce(checkIfMobile), 300)
    }
  }, [])
  console.log(mobile)

  return mobile
}

export default useMobile
