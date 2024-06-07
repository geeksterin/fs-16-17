import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Contacts from "./pages/Contacts/Contacts";
import Travel from "./pages/Travel/Travel";
import LearnState from "./components/LearnState/LearnState";
import Counter from "./components/Counter/Counter";
import TodoList from "./components/TodoList/TodoList";
import Axios from "./components/Axios";
import AdvancedTodoList from "./components/AdvancedTodoList/AdvancedTodoList";
import ContactCard from "./components/ContactCard/ContactCard";
import Performance from "./components/Performance/Performance";
import MemoUse from "./components/MemoUse/MemoUse";
import Form from "./components/Form/Form";
import CounterWithReducer from "./components/CounterWithReducer/CounterWithReducer";
import TodoListWithReducer from "./components/TodoListWithReducer/TodoListWithReducer";
import Authentication from "./components/Auth/Authentication";
import LegacyCounter from "./components/LegacyComponent";
import DemoPost from "./components/DemoPost";
import UserContext from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <LegacyCounter title="Legacy Counter" />
  <UserContext.Provider value={{ username: "john doe", age: 30 }}>
    <DemoPost />
  </UserContext.Provider>
  // <Contacts />
  // <ContactCard name={"John doe"} city={"Bangalore"} profession={"SSE"} />
  // </React.StrictMode>,
);
