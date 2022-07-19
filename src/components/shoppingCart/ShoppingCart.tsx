import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ShoppingCartItem } from "../shoppingCartItem/ShoppingCartItem";
import data from "../../data/items.json";



type ShoppingCartPropsControl = {
    isOpen: boolean
}



function ShoppingCart({ isOpen }: ShoppingCartPropsControl) {

    const { closeCart, cartItems } = useShoppingCart();

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div>
                    {cartItems.map(item => (
                        <ShoppingCartItem key={item.id} {...item}/>
                    ))}
                </div>
                <div className="float-end">
                    <b>Total: $
                        {
                        cartItems.reduce((total, cartItem) => {
                            const item = data.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quatity
                        }, 0)
                        }
                    </b>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart;