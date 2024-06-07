import { useReducer, useState } from "react";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };

    case "DECREMENT":
      return { ...state, count: state.count - action.payload };

    case "UPDATE_NAME":
      return {
        ...state,
        user: {
          name: "John doe",
        },
      };

    case "RESET":
      return { ...state, count: 0 };
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  const [incDecBy, setIncDecBy] = useState(1);

  const increment = () => dispatch({ type: "INCREMENT", payload: incDecBy });
  const decrement = () => dispatch({ type: "DECREMENT", payload: incDecBy });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <div>
      <input
        type="text"
        placeholder="increment by / decrement by"
        value={incDecBy}
        onChange={(e) => setIncDecBy(Number(e.target.value))}
      />
      <h1 className="text-3xl">{state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      {/* <h1 onClick={() => dispatch({ type: "UPDATE_NAME" })}>
        {state.user.name}
      </h1> */}
    </div>
  );
};

export default CounterWithReducer;
