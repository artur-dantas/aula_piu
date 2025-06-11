import { carros } from "./dados_carros"
//importa a lista
export default function Lista (){
    
    
    return(
    <div>
        {
            //mapaia todos carros onde transforma em carro qual denominei de car e peguei alguns parametros dele como ano modelo e outros(car.ano,car.modelo)
            carros.map(car =>(
                <div>
                    <p>{car.modelo}</p>
                    <p>{car.ano}</p>
                    
                </div>
            ))
        }
    </div>
       
    );
}