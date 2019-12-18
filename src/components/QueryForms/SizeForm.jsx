import React, { Component } from "react";

class SizeForm extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="size"
          className="form-control"
          placeholder="Number of Records to return (max 10 million)"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default SizeForm;
