import React,{useRef} from 'react'
import Header, { HeaderMiddleItems } from '../../components/header/Header'
import styles from './Home.module.css'
import { useMediaQuery } from 'react-responsive'
import LeftSide from '../../components/home/left/left-side'
import { useSelector } from 'react-redux'

const Home = () => {

  const user = useSelector((state) => state.auth.userData)

  const max_810px = useMediaQuery({
    query: "(max-width: 810px)",
  })

  return (
    <div>
      <Header />
      { max_810px && <div className={styles.header_middle_wrap} > <HeaderMiddleItems /></div>}
      <LeftSide user={user} />
    </div>
  )
}

export default Home