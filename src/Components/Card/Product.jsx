import hamburger from './images/hamburguer.jpg';
import xsalada from './images/xsalada.jpg'
import xburger from './images/xburger.jpg'
import bigKenzie from './images/bigKenzie.jpg'
import guarana from './images/Guarana.jpg'
import coca from './images/coca.jpg'
import fanta from './images/fanta.jpg'



export default function Card(props){
    const {titulo, categoria, preco, product, handleClick} = props;

    let im;
    if(titulo === 'Hamburguer'){
        im = hamburger
    }else if(titulo === 'X-Salada'){
        im = xsalada
    }else if(titulo === 'X-Burguer'){
        im = xburger
    }else if(titulo === 'Big Kenzie'){
        im = bigKenzie
    }else if(titulo === 'Guaraná'){
        im = guarana
    }else if(titulo === 'Coca'){
        im = coca
    }else if(titulo === 'Fanta'){
        im = fanta
    }
  
    
    return(
        <div className="card">
            <h2 className="card-title">{titulo}</h2>
            <img src={im} className="imagem-product" alt="img"/>
            <p>Categoria: {categoria}</p>
            <h4>Preço: R${preco}</h4>
            <button className="Adicionar" id='btn' onClick={() => handleClick(product)}>Adicionar</button>
        </div>
    )
}