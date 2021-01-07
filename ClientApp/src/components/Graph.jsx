import React, { PureComponent } from "react";
import { setScrollbarWidth } from "reactstrap/lib/utils";
import BarElement from "./BarElement";

class Graph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { itteration: [] };
  }

  barChartConstructor = () => {
    console.log(this.props.data);
    const barElements = [];
    this.setState({ itteration: this.props.data });
    console.log(this.state.itteration + "itteration");
    const bars = [this.state.itteration];

    bars[0].forEach((element) => {
      console.log(element + " element");
      barElements.push(
        <BarElement value={element} event={this.props.barElementEvent} colour={400} />
      );
    });
    return barElements;
  };

  render() {
    return (
      <div id="grid">
        {this.barChartConstructor()}
      </div>
    );
  }
}

export default Graph;
