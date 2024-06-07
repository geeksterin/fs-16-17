// ref - a way to access dom nodes

import React, { useEffect, useRef, useState } from "react";

// build a form, when the user loads on the page which contains
// you want to focus automatically

const Form = () => {
  const inputRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  console.log("REndered");

  const updateValue = () => {
    inputRef.current.value = "something@example.com";
  };

  return (
    // <form>
    <>
      <input type="text" placeholder="email" ref={inputRef} />
      <button onClick={updateValue}>Update value</button>
      <input type="text" placeholder="password" ref={passwordRef} />
    </>
  );
};

export default Form;
