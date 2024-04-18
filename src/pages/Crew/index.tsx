import MainContent from 'components/MainContent'
import React from 'react'
import styles from './Crew.module.scss'
import crews from 'json/crew.json'
import SectionCrew from './SectionCrew'

export default function Crew() {
  return (
    <MainContent 
        numberTitle='02' 
        title='Meet Your Crew' 
        imageBackground='./assets/crew/background-crew-desktop.jpg' 
    >
        <div className={styles.carrousel}>
          <SectionCrew crew={crews[0]}/>
        </div>
    </MainContent>
  )
}
