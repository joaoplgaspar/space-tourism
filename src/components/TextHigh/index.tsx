import React from 'react'
import styles from './TextHigh.module.scss'

export default function TextHigh({children}: {children: string}) {
  return (
    <h3 className={styles.text}>
        {children}
    </h3>
  )
}
