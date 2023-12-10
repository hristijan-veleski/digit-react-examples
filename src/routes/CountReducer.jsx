import { useReducer } from "react";

function counterFn(state, action) {}

function CountReducer() {
  const [state, dispatch] = useReducer(counterFn, 0);

  return (
    <>
      <button onClick={() => {}}>Increment</button>
      <button onClick={() => {}}>Decrement</button>
      <h1>{state}</h1>
    </>
  );
}

export default CountReducer;
