import Title from 'components/Title'
import React, { useState } from 'react'
import styles from './Destination.module.scss'
import destinations from 'json/destination.json'
import SectionDestination from './SectionDestination'
import { IDestino } from 'types/type'
import MainContent from 'components/MainContent'

export default function Destination() {
  const [destinoSelecionado, setDestinoSelecionado] = useState<IDestino>(destinations[0])
  const [todosDestinos, setTodosDestinos] = useState<string[]>([])

  return (
    <MainContent
      numberTitle='01'
      title='Pick Your Destination'
      imageBackground='./assets/destination/background-destination-desktop.jpg'
    >
      <SectionDestination 
        todosDestinos={destinations} 
        destinoSelecionado={destinoSelecionado}
        setDestinoSelecionado={setDestinoSelecionado}
      />
    </MainContent>
  )
}
