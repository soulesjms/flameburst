import React, { Component } from "react";

class ClassificationPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifications: ["U", "U//FOUO", "TEST"]
    };
  }

  render() {
    const classifications = this.state.classifications;
    return (
      <div>
        {this.props.cLabel}
        <select
          name={this.props.cType}
          className="form-control"
          onChange={this.props.onChange}
          required
        >
          <option value="" default hidden>
            Please select a classification
          </option>
          {classifications.map(e => (
            <option key={e}>{e}</option>
          ))}
          ;
        </select>
      </div>
    );
  }
}

export default ClassificationPicker;
