import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import { CardContext } from '../../contexts/card.context'



const CartDropdown = () => {

    const navigation = useNavigate()

    const gotoCheckout = () => navigation('checkout');
    const {cartItems} = useContext(CardContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => 
                <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={gotoCheckout}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown