import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'
import { useContext } from 'react'
import { CardContext } from '../../contexts/card.context'



const CartDropdown = () => {

    const navigation = useNavigate()

    const gotoCheckout = () => navigation('checkout');
    const {cartItems} = useContext(CardContext);
    return (
        <CartDropdownContainer>
            {
                cartItems.length ? (
                <CartItems>
                {cartItems.map((item) => 
                <CartItem key={item.id} cartItem={item}/>)}
                </CartItems>
                ) : 
                (<EmptyMessage>Your cart dropdown is empty</EmptyMessage>)
            }
            
            <Button onClick={gotoCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown