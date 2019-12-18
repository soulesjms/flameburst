import React from "react";

class OriginSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <select className="form-control">
          <option>Source</option>
          <option>Destination</option>
          <option>Both</option>
        </select>
      </div>
    );
  }
}

export default OriginSelector;
