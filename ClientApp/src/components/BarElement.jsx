import React, { useState } from "react";
import RandColour from "./Colour";
import Colour from "./Colour";

const BarElement = (props) => {
  const [colour, setColour] = useState(props.colour);
  const { value } = props;

  return (
    <div
      style={{
        height: props.value * 2,
        backgroundSize: "150px",
        // backgroundColor: "pink",
        backgroundColor: props.colour
        // backgroundColor: RandColour()
      }}
      onClick={props.event}
      id={value}
      className="barElement"
    ></div>
  );
};

export default BarElement;
