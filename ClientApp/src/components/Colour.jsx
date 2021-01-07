
const ColourFromValue = (value) => {

  let arr = ["", "", ""];
  arr = arr.map((i) => {
    return Math.floor((value / 100) * (255 - 0 + 1) + 0).toString(16);
  });
  // return in hexadecimal color format
  return `#${arr.join("")}`;
};


export default ColourFromValue;