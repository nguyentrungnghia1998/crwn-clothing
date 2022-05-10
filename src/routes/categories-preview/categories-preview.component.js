// import SHOP_DATA from '../../shop-data.json'
import { CategoriesContext } from '../../contexts/categories.context';
import { Fragment, useContext } from 'react';
// import ProductCard from '../../components/product-card/product-card.component';
import './categories-preview.styles.scss'

import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
const CategoryPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const product = categoriesMap[title];
                    // console.log(categoriesMap[title])
                    return (
                        <CategoriesPreview title={title} products={product} key={title}/>
                    )
                })
            }
        </Fragment>  
      )
    }


export default CategoryPreview;
