import React, { Component } from "react";
import CollectionInput from "./Input";
// import Input from "reactstrap/lib/Input";


export class BubbleSort extends Component {
  static displayName = BubbleSort.name;

  constructor(props) {
    super(props);
    this.state = { collection: [], currentItteration: 0 };
    this.incrementItteration = this.incrementItteration.bind(this);
  }

  async getSortedCollectionItterations() {
    const response = await fetch("bubblesort");
    const data = await response.json();
    this.setState({ collection: data });
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
      <h1>Bubble Sort</h1>
      <CollectionInput></CollectionInput>

        <p aria-live="polite">
          Current itteration: <strong>{this.state.currentItteration}</strong>
        </p>

        <button className="btn btn-primary" onClick={this.incrementItteration}>
          Itterate
        </button>

      </div>
      </>
    );
  }
}
