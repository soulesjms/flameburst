// import logo from "./logo.svg";
import React, { Component } from "react";
import QueryManager from "./components/QueryManager.jsx";
import QueryForm from "./components/QueryForm.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mmQuery: {
        query: "",
        justification: "",
        justificationClassification: "U",
        queryClassification: "U",
        sources: ["source1", "source2", "source3"],
        enrichments: ["enrichment1", "enrichment2", "enrichment3"],
        startDate: "",
        endDate: "",
        size: 100
      },
      mmQueryResult: {
        total_expected_results: 0,
        source1: { expectedResults: 0, status: "failed" },
        source2: { expectedResults: 0, status: "failed" }
      }
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(e) {
    console.log("form change event", e);
    this.setState(prevState => {
      prevState.mmQuery[e.name] = e.value;
      return prevState;
    });
  }

  handleSubmit = () => {
    console.log("handling submit");
    this.queryNetflow(this.state);
  };

  queryNetflow = query => {
    console.log("querying netflow");
    console.log(query);
    // result = {
    //   total_expected_results: 0,
    //   source1: { expectedResults: 0, status: "failed" },
    //   source2: { expectedResults: 0, status: "failed" }
    // };
    // this.setState(result);
  };

  render() {
    return (
      <div className="d-flex">
        <QueryForm
          onChange={this.handleFormChange}
          mmQuery={this.state.mmQuery}
        />
        <QueryManager mmQueryResult={this.mmQueryResult} />
      </div>
    );
  }
}

export default App;
