import Button, {BUTTON_TYPES} from '../button/button.component';
import './product-card.styles.scss'
import { useContext } from 'react';
import { CardContext } from '../../contexts/card.context';
const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CardContext);

    const addProductToCart = () => addItemToCart(product);
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}></img>
            <div className='footer'>
                <span className="name">{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>Add to Card</Button>

        </div>
    )
}

export default ProductCard;