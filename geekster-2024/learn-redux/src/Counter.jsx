import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
  const counter = useSelector(store => store.counter)
  const dispatch = useDispatch()
  // console.log({counter})

  const increment = () => {
    dispatch({ type: "INCREMENT"})
  }

  const decrement = () => dispatch({ type: "DECREMENT"})
  const reset = () => dispatch({ type: "RESET"})

  return (
    <>
      
      <div className="card">
          count is {counter.count}
        <button onClick={increment}>
          increment
        </button>
        <button onClick={decrement}>
          decrement
        </button>
        <button onClick={reset}>
          reset
        </button>
      </div>
      
    </>
  )
}

export default Counter