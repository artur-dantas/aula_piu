import { useEffect, useState } from "react"

export default function TemaToggler() {
    // 1. Estado para controlar o tema atual. Inicia com 'frio'.
    const [isQuente, setIsQuente] = useState(false);

    // 2. Função que aplica os estilos com base no estado 'isQuente'.
    function aplicarTema() {
        const body = document.body;
        const root = document.documentElement; // Manipula o <html>, que pode ser mais abrangente

        if (isQuente) {
            // Estilos para o tema Quente
            body.style.backgroundColor = "#FFDAB9"; // Pêssego claro
            root.style.color = "#B22222"; // Vermelho tijolo
        } else {
            // Estilos para o tema Frio
            body.style.backgroundColor = "#ADD8E6"; // Azul claro
            root.style.color = "#4169E1"; // Azul royal
        }
    }

    // 3. useEffect para executar a função 'aplicarTema' sempre que 'isQuente' mudar.
    useEffect(() => {
        aplicarTema();
    }, [isQuente]);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            {/* O botão inverte o estado 'isQuente' ao ser clicado */}
            <button onClick={() => setIsQuente(!isQuente)} style={{
                backgroundColor: isQuente ? '#FF8C00' : '#4682B4',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>
                Trocar Tema ({isQuente ? "Frio" : "Quente"})
            </button>
           
        </div>
    );
}