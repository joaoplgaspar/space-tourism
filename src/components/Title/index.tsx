import React from 'react'
import styles from './Title.module.scss'

interface Props {
    number?: string
    children: string
}

export default function Title({number, children}: Props) {
  return (
    <div className={styles.container}>
         {number && (<span>{number}</span>)}
         <h2>{children}</h2>
    </div>
  )
}
