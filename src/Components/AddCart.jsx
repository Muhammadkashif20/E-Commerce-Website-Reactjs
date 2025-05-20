import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ShoppingCart = () => {
  const { cartItem,removeItemFromCart,addToCart,decreaseItemFromCart} = useContext(cartContext);
  console.log("cartItem=>", cartItem);
  const totalQuantity = cartItem?.reduce((total, current) => total + current.quantity, 0);
  const totalAmount = cartItem?.reduce((total, current) => total + current.quantity * current.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-20">
      <h2 className="text-center mb-6 text-4xl font-bold text-gray-700 ">
        🛒 Shopping Cart 
      </h2>

    {cartItem.length > 0 && (
  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
    {/* Quantity Box */}
    <div className="flex flex-col items-center bg-white border shadow rounded-xl px-6 py-4 w-full sm:w-auto text-center">
      <p className="text-sm text-gray-500">Total Quantity</p>
      <p className="text-xl font-bold text-blue-600">{totalQuantity}</p>
    </div>

    {/* Amount Box */}
    <div className="flex flex-col items-center bg-white border shadow rounded-xl px-6 py-4 w-full sm:w-auto text-center">
      <p className="text-sm text-gray-500">Total Amount</p>
      <p className="text-xl font-bold text-green-600">${totalAmount.toFixed(2)}</p>
    </div>

    {/* Checkout Button */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium  px-8 py-4 rounded-xl shadow transition w-full sm:w-auto">
       Checkout
    </button>
  </div>
)}


      {cartItem.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 mx-auto max-w-5xl">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border hover:shadow-md transition"
            >
              {/* Image + Info */}
              <div className="flex items-center gap-5 w-full md:w-1/2">
                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border bg-gray-100">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="text-xs inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {item.category}
                  </span>
                  <p className="text-gray-500 text-sm">Unit Price: ${item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm text-gray-600 font-medium">Quantity</span>
                <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg shadow-inner">
                  <Button icon={<MinusOutlined className="text-base" />} disabled={item.quantity===1} onClick={()=>decreaseItemFromCart(item.id)} className="hover:text-blue-600 transition" >
                    
                  </Button>
                  <span className="text-base font-semibold text-gray-800">
                    {item.quantity}
                  </span>
                  <Button icon={<PlusOutlined className="text-base" />} onClick={()=>addToCart(item)} className="hover:text-blue-600 transition">
                  </Button>
                </div>
              </div>

              {/* Delete Button */}
              <div>
                <Button
                  className="flex items-center gap-1 text-red-500 hover:text-red-600 transition text-sm font-medium"
                  title="Remove Item"
                  onClick={()=>removeItemFromCart(item.id)}
                >
                  <DeleteOutlined className="text-base" />
                  <span className="hidden sm:inline" >Remove</span>
                  </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
