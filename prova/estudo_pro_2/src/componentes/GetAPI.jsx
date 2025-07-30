import { useState } from 'react';

export default function BuscarAlunoPorId() {
    const [id, setId] = useState('');
    const [aluno, setAluno] = useState(null);
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');

    const buscarAluno = async () => {
        if (!id) return;
        
        setLoading(true);
        setErro('');
        setAluno(null);
        
        try {
            const response = await fetch(`http://127.0.0.1:8000/aluno/${id}`);
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Aluno não encontrado');
            }
            
            const data = await response.json();
            setAluno(data);
        } catch (error) {
            setErro(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Buscar Aluno por ID</h2>
            <div>
                <input
                    type="number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Digite o ID do aluno"
                />
                <button onClick={buscarAluno} disabled={loading}>
                    {loading ? 'Buscando...' : 'Buscar'}
                </button>
            </div>
            
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            
            {aluno && (
                <div>
                    <h3>Detalhes do Aluno</h3>
                    <p><strong>ID:</strong> {aluno.id}</p>
                    <p><strong>Nome:</strong> {aluno.nome}</p>
                    <p><strong>Idade:</strong> {aluno.idade}</p>
                </div>
            )}
        </div>
    );
}