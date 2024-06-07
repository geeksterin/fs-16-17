import { useState } from "react";

// react features - state, props, context, ref, jsx, memo,
// hooks - set of functions, which helps us to use react features like state, context or memo in functional components

// closure pattern
const LearnState = () => {
  const [name, setName] = useState("John");
  // let name = "John doe";

  const changeName = () => {
    setName(name + " Sharma");
    // console.log(name);
    // name = "Jane";
    // console.log(name);
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={changeName}>Change name!</button>
    </div>
  );
};

export default LearnState;
