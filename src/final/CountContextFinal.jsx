import { createContext } from "react";
import { useContext, useState } from "react";

const CountCtx = createContext();
const SetCountCtx = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountCtx.Provider value={count}>
      <SetCountCtx.Provider value={setCount}>{children}</SetCountCtx.Provider>
    </CountCtx.Provider>
  );
}

function useCount() {
  const context = useContext(CountCtx);
  if (typeof context === "undefined") {
    throw new Error(
      "Please make sure that the provider is indeed a parent of the component",
    );
  }
  return context;
}
function useSetCountCtx() {
  const context = useContext(SetCountCtx);
  if (typeof context === "undefined") {
    throw new Error(
      "Please make sure that the provider is indeed a parent of the component",
    );
  }
  return context;
}

function CountDisplay() {
  const count = useCount();
  return <p>The currect count is {count}</p>;
}
function CountButton() {
  const setCount = useSetCountCtx();
  return (
    <button onClick={() => setCount((prevState) => prevState + 1)}>
      Increment
    </button>
  );
}

function CountContext() {
  return (
    <CountProvider>
      <CountButton></CountButton>
      <CountDisplay></CountDisplay>
    </CountProvider>
  );
}

export default CountContext;
