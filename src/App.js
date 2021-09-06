import './App.css';
import React, {useState} from 'react';
import MenuContainer from './Components/MenuContainer/MenuContainer'
import hamburger from './images/hamburguer.jpg';
import xsalada from './images/xsalada.jpg'
import xburger from './images/xburger.jpg'
import bigKenzie from './images/bigKenzie.jpg'
import guarana from './images/Guarana.jpg'
import coca from './images/coca.jpg'
import fanta from './images/fanta.jpg'



function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99},
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]); 

  const [newProduct, setNewProduct] = useState([])
  const [isIsput, setIsInput] = useState('')
  const showProducts = () => setProducts(products.filter((products) => (products.name === isIsput)))
  const recarregar = () => window.location.reload()


  function voltar() {
    setProducts([
      { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99},
      { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
      { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
      { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
      { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
      { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
      { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
    ])
  }

  function handleClick(id){
    if(newProduct.includes(id) === false){
      setNewProduct([...newProduct, id])
    }
  }

  function images(x){
    let im;
    if(x === 'Hamburguer'){
      im = hamburger
    }else if(x === 'X-Salada'){
      im = xsalada
    }else if(x === 'X-Burguer'){
        im = xburger
    }else if(x === 'Big Kenzie'){
        im = bigKenzie
    }else if(x === 'Guaraná'){
        im = guarana
    }else if(x === 'Coca'){
        im = coca
    }else if(x === 'Fanta'){
        im = fanta
    }
    return im
  }
  let arr = []
  newProduct.map((item) => {
    return arr.push(item.price)
  })



  return (
    <div className="App">
      <header className="App-header">
        <img src="https://kenzie.com.br/images/logoblue.svg" alt="logo" className="logo" onClick={recarregar}/>
        <div className="inpute">
          <input type="text" onChange={(e) => setIsInput(e.target.value)}/>
          <button className="inpute-button" onClick={showProducts}>Procurar</button>
        </div>
      </header>
      <main className="App-main">
        {products.length < 7 ? <button className="btn-voltar" onClick={voltar}>Voltar</button>: false}
        <MenuContainer products={products} setProducts={setProducts} handleClick={handleClick}/>
      </main>
      <h1 className="carrinho">CARRINHO</h1>
      <h1 className="carrinho">Preço total: {arr.reduce((a,b) => a + b, 0).toFixed(2)} </h1>

      <footer>
       
        {newProduct.map((item) =>{
          return(
            <div className="card">
                <h2 className="card-title">{item.name}</h2>
                <img src={images(item.name)} className="imagem-product" alt="img"/>
                <p>Categoria: {item.category}</p>
                <h4>Preço: R${item.price}</h4>
            </div>
          )
        })}
      </footer>

    </div>
  );
}
export default App;
