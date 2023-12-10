function CountDisplay() {
  return <p>The currect count is {1}</p>;
}
function CountButton() {
  return <button onClick={() => {}}>Increment</button>;
}

function CountContext() {
  return (
    <div>
      <CountButton />
      <CountDisplay />
    </div>
  );
}

export default CountContext;
