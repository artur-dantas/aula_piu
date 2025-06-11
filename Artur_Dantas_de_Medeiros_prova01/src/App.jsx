import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lista from './componentes/lista'
import Lista_v from './componentes/Lista_v'
import ChangeValue from './componentes/butao'

function App() {
  

  return (
    <>
      <ChangeValue/>
      <Lista/>
      <Lista_v/>
    </>
  )
}

export default App
