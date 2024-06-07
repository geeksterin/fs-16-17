import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealsBasedOnCategories } from "../../api";

const CategoryMeals = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMealsBasedOnCategories(category).then(setMeals).catch(console.log);
  }, [category]);

  const onMealClick = (idMeal) => navigate(`/meal/${idMeal}`);

  return (
    <>
      <h1 className="text-[32px]">Meals</h1>
      <div className="flex flex-wrap gap-4  p-10">
        {meals.map(({ strMeal, idMeal }) => (
          <p
            className="cursor-pointer p-4 bg-slate-500 text-white"
            key={idMeal}
            onClick={() => onMealClick(idMeal)}
          >
            {strMeal}
          </p>
        ))}
      </div>
    </>
  );
};

export default CategoryMeals;
