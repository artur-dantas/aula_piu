import { menus } from './dados.js';

export default function Dropdown() {
    return (
        <nav>
            <ul className="dropdown-container">
                {menus.map((menu, ) => (

                Estrutura(menu.link, menu.nome)
                    
                ))}
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