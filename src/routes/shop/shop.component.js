// import SHOP_DATA from '../../shop-data.json'
import { CategoriesContext } from '../../contexts/categories.context';
import { Fragment, useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss'
import Category from '../category/category.component';
import CategoryPreview from '../categories-preview/categories-preview.component';
const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=':category' element={<Category/>} />
        </Routes>
      )
    }


export default Shop;
