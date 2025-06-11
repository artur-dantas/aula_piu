import { useState } from "react"



export default function ChangeValue(){
    
   
    
    let [valor2, setValor2] = useState(0) //cria a varivel valor2 e a funçao setValor2 que atualiza valor2


    function menos(){
        let variavel = valor2-1 //a funçao cria uma cria variavel variavel com o valor de valor2 -1 e atualiza o valor de valor2 por setValor onde valor2 agora tem o mesmo valor que varialve
        setValor2(variavel)
    }

    function mais(){
        let variavel = valor2+1 //a funçao cria uma cria variavel variavel com o valor de valor2 +1 e atualiza o valor de valor2 por setValor onde valor2 agora tem o mesmo valor que varialve
        setValor2(variavel)
    }

    return(
        <>
            
            <div>
                <button onClick={mais}>Cliques mais {valor2}</button> {/* cria um butao que quando clica(por causa so onclick) ativa a funçao mais */}
            </div>

            <div>
                <button onClick={menos}>Cliques menus {valor2}</button> {/* cria um butao que quando clica(por causa so onclick) ativa a funçao menos */}
            </div>
        </>
    )
}