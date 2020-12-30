import React, { Component } from "react";
// import CollectionInput from "./Input";


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
    console.log(this.state);
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
        <input placeholder="Enter collection to sort eg: 0,2,5,3,2,1,3" />        
        <button className="btn btn-primary" onClick={this.getSortedCollectionItterations}> Sort Collection 
        </button>
      </div>

      <div>
      <h1>Bubble Sort</h1>
      {/* <CollectionInput></CollectionInput> */}

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
