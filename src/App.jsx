import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calculator from './screens/calculator'
import Currencyconvertor from './screens/currencyconvertor'
import Percentagecalculator from './screens/percentagecalculator'
import Lengthconverter from './screens/lengthconverter'






import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/currencyconvertor" element={<Currencyconvertor />} />
          <Route path="/percentagecalculator" element={<Percentagecalculator />} />
          <Route path="/lengthconverter" element={<Lengthconverter />} />

     


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
