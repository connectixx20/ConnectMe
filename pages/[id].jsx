import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { User } from "../src/components"

const Detail = () => {
  const router = useRouter()
  const { id } = router.query
  const state = useSelector((state) => state.AuthRedu)
  const authData = state?.authData
  

  useEffect(()=>{

  },[authData])
  return (
    <User edit={false} />
  )
}

export default Detail