import classNames from 'classnames'
import Paragrafo from 'components/Paragrafo'
import TextHigh from 'components/TextHigh'
import React from 'react'
import { IDestino } from 'types/type'
import styles from './SectionDestination.module.scss'

interface Props {
  todosDestinos: IDestino[]
  destinoSelecionado: IDestino
  setDestinoSelecionado: React.Dispatch<React.SetStateAction<IDestino>>
}

export default function SectionDestination({
    todosDestinos, 
    destinoSelecionado: {title, description, distance, image, travelTime},
    setDestinoSelecionado
  }: Props) {

    return (
      <>
      <div className={styles.margin}/>
      <section className={styles.container}>
        <img src={`assets/destination/${image}`} alt="Imagem do destino selecionado" />
        <div className={styles.container__texts}>
          <nav className={styles.nav}>
            {todosDestinos.map(destino => (
              <li 
                className={classNames({
                  [styles.nav__item]: true,
                  [styles.nav__item_ativo]: destino.title === title
                })} 
                onClick={() => setDestinoSelecionado(destino)}
              >
                {destino.title}
              </li>
            ))}
          </nav>
          <TextHigh>{title}</TextHigh>
          <Paragrafo cinza>{description}</Paragrafo>
          <div className={styles.line}/>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <span>Avg. Distance</span>
              <p>{distance}</p>
            </div>
            <div className={styles.info}>
              <span>Est. Travel Time</span>
              <p>{travelTime}</p>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}
