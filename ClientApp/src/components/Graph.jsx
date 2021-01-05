import React, { PureComponent } from "react";
import BarElement from "./BarElement";

class Graph extends PureComponent {
  constructor(props) {
    super(props);
  const { data } = props;
    // const barElements = props;


  console.log(props[0] + " props constructor")
  // const [data, setData] = useState(props);
  // console.log(props.data)

    // const state = { data: this.props, currentItteration: [] };
    // const state = {data: this.state} 
    
  }


  barChartConstructor = () => {
    console.log(this.props.data)
    const barElements = this.props.data;
    // const barElements = this.props;
    // const barElements = [0,0,9,8,7,7,6,5,4,3,2];

    barElements.forEach((element) => {
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
