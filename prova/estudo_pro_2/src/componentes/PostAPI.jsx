import { useState } from 'react';

export default function AdicionarAluno({ onAlunoAdicionado }) {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [id, setId] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:8000/aluno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: parseInt(id),
                    nome,
                    idade: parseInt(idade)
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Erro ao adicionar aluno');
            }

            const alunoAdicionado = await response.json();
            setMensagem(`Aluno ${alunoAdicionado.nome} adicionado com sucesso!`);
            setErro('');
            
            // Limpa o formulário
            setNome('');
            setIdade('');
            setId('');
            
            // Notifica o componente pai (opcional)
            if (onAlunoAdicionado) {
                onAlunoAdicionado(alunoAdicionado);
            }
        } catch (error) {
            setErro(error.message);
            setMensagem('');
        }
    };

    return (
        <div>
            <h2>Adicionar Novo Aluno</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input 
                        type="number" 
                        value={id} 
                        onChange={(e) => setId(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Nome:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Idade:</label>
                    <input 
                        type="number" 
                        value={idade} 
                        onChange={(e) => setIdade(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Adicionar</button>
            </form>
            {mensagem && <p style={{ color: 'green' }}>{mensagem}</p>}
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </div>
    );
}