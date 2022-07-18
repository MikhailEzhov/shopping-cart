import { createContext, ReactNode, useContext, useState } from "react";



type ShoppingItemProviderProps = {
    children: ReactNode
};

type ShoppingItemControl = {
    id: number
    quatity: number
}

type ShoppingItemContextControl = {
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeFromItem: (id: number) => void
}



const ShoppingItemContext = createContext({} as ShoppingItemContextControl);

export function useShoppingItem() {
    return useContext(ShoppingItemContext)
};



export function ShoppingItemProvider({ children }: ShoppingItemProviderProps) {

    const [shoppingItems, setShoppingItems] = useState<ShoppingItemControl[]>([])

    function getItemQuantity(id: number) {
        // возвращает элемент по id и у него есть quatity ИЛИ возвращает 0
        return shoppingItems.find(item => item.id === id)?.quatity || 0
    }

    function increaseItemQuantity(id: number) {
        // если у элемента по id:
        // quatity равен null, то ставим 1
        // quatity НЕ равен null, то увеличиваем на 1
        setShoppingItems(currentItems => {
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

    function decreaseItemQuantity(id: number) {
        // если у элемента по id:
        // quatity равен 1, то обнуляем
        // quatity больше 1, то уменьшаем на 1
        setShoppingItems(currentItems => {
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

    function removeFromItem(id: number) {
        // отключение элемента по id
        setShoppingItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingItemContext.Provider 
            value={{
                getItemQuantity,
                increaseItemQuantity,
                decreaseItemQuantity,
                removeFromItem
                }}>
            {children}
        </ShoppingItemContext.Provider>
    )
};