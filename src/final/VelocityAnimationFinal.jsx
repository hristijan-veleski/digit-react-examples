import { useEffect } from "react";
import { useRef } from "react";
import Velocity from "velocity-animate";

function VelocityExampleFinal() {
  const ref = useRef(null);

  useEffect(() => {
    Velocity(
      ref.current,
      {
        scale: 2,
        translateX: "200px",
        rotateZ: "45deg",
      },
      { duration: 200, loop: 10 },
    ).then(() => console.log("animation complete"));
  });

  return <div ref={ref}>VelocityExample</div>;
}

export default VelocityExampleFinal;
