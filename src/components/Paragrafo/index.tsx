import React from 'react'
import styles from './Paragrafo.module.scss'

export default function Paragrafo({children}: {children: string}) {
  return (
    <p className={styles.paragrafo}>
        {children}
    </p>
  )
}
