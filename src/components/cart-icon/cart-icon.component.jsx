import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles'
// import  { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CardContext } from '../../contexts/card.context'
const CartIcon = () => {

    const {isCardOpen, setIsCardOpen, cartCount} = useContext(CardContext);

    const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen);
    return (
        // <ShoppingIcon />
        <CartIconContainer onClick={toggleIsCardOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;