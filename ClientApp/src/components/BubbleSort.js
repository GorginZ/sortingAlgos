import React, { Component } from 'react';

export class BubbleSort extends Component {
  static displayName = BubbleSort.name;


  constructor(props) {
    super(props);
    this.state = { collection : [] };
  }

  async getSortedCollectionItterations() {
    const response = await fetch('bubblesort');
    const data = await response.json();
    this.setState({ collection: data });
  }

  render() {
    return (
      <div>
        <h1>Bubble Sort</h1>

      </div>
    );
  }
}
