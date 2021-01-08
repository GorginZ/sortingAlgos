import React, { PureComponent } from "react";
import { setScrollbarWidth } from "reactstrap/lib/utils";
import BarElement from "./BarElement";
import ColourFromValue from "./Colour";

class Graph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { itteration: [] };
  }

  barChartConstructor = () => {
    const barElements = [];
    this.setState({ itteration: this.props.data });
    const bars = [this.state.itteration];

    bars[0] && bars[0].forEach((element) => {
      barElements.push(
        <BarElement value={element} event={this.props.barElementEvent} colour={ColourFromValue(element)} />
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
