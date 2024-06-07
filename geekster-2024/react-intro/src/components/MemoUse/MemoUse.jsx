import { useMemo, useState } from "react";

const prime = function primeMover(n) {
  var primes = [2];
  var x = 3;
  var count = 0;
  do {
    for (var y = 2; y < x; y++) {
      if (x % y === 0) {
        count++;
      }
    }
    if (count === 0) {
      primes.push(x);
      x++;
    } else {
      x++;
      count = 0;
    }
  } while (primes.length < n);
  return primes[primes.length - 1];
};

const MemoUse = () => {
  const [number, setNumber] = useState(5000);
  const [count, setCount] = useState(0);

  const primeResult = useMemo(() => prime(number), [number]);
  // const primeResult = prime(number);

  return (
    <div>
      Use Memo example
      <h1>{primeResult}</h1>
      <div
        className="p-4 m-4 border-2 border-black cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        <h3>Count: {count}</h3>
      </div>
    </div>
  );
};

export default MemoUse;
