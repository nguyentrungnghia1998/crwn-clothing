import './category.styles.scss'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'
const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext)
    const [products, setProducts] = useState([]);
    useEffect( () => {
        setProducts(categoriesMap[category]);
    }, [category,categoriesMap]);
    
    return  (
        <div className='category-container'>
            {products &&
                products.map((product) => <ProductCard product={product} key={product.id}/>)
            }
        </div>
    )
}

export default Category;