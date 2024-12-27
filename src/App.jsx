import { useState } from 'react'
import './App.css'
import FormAuthentication from './ui-component/FormAuthentication'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/loginOK" element={<h1>Login ok</h1>} />
          <Route path="/login" element={<FormAuthentication />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
