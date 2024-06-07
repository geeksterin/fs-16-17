import { useState } from "react";
import { v4 as generateUniqueId } from "uuid";
import TodoListItem from "../TodoListItem/TodoListItem";
import useTodos from "../../hooks/useTodos/useTodos";

const generateTodo = (task) => {
  return {
    id: generateUniqueId(),
    title: task,
    completed: false,
    timestamp: Date.now(),
  };
};

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const { allTodos, setAllTodos } = useTodos();

  const onTodoChange = (e) => setTodo(e.target.value);

  const deleteTodo = (id) =>
    setAllTodos(allTodos.filter((todo) => todo.id !== id));

  const toggleIsCompleted = (id) => {
    const updatedTodos = allTodos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }

      todo.completed = !todo.completed;
      return todo;
    });

    setAllTodos(updatedTodos);
  };

  const addTodo = () => {
    setAllTodos([...allTodos, generateTodo(todo)]);
    setTodo("");
  };

  const renderTodoList = () =>
    allTodos.map((todo) => (
      <TodoListItem
        todo={todo}
        deleteTodo={deleteTodo}
        key={todo.id}
        toggleIsCompleted={toggleIsCompleted}
      />
    ));

  console.log(allTodos);

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add todo"
        value={todo}
        onChange={onTodoChange}
      />
      <button onClick={addTodo}>Add todo</button>
      {allTodos.length === 0 && <h4>Empty list. Please add todos.</h4>}
      <ol>{renderTodoList()}</ol>
    </div>
  );
};

export default TodoList;

/**
 * 1. Delete todo
 * 2. Edit todo
 * 3. Mark as completed
 * 4. Date and time
 * 5. Drag--- not doing
 * 6. Sorting
 * 7. Filter
 * 8. Persistence
 */

// GET https://api.geekster.com/api/v1/orders
// POST https://api.geekster.com/api/v1/orders
// GET https://api.geekster.com/api/v1/dashboard
// GET https://api.geekster.com/api/v1/profile
// PATCH https://api.geekster.com/api/v1/profile
// GET https://api.geekster.com/api/v1/assignments
// POST https://api.geekster.com/api/v1/assignments

// geekster.com
// api.geekster.com
