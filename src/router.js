import DefaultPage from 'components/DefaultPage'
import Home from 'pages/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<DefaultPage />}>
                <Route index element={<Home />}/>
                <Route path='/destination' element={<Home />}/>
                <Route path='crew' element={<Home />}/>
                <Route path='technology' element={<Home />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
