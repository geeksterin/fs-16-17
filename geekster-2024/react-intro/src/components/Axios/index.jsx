import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

//https://jsonplaceholder.typicode.com/todos
const Axios = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Axios;
