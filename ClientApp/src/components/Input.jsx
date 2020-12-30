// import React from "react";
import React, { Component } from "react";


class CollectionInput extends Component {
  state = {
    collection: ""  };

  render() {
    return (
      <div>
        <h4>Enter a collection to sort</h4>
        <input placeholder="Enter collection to sort eg: 0,2,5,3,2,1,3" />        
        <button>Sort Collection</button>
      </div>
    );
  }
}

export default CollectionInput;