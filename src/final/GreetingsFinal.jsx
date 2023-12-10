import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) ?? defaultValue,
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

function GreetingsFinal() {
  const [name, setName] = useLocalStorageState("name", "Hristijan");

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

export default GreetingsFinal;
