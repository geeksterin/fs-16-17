import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAngry,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FontAwesomeIcon
        icon={faAddressBook}
        width={50}
        height={50}
        className="text-3xl"
      />
      <FontAwesomeIcon icon={faBookmark} width={50} height={50} />
    </>
  );
}

export default App;
