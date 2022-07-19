import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Button } from "react-bootstrap";
import data from "../../data/items.json";
import "./shoppingCartItem.scss";



type ShoppingCartItemPropsControl = {
    id: number
    quatity: number
}



export function ShoppingCartItem({ id, quatity }: ShoppingCartItemPropsControl) {

    const { removeFromCart } = useShoppingCart();

    const item = data.find(elem => elem.id === id);

    if (item == null) return null;

    return (
        <div className="shopping-cart-item">
            <img className="shopping-cart-item__picture" src={item.imgUrl} alt="picture" />

            <h2 className="shopping-cart-item__title">{item.name}</h2>

            <div className="shopping-cart-item__price">
                {quatity > 1
                    ?
                    <span className="shopping-cart-item__text-small">
                    ${item.price} 
                        <span> x{quatity}</span>
                    </span>
                    :
                    null
                }
                <span>${item.price * quatity}</span>
            </div>

            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >&times;</Button>
        </div>
    )
}