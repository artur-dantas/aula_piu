import "./EscorpoReduz.css"
const EscorpoRduz = () => {
    function hendleClick(elemento) {
        return(
            elemento.style.backgroundColor =="red"
        )
    }
    return(
        <>
            <button onClick={() => console.log("voce clicou")}>clique</button>
            <div>
                <button onClick={() => alert("macaaaaaco")}>novo butao</button>
            </div>
            <div>
               <button onClick={hendleClick}>hendalClick</button> 
            </div>
            <div className="container" onClick={() => alert("conteiner")}>
                <p>jgglkjlkjgfjfkjhkhj</p>
            </div>
        </>
    )
}

export default EscorpoRduz