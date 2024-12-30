import { useState } from 'react'
import './App.css'
import FormAuthentication from './components/FormAuthentication'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<FormAuthentication />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
