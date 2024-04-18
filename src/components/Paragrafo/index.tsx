import classNames from 'classnames'
import React from 'react'
import styles from './Paragrafo.module.scss'

export default function Paragrafo({children, cinza}: {children: string, cinza?: boolean}) {
  return (
    <p className={classNames({
      [styles.paragrafo]: true,
      [styles.cinza]: cinza
    })}>
        {children}
    </p>
  )
}
