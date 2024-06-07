import { useEffect, useState } from "react";
import { getAllCategories } from "../../api";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then(setCategories).catch(console.log);
  }, []);

  const onCategoryClick = (category) => navigate(`/meal/category/${category}`);

  return (
    <>
      <h1 className="text-[32px]">Categories</h1>
      <div className="flex flex-wrap gap-4  p-10">
        {categories.map(({ strCategory, idCategory }) => (
          <p
            className="cursor-pointer p-4 bg-slate-500 text-white"
            key={idCategory}
            onClick={() => onCategoryClick(strCategory)}
          >
            {strCategory}
          </p>
        ))}
      </div>
    </>
  );
};

export default Categories;
