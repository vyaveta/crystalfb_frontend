import React,{useRef, useState} from 'react'
import Header, { HeaderMiddleItems } from '../../components/header/Header'
import styles from './Home.module.css'
import { useMediaQuery } from 'react-responsive'
import LeftSide from '../../components/home/left/left-side'
import { useSelector } from 'react-redux'
import Stories from '../../components/home/stories/stories'
import CreatePost from '../../components/posts/create-post'
import ActivateForm from './components/activate-form'

const Home = ({activate}) => {

  const user = useSelector((state) => state.auth.userData)
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const max_810px = useMediaQuery({
    query: "(max-width: 810px)",
  })

  const min_520px = useMediaQuery({
    query: "(min-width: 520px)",
  })

  return (
    <div className={styles.home} >
      { success && <ActivateForm type="success" header="Email is now verified!" text={success} loading={isLoading} /> }
      <Header />
      { max_810px && <div className={styles.header_middle_wrap} > <HeaderMiddleItems /></div>}
      { min_520px && <LeftSide user={user} /> }
      <div className={styles.home_middle} >
        <Stories />
        <CreatePost user={user} />
      </div>
    </div>
  )
}

export default Home