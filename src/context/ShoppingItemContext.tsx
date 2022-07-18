import { createContext, ReactNode, useContext } from "react";



type ShoppingItemProviderProps = {
    children: ReactNode
};



const ShoppingItemContext = createContext({});

export function useShoppingItem() {
    return useContext(ShoppingItemContext)
}



export function ShoppingItemProvider({ children }: ShoppingItemProviderProps) {
    return (
        <ShoppingItemContext.Provider value={{}}>
            {children}
        </ShoppingItemContext.Provider>
    )
}