import { useState } from 'react';
import { tarefa } from "./tarefa"; // Certifique-se de que o caminho está correto

export default function TarefaItem() {
  // Filtra tarefas NÃO concluídas (verifique o nome do campo!)
  const tarefasPendentes = tarefa.filter(tare => tare.concluida === false);



  // Estado para armazenar prioridades (se quiser atualizá-las)
  const [prioridades, setPrioridades] = useState(
    tarefasPendentes.reduce((acc, tare) => {
      acc[tare.id] = tare.prioridade;
      return acc;
    }, {})
  );

  // Função para mudar prioridade
  const handleClick = (id) => {
    setPrioridades(prev => ({
      ...prev,
      [id]: prev[id] === 3 ? 1 : prev[id] + 1,
    }));
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
          style={{ backgroundColor: getCorDeFundo(prioridades[tare.id]) }}
        >
          <h3>{tare.nome}</h3>
          <p>{tare.desc}</p>
          <p>Prioridade: {prioridades[tare.id]}</p>
          <button onClick={() => handleClick(tare.id)}>
            Alterar Prioridade ({prioridades[tare.id]})
          </button>
        </div>
      ))}
    </div>
  );
}