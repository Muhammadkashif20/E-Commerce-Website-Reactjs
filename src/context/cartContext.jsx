import { createContext, useState } from "react";

export const cartContext=createContext()
const CartContextProvider=({children})=>{
    const [cartItem,setCartItem]=useState([]);
    const addToCart=(item)=>{
        // if item is exist 
        const existItem=cartItem.find((cartItem)=>cartItem.id == item.id)
        if(existItem){
            cartItem.push({...item,quantity:existItem.quantity+1}) 
        }
        else{
            cartItem[existItem].quantity+1
        }
        const removeItem=(item)=>{
          const removeItem=cartItem.filter((cartItem)=>cartItem.id !== item.id)
          setCartItem(removeItem)
        }
        const isItemAdded=(item)=>{
          const isItemAdded=cartItem.find((cartItem)=>cartItem.id == item.id)
          if(isItemAdded){
            return true
          }
          else{
            return false
          }
        }

    }
    return(
        <CartContextProvider.Provider value=>
            {children}
        </CartContextProvider.Provider>
    )
    
}
export default CartContextProvider
