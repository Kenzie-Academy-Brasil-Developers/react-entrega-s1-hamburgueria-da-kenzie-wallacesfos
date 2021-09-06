import Product from '../Card/Product'

export default function MenuContainer(props){
    const {products, handleClick} = props;    
    
    return (
        products.map((item) => {
            return <Product titulo={item.name} categoria={item.category} preco={item.price} product={item} product={item} handleClick={handleClick}></Product>
        })
    )
}