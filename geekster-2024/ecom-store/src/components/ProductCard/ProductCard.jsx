import PropTypes from "prop-types";
import { memo, useContext } from "react";
import { CART_ACTION_TYPES, CartContext } from "../../router";

const ProductCard = ({ product, onClick, toast }) => {
  const { dispatch, cart } = useContext(CartContext);

  const onAddToCart = (e) => {
    e.stopPropagation();
    dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product });
    toast.success("Item added to cart!");
  };

  const isProductPresentInCart = cart?.items?.find(
    ({ id }) => id === product.id
  );

  return (
    <div
      className="bg-white rounded-lg shadow-lg cursor-pointer p-4 w-[300px]"
      onClick={() => onClick(product.id)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="max-h-36 object-contain rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h2>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-gray-900">
          ${product.price}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 disabled:bg-gray-400"
          onClick={onAddToCart}
          disabled={isProductPresentInCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  toast: PropTypes.func,
};

const MemoizedProductCard = memo(ProductCard);
export default MemoizedProductCard;
