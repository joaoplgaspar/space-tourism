import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.scss'

interface Props {
    value: string,
    n: string,
    to: string
}

export default function Link({to, value, n}: Props) {
  return (
    <NavLink
        to={to === 'home' ? '/' : to}
        className={({isActive}) => classNames({
            [styles.link]: true,
            [styles.ativo]: isActive
        })}
    >
        <span>{n}</span>
        <p>{value}</p>
    </NavLink>
  )
}
