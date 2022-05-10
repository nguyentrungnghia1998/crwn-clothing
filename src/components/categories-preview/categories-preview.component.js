import ProductCard from '../product-card/product-card.component';
import './categories-preview.styles.scss'

const CategoriesPreview = ({title, products}) => {
    return (
        <div className='category-preview-container'> 
            <h2>
                <span className='title'>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    products.filter((_, idx) => idx<4).map(
                        (product) => <ProductCard product={product} key={product.id}/>
                    )
                }
            </div>
        </div>
    )
}

export default CategoriesPreview;