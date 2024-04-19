import Paragrafo from 'components/Paragrafo'
import TextHigh from 'components/TextHigh'
import Title from 'components/Title'
import React from 'react'
import { ICrew } from 'types/type'
import styles from './SectionCrew.module.scss'

interface Props {
    crew: ICrew
}

export default function SectionCrew({crew: {cargo, nome, description, id, image}}: Props) {
  return (
    <section className={styles.container}>
        <div className={styles.container__texts}>
            <span>{cargo}</span>
            <TextHigh>{nome}</TextHigh>
            <Paragrafo cinza>{description}</Paragrafo>
        </div>
        <img src={`assets/crew/${image}`} alt={`Foto do ${cargo} ${nome}`} />
    </section>
  )
}
