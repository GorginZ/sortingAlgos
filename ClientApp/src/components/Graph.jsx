
import React, { PureComponent } from "react";
import BarElement from "./BarElement";

class Graph extends PureComponent {
  constructor(props) {
    super(props);
    const state = { data: [] };
  }

  componentDidMount() {
    fetch(`https://pixabay.com/api/?key=17401644-d52a5734cec03a9bb1803044d&q=puppies&image_type=photo`)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  }

  shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }

  barChartConstructor = () => {
    const barElements = [5,4,3,2,1,4,54,3,1,54]
    // const barElements = [];
    for (let i = 0; i < 10; i++) {
      const image = this.state?.data.hits[i].webformatURL;
    //   for (let a = 0; a < 2; a++) {
        barElements.push(<BarElement image={image} value={i + 1} event={this.props.barElementEvent} />);
      }
    // }
    return this.shuffle(barElements)
  };

  render() {
    return <div id="grid">
      <h1>GRAPH</h1>
      {this.barChartConstructor()}
    </div>;
  }
}

export default Graph;