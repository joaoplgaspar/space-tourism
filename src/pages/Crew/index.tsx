import MainContent from 'components/MainContent'
import React, { useState } from 'react'
import styles from './Crew.module.scss'
import crews from 'json/crew.json'
import SectionCrew from './SectionCrew'
import { ICrew } from 'types/type'
import classNames from 'classnames'

export default function Crew() {
  const [crewSelecionado, setCrewSelecionado] = useState<ICrew>(crews[0])

  return (
    <MainContent 
        numberTitle='02' 
        title='Meet Your Crew' 
        imageBackground='./assets/crew/background-crew-desktop.jpg' 
    >
      <SectionCrew crew={crewSelecionado}/>
      <div className={styles.navegacao}>
        {crews.map(ident => (
          <div 
            className={classNames({
              [styles.navItem]: true,
              [styles.navItemAtivo]: ident === crewSelecionado
            })}
            onClick={() => setCrewSelecionado(ident)}
          />
        ))}
      </div>
    </MainContent>
  )
}
