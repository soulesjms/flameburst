import React from "react";

class Selector extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <input className="form-control" type="text" placeholder={this.props.name} />
      </div>
    );
  }
}

export default Selector;
