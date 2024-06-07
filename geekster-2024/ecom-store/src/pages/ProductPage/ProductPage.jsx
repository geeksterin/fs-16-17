import { useEffect, useState } from "react";
import { getProductById } from "../../apis";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((data) => setProduct(data))
      .catch(console.log);
  }, [productId]);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-auto w-full object-contain rounded-md shadow-lg"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold text-gray-900 mr-4">
              ${product.price}
            </span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
