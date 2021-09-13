import { useState, useEffect } from "react"
import isMobile from "../helpers/isMobile"

const useMobile = () => {
  const [mobile, setMobile] = useState()

  useEffect(() => {
    const checkIfMobile = () => setMobile(isMobile)
    window.addEventListener("resize", checkIfMobile)
    checkIfMobile()

    return () => {
      window.addEventListener("resize", checkIfMobile)
    }
  }, [])

  return mobile
}

export default useMobile
