import './ListaDeTarefas.css'
import { useState } from 'react'

export default function ListaDeTarefas(){

    const [tarefa, setTarefa] = useState('')
    const [status, setStatus] = useState("andamento")
    const [lista, setLista] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLista([...lista, { tarefa, status }])

        setStatus("andamento")
        setTarefa('')

    }
    const reorganizarLista = () => {
        const ordemStatus = {
            "realizada": 0,
            "andamento": 1,
            "pendente": 2
        };

        const novaLista = [...lista].sort((a, b) => {
            return ordemStatus[a.status] - ordemStatus[b.status];
        });

        setLista(novaLista);
    }

    return(

        <div>
            <h2>Lista de Tarefas React</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    tarefa:
                    <input type="text" name="tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
                </label>

                <label>
                    <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="realizada">realizada</option>
                        <option value="andamento">andamento</option>
                        <option value="pendente"> pendente</option>
                        
                    </select>
                </label>

                    <input type="submit" value="Adicionar" />

            </form>

            <button onClick={reorganizarLista}>Reorganizar Lista</button>

            <ul>
                {lista.map((item, index) =>
               <li key={index} className={item.status}>
                        <strong>{item.tarefa}</strong> - Status: {item.status}
                </li>
            )}
            </ul>
        

        </div>

    )
}