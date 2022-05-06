// import SHOP_DATA from '../../shop-data.json'
import { ProductsContext } from '../../contexts/product.context';
import { useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';


import './shop.styles.scss'
const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div className="shop-container">
            {
            products.map((product) => (
                <h1 key={product.id}>
                    <ProductCard product={product}/>
                </h1>
      ))
      }
    </div> 
    )
}

export default Shop;
