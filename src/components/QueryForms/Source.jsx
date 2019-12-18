import React, { Component } from "react";

class Source extends Component {
  render() {
    const source = this.props.source;

    return (
      <label key={source.label} className="border p-2 col-lg-4 bg-light">
        {source.label}
        <input
          className="float-right"
          type="checkbox"
          checked={source.checked}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export default Source;
