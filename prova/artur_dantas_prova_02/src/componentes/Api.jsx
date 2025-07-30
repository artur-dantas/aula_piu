import { useState, useEffect } from 'react';

export default function Questao_2() {
    const [postes, setpostes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limite, setlimite] = useState(1)

  const fetchpostes = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error("Erro na API");
    const data = await response.json();
    console.log(data)
    setpostes(data);
  } catch (error) {
    console.error("Falha na requisição:", error);
    setpostes([]); // Garante que o estado não fique pendente
  } finally {
    setLoading(false); // SEMPRE executa, mesmo com erro
  }
};

    useEffect(() => {
        fetchpostes();
    }, []);

    if (loading) {
        return <p>Carregando postes...</p>;
    }

    return (
        <div>
            <h1>Lista de postes</h1>

            <form>
                <label>Selecione sua opção:
                    <select name="selecione" onChange={(e) => setlimite(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
        
                        <option value="10">10</option>
                       
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>

            <ul>
                {postes.filter(item => item.userId = limite).map(poste => (
                    <li key={poste.id}>
                        {poste.title} (ID:{poste.userId})
                    </li>
                ))}
            </ul>
        </div>
    );
}
