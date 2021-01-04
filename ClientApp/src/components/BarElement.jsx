import React, { useState } from "react";

const BarElement = (props) => {
  const [colour, setColour] = useState(props.colour);
  // const { pairId } = props;
  const { value } = props;

  return (
    <div
      style={{
        height: props.value,
        backgroundImage: `url(${props.image})`,
        backgroundSize: "150px",
        backgroundColor: "red",
      }}
      onClick={props.event}
      id={value}
      className="barElement"
    ></div>
  );
};

export default BarElement;