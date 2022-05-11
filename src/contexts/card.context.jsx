

import { createContext, useEffect, useState} from "react";

const addCardItems = (cartItems, productToAdd) => {
    
    const existingCartItems = cartItems.find((cardItem) => productToAdd.id===cardItem.id);

    if (existingCartItems) {
        return cartItems.map((cartItem) => (cartItem.id===productToAdd.id)?
        {...cartItem, quantity:cartItem.quantity+1}: cartItem);
    }
    return [...cartItems, {...productToAdd, quantity:1}];
}

const removeCardItems = (cartItems, cartItemToRemove) => {
    // const existingCartItems = cartItems.find((cardItem) => cartItemToRemove.id===cardItem.id);
    if (cartItemToRemove.quantity===1) {
        return cartItems.filter((cartItem) => cartItem.id!==cartItemToRemove.id)
    } 
    return cartItems.map((cartItem) => (cartItem.id===cartItemToRemove.id)?
        {...cartItem, quantity:cartItem.quantity-1}: cartItem);
}

const clearCardItems = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id!==cartItemToClear.id)
}
export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CardProvider = ({children}) => {

    const [isCardOpen, setIsCardOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItems(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCardItems(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToRemove) => {
        setCartItems(clearCardItems(cartItems, cartItemToRemove));
    }



    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity*cartItem.price, 0)
        setCartTotal(newCartTotal);
    }, [cartItems])
    const value = 
        {isCardOpen, 
        setIsCardOpen, 
        addItemToCart, 
        removeItemFromCart, 
        clearItemFromCart , 
        cartItems, 
        cartCount,
        cartTotal}
    return <CardContext.Provider value = {value}> {children} </CardContext.Provider>
}