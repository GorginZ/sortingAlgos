import { Event, event, timers } from "jquery";
import React, { Component } from "react";
import Graph from "./Graph";
import Timer, { TimerContext } from "./Timer";
import { Visualizer } from "./Visualizer";

export class BubbleSort extends Component {
  static displayName = BubbleSort.name;

  constructor(props) {
    super(props);

    this.state = {
      collection: [[]],
      inputCollection: "",
    };

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
      <Timer>
        <TimerContext.Consumer>
          {(currentItteration) => (
            <>
              <h1>Bubble Sort</h1>
              <div className="mainText">
                <p>
                  To see bubble sort in action, enter a collcetion below, eg:
                  34,5,4,28,4,38,99,23,12,4,3,2,5,8,5,4,3,2,4,5, hit sort
                  collection - this will get a collection of each itteration of
                  the sort. Hit 'Start Itterating' to tick through each step of
                  the sort. You can pause and re-set the ticker
                </p>
              </div>

              <div className="inputContainer">
                <Graph
                  className="graphElement"
                  data={this.state.collection[currentItteration]}
                ></Graph>

                <div className="inputField">
                  <input
                    className="inputField"
                    placeholder=""
                    onChange={this.handleChange}
                  ></input>
                  <button
                    className="button"
                    onClick={this.getSortedItterationsData}
                  >
                    Get Sorted Collection
                  </button>
                </div>
              </div>
              <p aria-live="polite">
                Current itteration: <strong>{currentItteration}</strong>
              </p>
            </>
          )}
        </TimerContext.Consumer>
      </Timer>
    );
  }
}
