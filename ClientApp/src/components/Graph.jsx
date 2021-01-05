import React, { PureComponent } from "react";
import { setScrollbarWidth } from "reactstrap/lib/utils";
import BarElement from "./BarElement";

class Graph extends PureComponent {
  constructor(props) {
    super(props);
    const { data } = props;
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
        <BarElement value={element} event={this.props.barElementEvent} />
      );
    });
    return barElements;
  };

  render() {
    return (
      <div id="grid">
        <h1>GRAPH</h1>
        {this.barChartConstructor()}
      </div>
    );
  }
}

export default Graph;
