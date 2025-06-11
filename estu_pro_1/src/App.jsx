import { useState } from 'react'
import './App.css'
import { tarefa } from "./componentes/tarefa";
import Area_tra1 from './componentes/Area_tra';
import TarefaItem from './componentes/Card';


function App() {
  // Verifique seus dados primeiro
  console.log("Tarefas:", tarefa);

  {/*const tarefasPendentes = tarefa.filter(tare => tare.concluida === false) // Corrigido para "concluida"
    .map(tare => (
      <div key={tare.id}>
        <p>Nome: {tare.nome}</p>
        <p>Descrição: {tare.desc}</p>
        <p>Prioridade: {tare.prioridade}</p>
      </div>
    ));*/}

  return (
    <>
    <Area_tra1>
      <TarefaItem />
    </Area_tra1>
      
      
      {/*<Area_tra1>
        <TarefaItem />
      </Area_tra1>*/}

    </>
  );
}

export default App
