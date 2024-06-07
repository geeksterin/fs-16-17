import { useCallback, useEffect, useState } from "react";
import { getAllProducts } from "../../apis";

import { ToastContainer, toast } from "react-toastify";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Outlet, useNavigate } from "react-router-dom";

const Homepage = (props) => {
  console.log(props);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((e) => toast.error(e.message));
  }, []);

  const onProductClick = useCallback(
    (id) => {
      navigate(`/product/${id}`);
      console.log(id);
    },
    [navigate]
  );

  const renderProducts = () => {
    return products.map((product) => (
      <ProductCard
        product={product}
        key={product.id}
        onClick={onProductClick}
        toast={toast}
      />
    ));
  };

  return (
    <div className="flex flex-wrap gap-6 mx-auto justify-center bg-zinc-50">
      {renderProducts()}
      <ToastContainer />

      <Outlet />
    </div>
  );
};

export default Homepage;
