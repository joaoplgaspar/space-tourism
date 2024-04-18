import classNames from 'classnames'
import React from 'react'
import styles from './Title.module.scss'

interface Props {
    number?: string
    children: string
    cinza?: boolean
    section?: boolean
}

export default function Title({number, children, cinza, section}: Props) {
  return (
    <div className={classNames({
      [styles.container]: true,
      [styles.section]: section
    })}>
         {number && (<span>{number}</span>)}
         <h2 className={cinza? styles.cinza : ''}>{children}</h2>
    </div>
  )
}
