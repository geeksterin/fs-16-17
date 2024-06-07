import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Todo = () => {
  const [todo, setTodo] = useState("")

  const todos = useSelector(store => store.todos)
  const dispatch = useDispatch()


  const addTodo = () => {
    dispatch({type: "ADD_TODO", payload: todo})
    setTodo("")
  }


  const renderTodoList = () =>
    todos.map((todo) => (
      <p key={todo.id} style={{textDecoration: todo.isCompleted ?  "line-through" : ""}} onClick={() => dispatch({ type: "MARK_AS_COMPLETE", payload: todo.id})}>{todo.task}</p>
    ));

  return (
    <>
      <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add todo"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add todo</button>
      {todos.length === 0 && <h4>Empty list. Please add todos.</h4>}
      <ol>{renderTodoList()}</ol>
    </div>
    </>
  )
}

export default Todo;