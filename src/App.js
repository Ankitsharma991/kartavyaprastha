// import Card from "./Components/card";
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import View from './Components/View'

const App = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/:id' element={<View/>}/>
    </Routes>
  )
}

export default App;

