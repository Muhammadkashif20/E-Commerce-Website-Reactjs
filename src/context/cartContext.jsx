import { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { message } from "antd";

export const cartContext=createContext()
const CartContextProvider=({children})=>{
  const [cartItem,setCartItem]=useState(()=>{
      const getItem=localStorage.getItem("cartItem")
  return getItem ? JSON.parse(getItem) : []
  });
  console.log("cartItem=>", cartItem);
  console.log("cartItemLength=>", cartItem.length);
  
    useEffect(()=>{
    const saveItem=localStorage.setItem("cartItem",JSON.stringify(cartItem))
    console.log("saveItem=>", saveItem);
  },[cartItem])

    const authData = JSON.parse(localStorage.getItem("formData"));
  const addToCart=(item)=>{
      const arr=[...cartItem];
      const itemIndex=cartItem.findIndex((data)=>data.id == item.id)
      if(itemIndex == -1){
        setCartItem([...cartItem,{...item,quantity:1}])
      }
      else{
        arr[itemIndex].quantity++;
        setCartItem(arr)
      }
      if(!authData) return message.error("Please login to add items to cart!")
      }

       const decreaseItemFromCart=(id)=>{
      const arr=[...cartItem];
      const itemIndex=cartItem.findIndex((data)=>data.id == id)
        arr[itemIndex].quantity--;
        setCartItem(arr)
      }

        const removeItemFromCart=(id)=>{
            const arr=[...cartItem];
           const itemIndex=cartItem.findIndex((data)=>data.id == id)
          arr.splice(itemIndex,1)
          setCartItem(arr)
        }
        
        const isItemAdded=(id)=>{
          const arr=cartItem;
          const itemIndex=cartItem.findIndex((data)=>data.id == id)
          if(itemIndex == -1){
            return null
          }
          else{
            return arr[itemIndex]
          }
        }
        return(
          <cartContext.Provider value={{cartItem,decreaseItemFromCart,addToCart,removeItemFromCart,isItemAdded}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartContextProvider