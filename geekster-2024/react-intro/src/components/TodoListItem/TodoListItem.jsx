import PropTypes from "prop-types";
import { useState } from "react";

const TodoListItem = ({ todo, deleteTodo, toggleIsCompleted }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [task, setTask] = useState(todo.title);

  console.log({ todo });

  const onTaskChange = (e) => setTask(e.target.value);

  return (
    <div key={todo.id} className="flex">
      {isEditable ? (
        <input value={task} onChange={onTaskChange} />
      ) : (
        <li className={todo.completed ? "line-through" : ""}>{task}</li>
      )}
      <span
        className="cursor-pointer ml-2"
        title="Delete Todo"
        onClick={() => deleteTodo(todo.id)}
      >
        🗑
      </span>
      <span
        className="cursor-pointer ml-2"
        onClick={() => setIsEditable(!isEditable)}
        title="Edit todo"
      >
        {isEditable ? <>✅</> : <>✍🏻</>}
      </span>

      <span
        className="cursor-pointer ml-2"
        onClick={() => toggleIsCompleted(todo.id)}
        title="Toggle completion status"
      >
        {todo.completed ? <>✅</> : <>↩️</>}
      </span>
    </div>
  );
};

TodoListItem.propTypes = {
  deleteTodo: PropTypes.func,
  toggleIsCompleted: PropTypes.func,
  todo: PropTypes.object,
};

export default TodoListItem;
