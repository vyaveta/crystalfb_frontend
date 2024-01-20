import React,{useEffect, useState} from 'react'
import Header, { HeaderMiddleItems } from '../../components/header/Header'
import styles from './Home.module.css'
import { useMediaQuery } from 'react-responsive'
import LeftSide from '../../components/home/left/left-side'
import { useDispatch, useSelector } from 'react-redux'
import Stories from '../../components/home/stories/stories'
import CreatePost from '../../components/posts/create-post'
import ActivateForm from './components/activate-form'
import { useNavigate, useParams } from 'react-router-dom'
import { createConfig } from '../../api/common/config'
import { userEmailActivateRoute } from '../../routes/userRoutes'
import { setHeaders } from '../../api/common/setHeaders'
import { asyncFunction } from '../../api/common/asyncFunction'
import { setVerified } from '../../redux/features/auth'
import SendVerification from './components/send-verification'
import CreatePostPopUp from '../../components/pop-ups/create-post'

const Home = ({activate}) => {

  const user = useSelector((state) => state.auth.userData)
  const [loading,setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [allowVerification, setAllowVerification] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const max_810px = useMediaQuery({
    query: "(max-width: 810px)",
  })

  const min_520px = useMediaQuery({
    query: "(min-width: 520px)",
  })

  const { token } = useParams()

  const activateAccount = async () => {
    try{
      setLoading(true)
      const config = createConfig(
        "post",
        userEmailActivateRoute,
        setHeaders("application/json",true),
        {token}
      )
      const response = await asyncFunction(config)
      console.log(response,'is the response')
      setSuccess(response?.message? response.message : "Email verified!")
      dispatch(setVerified(true))
    }catch(error){
      console.log(error)
      setError(error?.response?.data?.message || "something went wrong")
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if(token) activateAccount()
  },[])

  const onClose = () => {
    setError(false)
    setSuccess(false)
    navigate("/")
  }

  return (
    <div className={styles.home} >
      { success && <ActivateForm type="success" header="Email is now verified!" text={success} loading={loading}  onClose={onClose} />  }
      { error && <ActivateForm type="error" header="Email verification failed" text={error} loading={loading} onClose={onClose} />  }
      <Header />
      { max_810px && <div className={styles.header_middle_wrap} > <HeaderMiddleItems /></div>}
      { min_520px && <LeftSide user={user} /> }

      <div className={styles.home_middle} >
        <Stories />
        {/* { !user?.verified && allowVerification && <SendVerification dispatch={dispatch} setAllowVerification={setAllowVerification} /> } */}
        <CreatePost user={user} />
         <CreatePostPopUp user={user} /> 
      </div>
    </div>
  )
}

export default Home