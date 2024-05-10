import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './Header.module.scss'
import Link from './Link'

export default function Header() {
  const [imgNav, setImgNav] = useState('assets/shared/icon-hamburger.svg')
  const [navAtivo, setNavAtivo] = useState(false)

  function mudarImg() {
    if(imgNav === 'assets/shared/icon-hamburger.svg') {
      setImgNav('assets/shared/icon-close.svg')
      setNavAtivo(true)
    } else {
      setImgNav("assets/shared/icon-hamburger.svg")
      setNavAtivo(false)
    }
  }

  return (
    <header className={classNames({
      [styles.header]: true,
      [styles.headerOverflow]: navAtivo
    })}>
        <img src="./assets/shared/logo.svg" alt="" className={styles.logo}/>
        <div className={styles.line}/>
        <img src={imgNav} alt="" className={styles.mobileImgNav} onClick={() => mudarImg()}/>
        <nav 
          className={classNames({
            [styles.navAtivo]: navAtivo
          })}
          onClick={() => mudarImg()}
        >
            <Link to='home' n='00' value='Home'/>
            <Link to='destination' n='01' value='Destination'/>
            <Link to='crew' n='02' value='Crew'/>
            <Link to='technology' n='03' value='Technology'/>
        </nav>
    </header>
  )
}
