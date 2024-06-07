const INITIAL_STATE = [{ task: "FIrst task", id: 1, isCompleted: false}]

const todosReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, {task: action.payload, id: state.length+1, isCompleted: false}]
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload)
    case "MARK_AS_COMPLETE":
      return state.map(todo => todo.id===action.payload ? {...todo, isCompleted: !todo.isCompleted} : todo)
    default:
      return state
  }
}


export default todosReducer