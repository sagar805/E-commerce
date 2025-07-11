import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri'; // ✅ Import the icon

const CartContents = () => {
  const CartProducts = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      price: 15,
      quantity: 1, // ✅ Add quantity
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "T-Jeans",
      size: "L",
      color: "Black",
      price: 25,
      quantity: 1, // ✅ Add quantity
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div className="space-y-4">
      {CartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-start justify-between py-4 border-b"
        >
          {/* Left side: image and details */}
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | Color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
              </div>
            </div>
          </div>

          {/* Right side: price and delete */}
          <div className="flex flex-col items-end">
            <p className="text-md font-semibold">
              ${product.price.toLocaleString()}
            </p>
            <button className="mt-2">
              <RiDeleteBin3Line className="h-5 w-5 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
