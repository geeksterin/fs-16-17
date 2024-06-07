import React, { useContext } from "react";
import { CART_ACTION_TYPES, CartContext } from "../../router";

const CartItemCard = ({ item }) => {
  const { id, title, price, description, category, image, rating, quantity } =
    item;

  const { dispatch } = useContext(CartContext);

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="flex-shrink-0 w-24">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-700 font-medium mr-2">${price}</span>
          <span className="text-gray-500">Quantity: {quantity}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-gray-700 font-medium mr-2">
            Rating: {rating.rate}
          </span>
          <span className="text-gray-500">{rating.count} reviews</span>
        </div>
        <button
          className="text-sm text-red-600 mt-2"
          onClick={() =>
            dispatch({
              type: CART_ACTION_TYPES.REMOVE_FROM_CART,
              payload: id,
            })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
