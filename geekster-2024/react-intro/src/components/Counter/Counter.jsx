import useLocalStorage from "beautiful-react-hooks/useLocalStorage";

const Counter = () => {
  // const localCount = localStorage.getItem("count");
  const [count, setCount] = useLocalStorage("count", 0);
  // const [name, setName] = useState("John doe");

  // syntax
  // mounts - perform some operation
  // useEffect(function() {
  //   console.log("from use efect")
  // })
  // scenarios
  // 1. Run some operation on load / on mount only
  // useEffect(() => {
  //   console.log("WOrks!");
  // }, []);

  // 2. Run some operation on load + on mentioned variable change
  // useEffect(() => {
  //   localStorage.setItem("count", count);
  // }, [count]);

  // 3. Run on load and every state change
  // useEffect(() => {
  //   console.log("WOrks!");
  // });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

// const [name, setName] = useState("")
// const [email, setEmail] = useState("")

// useEffect(function add(a,b) {
//   console.log(a+b)
// }, [name])

// dependency array
// add(1,2)
