import {menus} from './dados.js'

export default function ListasMap(){

    
    return(


        {menus.map(menu =>(
        <li className='dropdown'>
                    <a href=''>{menu}</a>
                            <div className='dropdown-menu'>
                                {Ordem(props.lista)}
                            </div>
                    
                </li>
        )
            )}

    )
}




    export default function Dropdown(props){ 
    

    return(
        
        <nav>
            <ul>
                {/* cada chamada a função Estrutura irá criar uma nova lista <ul> */}

                {menus.map(menu =>
               {Estrutura(props.titulo[1], props.lista)}
               
                )}

            </ul>
            
           
        </nav>
               
    );

   
}


function Ordem (lista){
    let retorno = [];
    for (let i=0; i<lista.length; i++){
        {retorno.push(<a>{lista[i]}</a>)}
    }

    return (
        <>
        {retorno}
        </>
        );
    }


function Estrutura(titulo, lista){

    return(
        <>
        <li className='dropdown'>
        <a href=''>{titulo}</a>
            <div className='dropdown-menu'>
                {Ordem(lista)}
            </div>
        </li>
        </>
    );
}