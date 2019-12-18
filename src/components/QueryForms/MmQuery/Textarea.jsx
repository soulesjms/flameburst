import React, { Component } from "react";

class Textarea extends Component {
  render() {
    return (
      <div>
        <textarea
          name="query"
          className="form-control"
          placeholder="FirstName: John AND LastName: Doe"
          onChange={this.props.onChange}
          required
        ></textarea>
      </div>
    );
  }
}

export default Textarea;
