import './ListaDeTarefas.css'
import { useState } from 'react'

export default function ListaDeTarefas(){

    const [tarefa, setTarefa] = useState({
        titulo: "",
        status: "Pendente",
        prioridade: "Alta",
        id :  Math.floor(Math.random()*1000000000)
    })

    const [lista, setLista] = useState([])

    const [itemEditandoId, setItemEditandoId] = useState(null);
    const [novoTitulo, setNovoTitulo] = useState("");

// funçao de adicionar tarefa
    const handleSubmit = (e) => {
        e.preventDefault();
        const novaTarefa = {
            titulo: tarefa.titulo,
            status: "Pendente",
            prioridade: tarefa.prioridade,
            id :  Math.floor(Math.random()*1000000000)
        }
        setLista([...lista, novaTarefa])
        setTarefa({
            titulo: "",
            status: "Pendente",
            prioridade: "Alta",
            id :  Math.floor(Math.random()*1000000000)
        })
    }

// Alterar status da tarefa (Concluir/Reabrir)
    const handleChange = (status_passado, item) => {
        setLista(prevLista =>
            prevLista.map(i =>
                i === item ? { ...i, status: status_passado } : i
            )
        )
    }

// Excluir tarefa
    const handleDelete = (item) => {
        setLista(prevLista =>
            prevLista.filter(i => i !== item)
        )
    }


// ============================= \\
// ** Editar título da tarefa ** \\
// ============================= \\


// Entrar no modo de edição \\

    function handleToggleEditar(item) {
        setItemEditandoId(item.id);
        setNovoTitulo(item.titulo);
    }

// Atualizar título \\
    function handleUpdate(e) {
        e.preventDefault();
        setLista(prevLista =>
          prevLista.map(item =>
            item.id === itemEditandoId ? { ...item, titulo: novoTitulo } : item
          )
        );
        setItemEditandoId(null);
        setNovoTitulo("");
      }
// ============= \\
// **Ordenação** \\
// ============= \\

// por titulo \\

    const ordenarPorTitulo = () => {
        const listaOrdenada = [...lista].sort((a, b) =>
            a.titulo.localeCompare(b.titulo)
        )
        setLista(listaOrdenada)
    }

// por prioridade \\

    const ordenarPorPrioridade = () => {
        const prioridadeValor = { "Alta": 3, "Média": 2, "Baixa": 1 }
        const listaOrdenada = [...lista].sort((a, b) =>
            prioridadeValor[b.prioridade] - prioridadeValor[a.prioridade]
        )
        setLista(listaOrdenada)
    }

// ================ \\
// ** prioridade ** \\
// ================ \\

// almentar prioridade\\ 

    const almentarPrioridade = (item) => {
    const novaPrioridade = {
        "Baixa": "Média",
        "Média": "Alta",
        "Alta": "Alta" 
    }

    if (item.prioridade === "Alta") {
        alert("A prioridade já está no nível máximo!");
        return;
    }

    setLista(prevLista =>
        prevLista.map(i =>
            i === item ? { ...i, prioridade: novaPrioridade[item.prioridade] } : i
        )
    );
}

// diminuir prioridade \\
const DiminuirPrioridade = (item) => {
    const novaPrioridade = {
        "Baixa": "Baixa" ,
        "Média": "Baixa",
        "Alta": "Média"  
    }

    if (item.prioridade === "Baixa") {
        alert("A prioridade já está no nível minimo!");
        return;
    }

    setLista(prevLista =>
        prevLista.map(i =>
            i === item ? { ...i, prioridade: novaPrioridade[item.prioridade] } : i
        )
    );
}

    return(
        <div>
            <h2>Lista de Tarefas React</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        name="tarefa" 
                        value={tarefa.titulo}
                        onChange={(e) => setTarefa(prev => ({ ...prev, titulo: e.target.value }))} 
                    />
                    <select value="Alta" onChange={(e) => setTarefa(prev => ({ ...prev, prioridade: e.target.value }))}>
                        <option value="Alta">Prioridade Alta</option>
                        <option value="Média">Prioridade Média</option>
                        <option value="Baixa">Prioridade Baixa</option>
                    </select>
                </label>
                <input type="submit" value="Adicionar" />
            </form>

            <div style={{ marginTop: 20 }}>
                <button onClick={ordenarPorTitulo} style={{ marginRight: 10 }}>Ordenar por Título</button>
                <button onClick={ordenarPorPrioridade}>Ordenar por Prioridade</button>
            </div>

            <ul>
            {lista.map(item => (
                <li key={item.id}>
                 {itemEditandoId === item.id ? (
                    <form onSubmit={handleUpdate} style={{ display: "inline" }}>
                    <input
                        type="text"
                        value={novoTitulo}
                        onChange={(e) => setNovoTitulo(e.target.value)}
                    />
                    <button type="submit" style={{display:"none"}}>Salvar</button>
                    <button type="button" onClick={() => setItemEditandoId(null)}>Cancelar</button>
                    </form>) : 
                    (
                    <span onClick={() => handleToggleEditar(item)} style={{ cursor: 'pointer' }}>
                    Título:{item.titulo}
                    </span>)}
                         
                        | Situação: 
                        <span style={{ color: item.status === "Pendente" ? "orange" : "green" }}> {item.status} </span>
                        | Prioridade: 
                        <span style={{color: item.prioridade === "Alta" ? "#EB13E4" : item.prioridade === "Baixa" ? "#CCA3E9" : "#D578EB"}}> {item.prioridade}</span>

                        {item.status == "Pendente" ? <button style={{border: "2px solid green"}} onClick={() => handleChange("Concluída", item)}>Concluir</button> :
                        <button style={{border: "2px solid orange"}} onClick={() => handleChange("Pendente", item)}>Reabrir</button>}
                        
                        <button onClick={() => almentarPrioridade(item)}>+ Prioridade</button>
                        <button onClick={() => DiminuirPrioridade(item)}>- Prioridade</button>
                        
                        
                        <button style={{border: "2px solid red"}} onClick={() => handleDelete(item)}>Fechar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}