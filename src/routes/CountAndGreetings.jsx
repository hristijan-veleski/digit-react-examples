import { useState } from "react";

function CountAndGreetings() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <Greeting name={name} setName={setName} />
      <Count count={count} setCount={setCount} />
    </div>
  );
}
function Count({ count, setCount }) {
  function handleChange() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={handleChange}>Increase</button>
      <span>{count}</span>
    </div>
  );
}

function Greeting({ name, setName }) {
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={name}
        />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

export default CountAndGreetings;
