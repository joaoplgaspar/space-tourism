import React from 'react'
import styles from './SectionTechnology.module.scss'
import { ITechnology } from 'types/type'
import classNames from 'classnames'
import TextHigh from 'components/TextHigh'
import Paragrafo from 'components/Paragrafo'

interface Props {
    tecnologia: ITechnology
    setTecnologia: React.Dispatch<React.SetStateAction<ITechnology>>
    todasTecnologias: ITechnology[]
}

export default function SectionTechnology({tecnologia, setTecnologia, todasTecnologias}: Props) {
  return (
    <section className={styles.container}>
        <nav className={styles.nav}>
            {todasTecnologias.map(tec => (
                <li 
                    className={classNames({
                        [styles.nav__item]: true,
                        [styles.nav__item__ativo]: tecnologia === tec
                    })}
                    onClick={() => setTecnologia(tec)}
                >{tec.id}</li>
            ))}
        </nav>
        <div className={styles.texts}>
            <span>The terminology...</span>
            <TextHigh>{tecnologia.titulo}</TextHigh>
            <Paragrafo cinza>{tecnologia.descricao}</Paragrafo>
        </div>
        <img src={`assets/technology/${tecnologia.image}`} alt="" />
    </section>
  )
}
