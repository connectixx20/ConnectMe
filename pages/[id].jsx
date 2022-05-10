import { useRouter } from "next/router"
import { useEffect } from "react"
import { v4 as uuid } from 'uuid'
import Head from "next/head"
import { useSelector } from "react-redux"
import { User } from "../src/components"
import { useDispatch } from "react-redux"



import cookie from "cookie"
import jsCookie from "js-cookie"
import axios from "axios"

const Detail = ({profile}) => {
  const router = useRouter()
  const { id } = router.query
  const state = useSelector((state) => state)
  const authData = state?.AuthRedu.authData
  const profileData = state?.profileReducer && state?.profileReducer?.profile?.data
  const dispatch = useDispatch()

  const uniqueIdForVisitor = uuid()


  useEffect(() => {
    const is_cookie_exist = localStorage.getItem("unique")
 
    if (is_cookie_exist === null) {
      jsCookie.setItem("unique",uniqueIdForVisitor)
      localStorage.setItem("unique", uniqueIdForVisitor)
    }
  }, [authData])

  useEffect(() => {

  }, [dispatch, router])
  
  console.log({profile})
  
  return (
    <>
        {/* <Head>
          <meta property="og:title" content="hello World" key="ogTitlw" />
          <meta property="og:type" content="profile.image" key="ogType" />
          <meta property="og:site_name" content="ConnectMe" key="ogSitename" />
          <meta property="og:url" content={"https://connectme.co.in/"} key="ogUrl" />
          <meta property="og:image" content={profileData?.profileImg} key="ogimage" />
          <meta property="og:desc" content="Why to be King When You can be god" key="ogdesc" />
        </Head> */}
      <User edit={false} existing={profile?.data} />
    </>
  )
}

export default Detail


export  async function getServerSideProps(context){
  const query=context.query
  
  const {data,status,statusText}=await axios.post(`https://connectmev2.herokuapp.com/profile/search/${query?.id}?authValue=tfalse&unique=${"skjdjj-sjjjd"}`,{userId:null})
  
  return {
    props:{
      profile: data
    }
  }
}