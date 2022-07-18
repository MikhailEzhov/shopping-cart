import './storeItem.scss';
import { Button } from "react-bootstrap";
import { useShoppingItem } from '../../context/ShoppingItemContext';



type StoreItemsProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


function StoreItem({ id, name, price, imgUrl}: StoreItemsProps) {

    const {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromItem
    } = useShoppingItem();

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
                        onClick={() => increaseItemQuantity(id)}
                    >+ Add to Cart</Button>
                    :
                    <>
                        <div>
                            <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                                <span className='m-2'>{quantity} in cart</span>
                            <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                        </div>
                        <Button 
                            onClick={() => removeFromItem(id)}
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