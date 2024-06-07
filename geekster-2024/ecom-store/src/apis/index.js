import axios from "axios";

// Homepage - https://fakestoreapi.com/products GET
// Product page - https://fakestoreapi.com/products/:id GET
// Carts - https://fakestoreapi.com/carts GET

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    if (response.status !== 200) {
      throw new Error("Failed to fetch products!");
    }
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch products!");
  }
};

const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error(`Failed to fetch the product with id - ${id}`);
  }
};

const getCartItems = async () => {
  try {
    const response = await axiosInstance.get("/carts");
    return response.data;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch cart items!");
  }
};

export { getAllProducts, getProductById, getCartItems };
