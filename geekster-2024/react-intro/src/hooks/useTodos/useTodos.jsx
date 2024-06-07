import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils";
import axios from "axios";

const useTodos = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [pets, setPets] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axiosInstance.get("/todos", {});
      setAllTodos(response.data);
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  const fetchPets = async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      setPets(response.data);
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  useEffect(() => {
    fetchTodos();
    fetchPets();
  }, []);

  return { allTodos, setAllTodos, pets, setPets };
};

export default useTodos;
