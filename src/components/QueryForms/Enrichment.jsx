import React, { Component } from "react";

class Enrichment extends Component {
  render() {
    const enrichment = this.props.enrichment;

    return (
      <label key={enrichment.label} className="border p-2 col-lg-4 bg-light">
        {enrichment.label}
        <input
          className="float-right"
          type="checkbox"
          checked={enrichment.checked}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export default Enrichment;
