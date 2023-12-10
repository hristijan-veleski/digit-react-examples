import { useState } from "react";

function CountAndGreetingsFinal() {
  return (
    <div>
      <Greeting />
      <Count />
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
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

function Greeting() {
  const [name, setName] = useState("");
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

export default CountAndGreetingsFinal;
