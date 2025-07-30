import { useState } from "react"
export default function Info1V(){
    //let valor = 0
    let [valor, setValor] = useState(2)

    return(
        <>
            <div> 
                <button onClick={() => setValor(valor**5)}> clicar {valor}</button>
            </div>
        </>
    )
}