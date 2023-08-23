import React,{useRef} from 'react'
import Header, { HeaderMiddleItems } from '../../components/header/Header'
import styles from './Home.module.css'
import { useMediaQuery } from 'react-responsive'
import LeftSide from '../../components/home/left/left-side'
import { useSelector } from 'react-redux'
import Stories from '../../components/home/stories/stories'

const Home = () => {

  const user = useSelector((state) => state.auth.userData)

  const max_810px = useMediaQuery({
    query: "(max-width: 810px)",
  })

  return (
    <div className={styles.home} >
      <Header />
      { max_810px && <div className={styles.header_middle_wrap} > <HeaderMiddleItems /></div>}
      <LeftSide user={user} /> 
      <div className={styles.home_middle} >
        <Stories />
      </div>
    </div>
  )
}

export default Home