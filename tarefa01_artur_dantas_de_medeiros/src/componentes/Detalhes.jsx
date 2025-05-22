export default function Detalhamento (props){

    return(
        <>
            <div>
                <h2>{props.nome}</h2>
                <figure>

                    <img src={props.img} alt="" /> 
                    <figcaption>{props.desc}</figcaption>
                    
                </figure>
               

            </div>
        </>
    )
}