function Greetings() {
  let name = "";

  function handleChange(event) {
    //update the name
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

export default Greetings;
