import { useState, useEffect } from 'react'

export default function Questao_1() {
  const [login, setlogin] = useState("")
  const [palavra, setpalavra] = useState("")

function handleName() {
    if (palavra === "AlunoPIU"){handleColor()}
        
    }

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

useEffect(() => {
    handleName()
  },)
  return (
    <>
      <div className="card">
         <label>
                <span>palavra-chave:</span>
                    {/* comentar em sala o atributo value */}
                    <input type="text" name="palavra" onChange={(e) => setpalavra(e.target.value)} value={palavra} placeholder=' palavra:' />
                    </label>

        <label>
                <span>login:</span>
                    {/* comentar em sala o atributo value */}
                    <input type="text" name="login" onChange={(e) => setlogin(e.target.login)} value={login} placeholder=' login:' />
                    </label>

               
        
      </div>
    </>
  )
}