import { useReducer } from "react";

function counterFn(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;

    default:
      throw new Error("counterFn : Invalid action type");
  }
}

function CountReducer() {
  const [state, dispatch] = useReducer(counterFn, 0);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: 1 });
        }}
      >
        Decrement
      </button>
      <h1>{state}</h1>
    </>
  );
}

export default CountReducer;
