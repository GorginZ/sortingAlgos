import { Event, event } from "jquery";
import React, { Component } from "react";
import Graph from "./Graph";
// import Visualizer from "./Visualizer";
import { Visualizer } from "./Visualizer";
// import { Visualizer } from "./Visualizer";
// import CollectionInput from "./Input";

export class BubbleSort extends Component {
  static displayName = BubbleSort.name;

  constructor(props) {
    super(props);
    this.state = { collection: [], inputCollection: "", currentItteration: 0 };
    this.incrementItteration = this.incrementItteration.bind(this);

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount = () => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ "Collection": {inputCollection: this.state.inputCollection }}),
      body: JSON.stringify( this.state.inputCollection ),



    };
    console.log(requestOptions.body + " request body");
    console.log(this.state.inputCollection + "input collection");
    console.log(this.state.collection + " collection")
    fetch("sorting", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ collection: data }));
  }

  incrementItteration() {
    this.setState({
      currentItteration: this.state.currentItteration + 1,
    });
  }
  async populateCollection() {
    const response = await fetch("sorter");
    const data = await response.json();
    this.setState({ collection: data });
  }
  handleChange = (event) => {
    this.state.inputCollection = event.target.value;
    // this.state.inputCollection = [event.target.value.to];
  };

  render() {
    return (
      <>
        <div>
          <h4>Enter a collection to sort</h4>
          <input
            placeholder="Enter collection to sort eg: 0,2,5,3,2,1,3"
            onChange={this.handleChange}></input>
        </div>

        <div>
          <Graph barElementEvent={this.handleClick}></Graph>
        </div>
          <h1>Bubble Sort</h1>
          <p aria-live="polite">
            Current itteration: <strong>{this.state.currentItteration}</strong>
          </p>
          <button
            className="btn btn-primary"
            onClick={this.componentDidMount}
          >
            Itterate
          </button>
      </>
    );
  }
}
