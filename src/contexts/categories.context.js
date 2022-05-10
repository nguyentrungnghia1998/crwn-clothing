


import {createContext, useEffect, useState} from "react";
import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase/firebase.utils";


export const CategoriesContext = createContext({
    categoriesMap:{}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getMap = async () => {
            const Map = await getCollectionAndDocuments();
            setCategoriesMap(Map);
        };
        getMap();
    }, []);
    const value = {categoriesMap};
    
    return (<CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>)
}