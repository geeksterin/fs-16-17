import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../../api";

const Header = () => {
  const [searchKey, setSearchKey] = useState("");
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  const onSearchClick = () => {
    // navigate to home page
    navigate("/");

    // make search call
    search(searchKey).then(setMeals).catch(console.log);
  };

  const renderMealsSection = () => {
    if (meals.length === 0) return;

    return meals.map(({ strMeal, idMeal }) => <p key={idMeal}>{strMeal}</p>);
  };

  return (
    <div>
      <div className="min-h-96 flex flex-col gap-4 justify-center items-center bg-slate-400">
        <h1 className="text-3xl text-white">Receipe app</h1>
        <div className="flex gap-3">
          <input
            type="search"
            placeholder="search"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button onClick={onSearchClick}>🔎</button>
        </div>
      </div>
      {renderMealsSection()}
    </div>
  );
};

export default Header;
