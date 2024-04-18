import React from 'react'
import styles from './Header.module.scss'
import Link from './Link'

export default function Header() {
  return (
    <header className={styles.header}>
        <img src="./assets/shared/logo.svg" alt="" />
        <div className={styles.line}/>
        <nav>
            <Link to='home' n='00' value='Home'/>
            <Link to='destination' n='01' value='Destination'/>
            <Link to='crew' n='02' value='Crew'/>
            <Link to='technology' n='03' value='Technology'/>
        </nav>
    </header>
  )
}
