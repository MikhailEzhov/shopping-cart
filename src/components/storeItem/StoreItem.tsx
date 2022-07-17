import './storeItem.scss';
import { Button } from "react-bootstrap";



type StoreItemsProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}


function StoreItem({ id, name, price, imgUrl}: StoreItemsProps) {


    // const quantity= 0;
    const quantity: number = 0;


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
                    <Button className='store-item__button'>+ Add to Cart</Button>
                    :
                    <>
                        <div>
                            <Button>-</Button>
                                <span className='m-2'>{quantity} in cart</span>
                            <Button>+</Button>
                        </div>
                        <Button className='m-2' variant="danger" size="sm">Remove</Button>
                    </>
                    
                }
            </div>
        </div>
    )
};

export default StoreItem;