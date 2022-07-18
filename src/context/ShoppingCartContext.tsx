import { createContext, ReactNode, useContext, useState } from "react";



type ShoppingCartProviderPropsControl = {
    children: ReactNode
};

type CartItemControl = {
    id: number
    quatity: number
}

type ShoppingCartContextControl = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}



const ShoppingCartContext = createContext({} as ShoppingCartContextControl);

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
};



export function ShoppingCartProvider({ children }: ShoppingCartProviderPropsControl) {

    const [cartItems, setCartItems] = useState<CartItemControl[]>([])

    function getItemQuantity(id: number) {
        // возвращает элемент по id и у него есть quatity ИЛИ возвращает 0
        return cartItems.find(item => item.id === id)?.quatity || 0
    }

    function increaseCartQuantity(id: number) {
        // если у элемента по id:
        // quatity равен null, то ставим 1
        // quatity НЕ равен null, то увеличиваем на 1
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quatity: 1}]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {...item, quatity: item.quatity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        // если у элемента по id:
        // quatity равен 1, то обнуляем
        // quatity больше 1, то уменьшаем на 1
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quatity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return {...item, quatity: item.quatity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        // убрать элемент по id из карзины
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider 
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart
                }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};