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
import Credit from './screens/credit'
import Bank from './screens/bank'
import Customscalculator from './screens/customscalculator'
import Ipoteka from './screens/ipoteka'






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
          <Route path="/credit" element={<Credit />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/customscalculator" element={<Customscalculator />} />
          <Route path="/ipoteka" element={<Ipoteka />} />

     


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
