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
import Physicst from './screens/physicst'
import Secondlaw from './screens/secondlaw'
import Oma from './screens/oma'
import Acceleration from './screens/acceleration'
import Three from './screens/three'
import Energy from './screens/energy'
import Cinemahome from './screens/cinemahome'
import Film from './screens/film'
import Onlineshop from './screens/onlineshop'
import Drugstore from './screens/drugstore'
import Menu from './screens/menu'
import Barbershop from './screens/barbershop'







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
          <Route path="/physicst" element={<Physicst />} />
          <Route path="/secondlaw" element={<Secondlaw />} />
          <Route path="/oma" element={<Oma />} />
          <Route path="/acceleration" element={<Acceleration />} />
          <Route path="/three" element={<Three />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/cinemahome" element={<Cinemahome />} />
          <Route path="/film" element={<Film />} />
          <Route path="/onlineshop" element={<Onlineshop />} />
          <Route path="/drugstore" element={<Drugstore />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/barbershop" element={<Barbershop />} />




        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
