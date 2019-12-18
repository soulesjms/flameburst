import React, { Component } from "react";

class Justification extends Component {
  render() {
    return (
      <div>
        Justification
        <textarea
          name="justification"
          className="form-control"
          placeholder="Please provide a justification for your query"
          onChange={this.props.onChange}
          required
        ></textarea>
      </div>
    );
  }
}

export default Justification;
