import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealDetails } from "../../api";

const ReceipeDetails = () => {
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState({});

  useEffect(() => {
    getMealDetails(mealId).then(setMealDetails).catch(console.log);
  }, [mealId]);

  return <div>{JSON.stringify(mealDetails)}</div>;
};

export default ReceipeDetails;
