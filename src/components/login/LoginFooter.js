import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../pages/login/login.module.css'

const LoginFooter = () => {
  return (
    <footer className={styles.login_footer}>
          <div className={styles.login_footer_wrap}>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}> English (UK) </Link>
            <Link to={'/'}> മലയാളം </Link>
            <Link to={'/'}> தமிழ்</Link>
            <Link to={'/'}> ಕನ್ನಡ </Link>
            <Link to={'/'}> हिन्दी</Link>
            <Link to={'/'}> اردو </Link>
            <Link to={'/'}> বাংলা </Link>
            <Link to={'/'}> తెలుగు</Link>
            <Link to={'/'}> Español </Link>
            <Link to={'/'}> Português (Brasil) </Link>
            <Link to={'/'}> Français (France)</Link>
            <Link to={'/'} className={styles.footer_square}>
              <i className="plus_icon"></i>
            </Link>
          </div>
          <div className={styles.footer_splitter}></div>
          <div className={styles.login_footer_wrap}>
          <Link to={'/'}>Sign up</Link>
          <Link to={'/'}>Login</Link>
          <Link to={'/'}>Messenger</Link>
          <Link to={'/'}>Facebook Lite</Link>
          <Link to={'/'}>Watch</Link>
          <Link to={'/'}>Places</Link>
          <Link to={'/'}> Games</Link>
          <Link to={'/'}>Marketplace</Link>
          <Link to={'/'}>Meta</Link>
          <Link to={'/'}>PayMeta</Link>
          <Link to={'/'}>StoreMeta</Link>
          <Link to={'/'}>QuestInstagramFundraisersServicesVoting</Link>
          <Link to={'/'}>Information</Link>
          <Link to={'/'}>CentrePrivacy</Link>
          <Link to={'/'}>PolicyPrivacy</Link>
          <Link to={'/'}>Centre</Link>
          <Link to={'/'}>Groups</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Create</Link>
          <Link to={'/'}>adCreate</Link>
          <Link to={'/'}>PageDevelopers</Link>
          <Link to={'/'}>Careers</Link>
          <Link to={'/'}>Cookies</Link>
          <Link to={'/'}>AdChoices
          <i className="adChoices_icon"></i>
          </Link>
          <Link to={'/'}>Terms</Link>
          <Link to={'/'}>Help</Link>
          <Link to={'/'}>Contact uploading and non-usersSettings</Link>
          <Link to={'/'}>Activity log</Link>
          </div>
          <div className={styles.login_footer_wrap}>
            <Link to={'/'} style={{fontSize: '12px', marginTop: '10px'}} >This is a facebook clone created by Adwaith , vyaveta © 2023</Link>
          </div>
        </footer>
  )
}

export default LoginFooter