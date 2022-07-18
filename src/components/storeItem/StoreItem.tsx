import './storeItem.scss';
import { Button } from "react-bootstrap";
import { useShoppingCart } from '../../context/ShoppingCartContext';



type StoreItemsProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


function StoreItem({ id, name, price, imgUrl}: StoreItemsProps) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <div className='store-item'>
            <img className='store-item__picture' src={imgUrl} alt="picture" />
            <div className='store-item__block-info'>
                <span>{name}</span>
                <span>${price}</span>
            </div>
            <div className='store-item__block-buttons'>
                {quantity === 0 
                    ? 
                    <Button 
                        className='store-item__button'
                        onClick={() => increaseCartQuantity(id)}
                    >+ Add to Cart</Button>
                    :
                    <>
                        <div>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <span className='m-2'>{quantity} in cart</span>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button 
                            onClick={() => removeFromCart(id)}
                            className='m-2'
                            variant="danger"
                            size="sm"
                        >Remove</Button>
                    </>
                }
            </div>
        </div>
    )
};

export default StoreItem;