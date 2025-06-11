import { tarefa } from "./tarefa"; // Certifique-se de que o caminho está correto

export default function TarefaItem() {
  // Filtra tarefas NÃO concluídas e cria uma cópia para evitar mutação direta
  const tarefasPendentes = tarefa
    .filter(tare => tare.concluida === false)
    .map(tare => ({ ...tare })); // Cria cópias dos objetos de tarefa

  // Função para mudar prioridade
  const handleClick = (id) => {
    const tarefaIndex = tarefasPendentes.findIndex(tare => tare.id === id);
    if (tarefaIndex !== -1) {
      const novaPrioridade = tarefasPendentes[tarefaIndex].prioridade === 3 
        ? 1 
        : tarefasPendentes[tarefaIndex].prioridade + 1;
      
      tarefasPendentes[tarefaIndex].prioridade = novaPrioridade;
      
      // Forçar re-renderização (não ideal, mas necessário sem estado)
      // Em uma aplicação real, você precisaria de uma solução melhor
      window.location.reload();
    }
  };

  // Cor de fundo baseada na prioridade
  const getCorDeFundo = (prioridade) => {
    if (prioridade === 3) return '#ffdddd';
    if (prioridade === 2) return '#fff8dd';
    return '#ddffdd';
  };

  return (
    <div>
      {tarefasPendentes.map(tare => (
        <div 
          key={tare.id}
          className="tarefa-item"
          style={{ backgroundColor: getCorDeFundo(tare.prioridade) }}
        >
          <h3>{tare.nome}</h3>
          <p>{tare.desc}</p>
          <p>Prioridade: {tare.prioridade}</p>
          <button onClick={() => handleClick(tare.id)}>
            Alterar Prioridade ({tare.prioridade})
          </button>
        </div>
      ))}
    </div>
  );
}


{/*

  import { useState } from "react"

export default function Tarefa (props) {

    let [concluida, setConcluida] = useState(props.concluida)

    return(
        <>
        <h3>{props.nome}</h3>
        <p>Descrição: {props.desc}</p>
        <p style={{ color: concluida ? "green" : "red" }}>A Tarefa está {concluida == true ? "Concluida" : "Pendente"}</p>
        <button onClick={() => setConcluida(!concluida)}>{concluida == false ? "Concluir" : "Reabrir"}</button>
        <hr />
        </>
    )
}
    
 */}
