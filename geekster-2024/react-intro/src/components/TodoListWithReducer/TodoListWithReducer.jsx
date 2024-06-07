import { useReducer, useState } from "react";
import { v4 as generateUniqueId } from "uuid";
import TodoListItem from "../TodoListItem/TodoListItem";

const generateTodo = (task) => {
  return {
    id: generateUniqueId(),
    title: task,
    completed: false,
    timestamp: Date.now(),
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const oldTodos = state.todos;
      return { ...state, todos: [...oldTodos, generateTodo(action.payload)] };
    }

    case "REMOVE_TODO": {
      const updatedTodos = state.todos.filter(
        ({ id }) => id !== action.payload
      );
      return { ...state, todos: updatedTodos };
    }

    case "TOGGLE_IS_COMPLETED": {
      // const foundTodo = state.todos.filter(({id}) => id === action.payload)
      // foundTodo[0].completed = !foundTodo[0].completed

      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
      return { ...state, todos: updatedTodos };
    }

    // case "EDIT_TODO":

    default:
      return state;
  }
};

const TodoListWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
  });
  const [task, setTask] = useState("");

  const onTodoChange = (e) => setTask(e.target.value);

  const addTodo = () => dispatch({ type: "ADD_TODO", payload: task });
  const deleteTodo = (id) => dispatch({ type: "REMOVE_TODO", payload: id });
  const toggleIsCompleted = (id) =>
    dispatch({ type: "TOGGLE_IS_COMPLETED", payload: id });

  const renderTodoList = () =>
    state.todos.map((todo) => (
      <TodoListItem
        todo={todo}
        deleteTodo={deleteTodo}
        key={todo.id}
        toggleIsCompleted={toggleIsCompleted}
      />
    ));

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add todo"
        value={task}
        onChange={onTodoChange}
      />
      <button onClick={addTodo}>Add todo</button>
      {state.todos.length === 0 && <h4>Empty list. Please add todos.</h4>}
      <ol>{renderTodoList()}</ol>
    </div>
  );
};

export default TodoListWithReducer;
