import { Event, event } from "jquery";
import React, { Component } from "react";
import Graph from "./Graph";
import { Visualizer } from "./Visualizer";

export class BubbleSort extends Component {
  static displayName = BubbleSort.name;

  constructor(props) {
    super(props);
    // this.state = { collection: [], inputCollection: "", currentItteration: 0 };
    this.state = { collection: [[]], inputCollection: "", currentItteration: 0 };
    this.incrementItteration = this.incrementItteration.bind(this);


    this.handleChange = this.handleChange.bind(this);
  }

  getSortedItterationsData = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ "Collection": {inputCollection: this.state.inputCollection }}),
      body: JSON.stringify(this.state.inputCollection),
    };
    fetch("sorting", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ collection: data }));
  };

  incrementItteration() {
    this.setState({
      collection: this.state.collection, currentItteration: this.state.currentItteration + 1,
    });
  }

  async populateCollection() {
    const response = await fetch("sorter");
    const data = await response.json();
    this.setState({ collection: data });
  }
  handleChange = (event) => {
    this.state.inputCollection = event.target.value;
  };

  render() {
    return (
      <>
        <div>
          <h4>Enter a collection to sort</h4>
          <input
            placeholder="Enter collection to sort eg: 0,2,5,3,2,1,3"
            onChange={this.handleChange}
          ></input>
        </div>
        {console.log(this.state.collection[this.state.currentItteration])}

        <Graph
          data={this.state.collection[this.state.currentItteration]}
        ></Graph>

        {/* <Graph data={[9,4,3,2,1]}></Graph> */}
        <h1>Bubble Sort</h1>
        <p aria-live="polite">
          Current itteration: <strong>{this.state.currentItteration}</strong>
        </p>
        <button
          className="btn btn-primary"
          onClick={this.getSortedItterationsData}
        >
          SortCollection
        </button>
        <button
          className="btn btn-primary"
          onClick={this.incrementItteration}
        >
          Itterate
        </button>

      </>
    );
  }
}
