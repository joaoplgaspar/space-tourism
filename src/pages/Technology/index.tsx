import MainContent from 'components/MainContent'
import React, { useState } from 'react'
import SectionTechnology from './SectionTechnology'
import { ITechnology } from 'types/type'
import technologys from 'json/technologys.json'

export default function Technology() {
  const [tecnologiaSelecionada, setTecnologiaSelecionada] = useState<ITechnology>(technologys[0])

  return (
    <MainContent 
        imageBackground='./assets/technology/background-technology-desktop.jpg'
        numberTitle='03'
        title='Space Launch 101'
    >
        <SectionTechnology 
            tecnologia={tecnologiaSelecionada} 
            setTecnologia={setTecnologiaSelecionada}
            todasTecnologias={technologys}
        />
    </MainContent>
  )
}
