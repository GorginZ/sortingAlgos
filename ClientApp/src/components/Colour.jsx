
const RandColour = () => {
  let arr = ["", "", ""];
  arr = arr.map((i) => {
    // for each index in arr fill with random hex number
    return Math.floor(Math.random() * (255 - 0 + 1) + 0).toString(16);
  });
  // return in hexadecimal color format
  return `#${arr.join("")}`;
};

export default RandColour;