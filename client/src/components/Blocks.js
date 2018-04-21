import React, { Component } from 'react';


class Blocks extends Component {
  constructor(props) {
      super(props)
      this.state = {
          blocks: []
      }
  }
  render() {
    return (
      <div className="blocks">
      </div>
    );
  }
}

export default Blocks