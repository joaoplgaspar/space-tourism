import Title from 'components/Title'
import React from 'react'
import styles from './MainContent.module.scss'

interface Props {
    title: string,
    numberTitle: string
    imageBackground: string
    children: JSX.Element | JSX.Element[]
}

export default function MainContent({title, numberTitle, imageBackground, children}: Props) {
  return (
    <main 
        className={styles.container}
        style={{backgroundImage: `url(${imageBackground})`}}
    >
        <div className={styles.content}>
            <Title number={numberTitle} section>{title}</Title>
            {children}
        </div>
    </main>
  )
}
