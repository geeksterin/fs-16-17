import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/userContext";

const DemoPost = () => {
  const [task, setTask] = useState("");
  const [response, setResponse] = useState("");
  const data = useContext(UserContext);
  console.log({ data });

  // URL - https://jsonplaceholder.typicode.com/posts, method - POST

  // const postTask = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           task: task,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const data = await response.json();
  //     console.log(data);
  //     setResponse(JSON.stringify(data));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const postTask = async () => {
    console.log("AXIOS");
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({ task }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log(data);
      setResponse(JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex border border-purple-800 border-2 p-3 rounded-md">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="text-black border border-black"
      />
      <button
        className="rounded bg-purple-800 text-white px-4 py-2 ml-2"
        onClick={postTask}
      >
        Add task
      </button>

      <p>Response - {response}</p>
    </div>
  );
};

export default DemoPost;
