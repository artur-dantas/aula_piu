import { useState, useEffect } from 'react';

export default function ListaAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);

  const fetchAlunos = async () => {
  try {
    const response = await fetch('http://localhost:8000/alunos');
    if (!response.ok) throw new Error("Erro na API");
    const data = await response.json();
    console.log(data)
    setAlunos(data);
  } catch (error) {
    console.error("Falha na requisição:", error);
    setAlunos([]); // Garante que o estado não fique pendente
  } finally {
    setLoading(false); // SEMPRE executa, mesmo com erro
  }
};

    useEffect(() => {
        fetchAlunos();
    }, []);

    if (loading) {
        return <p>Carregando alunos...</p>;
    }

    return (
        <div>
            <h1>Lista de Alunos</h1>
            <ul>
                {alunos.map(aluno => (
                    <li key={aluno.id}>
                        {aluno.nome} (ID: {aluno.id}, Idade: {aluno.idade})
                    </li>
                ))}
            </ul>
        </div>
    );
}