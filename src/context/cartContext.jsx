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
        setCartItem([...cartItem])
      }
        function removeItem(item){
          const itemArr=cartItem
          const itemRemove=cartItem.filter((cartItem)=>cartItem.id !== item.id)
          setCartItem([...itemArr])
        }
        
        const isItemAdded=(item)=>{
          const ItemAdded=cartItem.find((cartItem)=>cartItem.id == item.id)
          if(ItemAdded){
            return true
          }
          else{
            return false
          }
        }
      
        return(
          <cartContext.Provider value={{cartItem,addToCart,removeItem,isItemAdded}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartContextProvider
