import { useCallback, useMemo, useState } from "react";
import UserCard from "../UserCard/UserCard";

const dummyUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Alice",
    email: "alice.doe@example.com",
    avatar: "https://via.placeholder.com/150",
  },
];

const Performance = () => {
  const [count, setCount] = useState(0);
  const [anotherState, setAnotherState] = useState("a");

  const onUserCardClick = useCallback(
    (id) => {
      console.log(`UserId - ${id} ${anotherState}`);
    },
    [anotherState]
  );

  // const onUserCardClick = (id) => {
  //   // const val = id * anotherState;
  //   console.log(`UserId - ${id}`);
  // };

  return (
    <div>
      <h1>Memo, useCallback, useMemo, useRef</h1>

      <div
        className="p-4 m-4 border-2 border-black cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        <h3>Count: {count}</h3>
      </div>

      <div
        className="p-4 m-4 border-2 border-black cursor-pointer"
        onClick={() => setAnotherState("b")}
      >
        <h3>Anotherstate: {anotherState}</h3>
      </div>

      <h1>Users:</h1>
      <div className="flex">
        {dummyUsers.map((user) => (
          <UserCard user={user} key={user.id} onClick={onUserCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Performance;
