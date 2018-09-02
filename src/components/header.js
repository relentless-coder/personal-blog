import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.sass'
import Mail from '../assets/mail.svg'
import Github from '../assets/github.svg'

const Header = ({ siteTitle }) => (
  <nav className={styles.navigation}>
    <div className={styles.logoBox}>
      <h1 className={styles.logo}><Link to="/" className={styles.anchor__home}>Ayush Bahuguna</Link></h1>
    </div>
    <div className={styles.socialBox}>
      <a href="mailto:social@ayushbahuguna.com" target="_blank"><Mail className={styles.socialIcon} /></a>
      <a href="https://github.com/relentless-coder" target="_blank"><Github className={styles.socialIcon} /></a>
    </div>
  </nav>
)

export default Header
