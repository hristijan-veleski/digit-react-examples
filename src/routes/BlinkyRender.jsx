import { useState, useEffect } from "react";

function BlinkyRender() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(Math.round(2 + Math.random() * 200));
    }
  }, [value]);

  console.log("render", value);

  return <div onClick={() => setValue(0)}>value: {value}</div>;
}

export default BlinkyRender;
