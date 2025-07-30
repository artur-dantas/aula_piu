
import Card from './componentes/card'
import Detalhamento from './componentes/detalhes'
import Galeria from './componentes/galeria'
import './App.css'
import img1 from "./assets/imagem_1.jpg"
import img2 from "./assets/imagem_2.jpg"
import img3 from "./assets/images_3.jpg"
import img4 from "./assets/imagem_4.jpg"
import img5 from "./assets/imagem_5.jpg"
import img6 from "./assets/imagem_6.jpg"

function App() {
  

  const characters = [
    {
      img:img1,
      nome:"Fiorra",
      desc:"tuche macho escritor",
    },
    {
      img:img2,
      nome:"Thresh",
      desc:"vai inche a pança sua alma",
    },
   
    {
      img:img3,
      nome:"fiddlesticks",
      desc:"nao vai exitir mais cafe no mundo",
    },
   
    {
      img:img4,
      nome:"jhin",
      desc:"vair sofr proo 4rão",
    },
   
    {
      img:img5,
      nome:"syndra",
      desc:"vai tomar tanta bolada que quando ver ta morto",
    },
   
    {
      img:img6,
      nome:"mel",
      desc:"nao da dano se reflete suas abilidades",
    },
   
   
   
  ];

  return (
    <>
      
      <Detalhamento img={img1} nome={"Fiorra"} desc={"tuche macho escritor"} />
      <Detalhamento img={img2} nome={"Thresh"} desc={"vai inche a pança sua alma"} />
      <Detalhamento img={img3} nome={"fiddlesticks"} desc={"nao vai exitir mais cafe no mundo"} />
      <Detalhamento img={img4} nome={"jhin"} desc={"vair sofr proo 4rão"} />
      <Detalhamento img={img5} nome={"syndra"} desc={"vai tomar tanta polada que quando ver ta morto"} />
      <Detalhamento img={img6} nome={"mel"} desc={"nao da dano se reflete suas abilidades"} />
      
      <Galeria>
      <Card img={img1}/>
      <Card img={img2}/>
      <Card img={img3}/>
      <Card img={img4}/>
      <Card img={img5}/>
      <Card img={img6}/>
      </Galeria>
      
      
    </>
  )
}

export default App
