

import { createContext, useEffect, useState} from "react";

const addCardItems = (cartItems, productToAdd) => {
    
    const existingCartItems = cartItems.find((cardItem) => productToAdd.id===cardItem.id);

    if (existingCartItems) {
        return cartItems.map((cartItem) => (cartItem.id===productToAdd.id)?
        {...cartItem, quantity:cartItem.quantity+1}: cartItem);
    }
    return [...cartItems, {...productToAdd, quantity:1}];
}
export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CardProvider = ({children}) => {

    const [isCardOpen, setIsCardOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItems(cartItems, productToAdd));
    }
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])
    const value = {isCardOpen, setIsCardOpen, addItemToCart, cartItems, cartCount}
    return <CardContext.Provider value = {value}> {children} </CardContext.Provider>
}