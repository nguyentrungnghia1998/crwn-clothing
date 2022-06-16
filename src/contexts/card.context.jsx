

import { createContext, useReducer} from "react";

import { createAction } from "../utils/reducer/reducer.utils";

const CART_REDUCE = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

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

const INITIAL_STATE = {
    isCardOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}
const cartReducer = (state, action) => {
    const {type,payload} = action
    switch (type){
        case CART_REDUCE.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_REDUCE.SET_IS_CART_OPEN:
            return {
                ...state,
                ...payload,
            }
        default:
            throw new Error(`Unhandled action type: ${type} in cartReducer`);
    }
}



export const CardProvider = ({children}) => {

    // const [isCardOpen, setIsCardOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);
    const [{cartItems,isCardOpen,cartCount,cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0);
        dispatch(
            createAction(
            CART_REDUCE.SET_CART_ITEMS,
            {cartItems: newCartItems, 
            cartCount: newCartCount,
            cartTotal: newCartTotal}
        ));
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems=addCardItems(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems=removeCardItems(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToRemove) => {
        const newCartItems=clearCardItems(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCardOpen = (bool) => {
        dispatch(createAction(CART_REDUCE.SET_IS_CART_OPEN, {isCardOpen: bool}));
    }

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