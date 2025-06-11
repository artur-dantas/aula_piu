import { carros } from "./dados_carros"
export default function Lista_v (){
    
    return(
    <div>
        {
             //mapaia todos carros onde transforma em carro qual denominei de car e peguei alguns parametros dele como ano cor e outros(car.ano,car.cor)
            // tem o filter onde de ves de mstra todos os carros ele verifica se o car.cor desse carro e esatamente vermelho(valor e tipo)
            carros.filter(car =>car.cor === 'vermelho' ).map(car =>(
                <div>
                    <p>{car.modelo}</p>
                    <p>{car.ano}</p>
                </div>
            ))
        }
    </div>
       
    );
}