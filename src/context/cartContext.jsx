import { createContext, useState } from "react";

export const cartContext=createContext()
const CartContextProvider=({children})=>{
    const [cartItem,setCartItem]=useState([]);
    console.log("cartItem=>",cartItem);
    
    const addToCart=(item)=>{
        // if item is exist 
        const itemIsExist=cartItem.find((cartItem)=>cartItem.id == item.id)
        if(itemIsExist){
            cartItem.push({...item,quantity:itemIsExist.quantity+1}) 
        }
        else{
          cartItem.push({...item,quantity:1})
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
