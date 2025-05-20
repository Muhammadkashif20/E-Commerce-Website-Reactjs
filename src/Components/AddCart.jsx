import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";

const ShoppingCart = () => {
  const { cartItem } = useContext(cartContext);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-20">
      <h2 className="text-center mb-10 text-3xl font-bold text-gray-800">
        🛒 Your Shopping Cart
      </h2>

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
              <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg">
                <button className="hover:text-blue-600 transition">
                  <MinusOutlined className="text-base" />
                </button>

                <span className="text-base font-medium text-gray-700">
                  {item.quantity}
                </span>

                <button className="hover:text-blue-600 transition">
                  <PlusOutlined className="text-base" />
                </button>
              </div>

              {/* Delete Button */}
              <div>
                <button
                  className="flex items-center gap-1 text-red-500 hover:text-red-600 transition text-sm font-medium"
                  title="Remove Item"
                >
                  <DeleteOutlined className="text-base" />
                  <span className="hidden sm:inline">Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
