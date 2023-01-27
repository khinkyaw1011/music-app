import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Details from './pages/Details'
import HomePage from './pages/HomePage'
const App = () => {
  return (
  <>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route  path='/details/:id' element={<Details/>}/>
  </Routes>
  </>
  )
}

export default App
