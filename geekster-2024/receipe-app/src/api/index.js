import axios from "axios";

const api = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1"
});

const getAllCategories = async () => {
  try {
    const { data } = await api.get("/categories.php");
    return data?.categories ?? [];
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

const search = async (searchKey) => {
  try {
    const { data } = await api.get(`/search.php?s=${searchKey}`);
    return data?.meals ?? [];
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

const getMealsBasedOnCategories = async (categoryName) => {
  try {
    const { data } = await api.get(`/filter.php?c=${categoryName}`);
    return data?.meals ?? [];
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

const getMealDetails = async (mealId) => {
  try {
    const { data } = await api.get(`/lookup.php?i=${mealId}`);
    return data?.meals?.[0] ?? {};
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};

export { getAllCategories, getMealsBasedOnCategories, getMealDetails, search };
