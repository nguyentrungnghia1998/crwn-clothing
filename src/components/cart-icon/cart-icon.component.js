import './cart-icon.styles.scss'
import  { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CardContext } from '../../contexts/card.context'
const CartIcon = () => {

    const {isCardOpen, setIsCardOpen} = useContext(CardContext);

    const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen);
    return (
        // <ShoppingIcon />
        <div className='cart-icon-container' onClick={toggleIsCardOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;