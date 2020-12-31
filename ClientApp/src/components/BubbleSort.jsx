import { Event, event } from "jquery";
import React, { Component } from "react";
// import CollectionInput from "./Input";

export class BubbleSort extends Component {
  static displayName = BubbleSort.name;

  constructor(props) {
    super(props);
    this.state = { collection: [], inputCollection: [], currentItteration: 0 };
    this.incrementItteration = this.incrementItteration.bind(this);
    // this.handleChange = this.handleChange(input.target.value).bind(this);
  }
  componentDidMount(inputCollection) {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ collection: inputCollection }),
    };
    fetch("sorting", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ collection: data }));
  }


  incrementItteration() {
    this.setState({
      currentItteration: this.state.currentItteration + 1,
    });
  }


  render() {
    return (
      <>
        <div>
          <h4>Enter a collection to sort</h4>
          <input
            placeholder="Enter collection to sort eg: 0,2,5,3,2,1,3"
            // onChange={this.handleChange}
onChange={e => this.state.inputCollection.push(e.target.value)}
          />
          {console.log(this.state.inputCollection)}
          <button
            className="btn btn-primary"
            onClick={this.componentDidMount(this.state.inputCollection)}
          >
            {" "}
            Sort Collection
          </button>
        </div>

        <div>
          <h1>Bubble Sort</h1>
          {/* <CollectionInput></CollectionInput> */}

          <p aria-live="polite">
            Current itteration: <strong>{this.state.currentItteration}</strong>
          </p>

          <button
            className="btn btn-primary"
            onClick={this.incrementItteration}
          >
            Itterate
          </button>
        </div>
      </>
    );
  }
}
