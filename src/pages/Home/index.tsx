import Paragrafo from 'components/Paragrafo'
import TextHigh from 'components/TextHigh'
import Title from 'components/Title'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <main className={styles.container}
        style={{backgroundImage: "url(assets/home/background-home-desktop.jpg)"}}
    >
      <section>
        <div className={styles.texts}>
          <Title cinza>So, you want to travel to</Title>
          <TextHigh>SPACE</TextHigh>
          <Paragrafo>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </Paragrafo>
        </div>
        <NavLink to='/destination' className={styles.exploreBtn}>
          <p>Explore</p>
        </NavLink>
      </section>
    </main>
  )
}
