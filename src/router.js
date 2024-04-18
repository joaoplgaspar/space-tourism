import DefaultPage from 'components/DefaultPage'
import Crew from 'pages/Crew'
import Destination from 'pages/Destination'
import Home from 'pages/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<DefaultPage />}>
                <Route index element={<Home />}/>
                <Route path='/destination' element={<Destination />}/>
                <Route path='crew' element={<Crew />}/>
                <Route path='technology' element={<Home />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
