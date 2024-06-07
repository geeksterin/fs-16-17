import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";
import { addTodo, removeTodo } from "./slices/todosSlice";

function App() {
  const [todo, setTodo] = useState("");
  const counter = useSelector((store) => store.counter);
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  console.log(todos);

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(increment())}>increment</button>
        count is {counter.count}
        <button onClick={() => dispatch(decrement(4))}>decrement</button>
      </div>

      <div>
        <h2>Todo List</h2>
        <input
          type="text"
          placeholder="Add todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo(todo))}>Add todo</button>
        {todos.length === 0 && <h4>Empty list. Please add todos.</h4>}
        <ol>
          {todos.map((todo, idx) => (
            <li key={idx} onClick={() => dispatch(removeTodo(todo))}>
              {todo}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
