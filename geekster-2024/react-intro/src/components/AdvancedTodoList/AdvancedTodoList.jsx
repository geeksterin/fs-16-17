import useTodos from "../../hooks/useTodos/useTodos";

const AdvancedTodoList = (props) => {
  const { allTodos, pets } = useTodos();
  console.log(pets);
  return <div>AdvancedTodoList</div>;
};

export default AdvancedTodoList;
