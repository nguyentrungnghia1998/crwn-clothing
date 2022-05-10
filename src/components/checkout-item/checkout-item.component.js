import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CardContext } from '../../contexts/card.context';

const CheckoutItem = ({cartItem}) => {

    const {clearItemFromCart,addItemToCart,removeItemFromCart} = useContext(CardContext);
    const {id, name, price, quantity, imageUrl} = cartItem;
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    return (
        <div key={id} className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}></img>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;