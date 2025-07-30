import { useState } from 'react';
import Tema from './componentes/Tema'
import ListaAlunos from './componentes/GetTudoAPI';
import AdicionarAluno from './componentes/PostAPI';
import BuscarAlunoPorId from './componentes/GetAPI';
import './App.css'
function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <Tema/>
    <BuscarAlunoPorId/></div>
    
    
  )
}

export default App
