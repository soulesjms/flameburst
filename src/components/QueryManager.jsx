import React, { Component } from "react";
import DataPreview from "./QueryManager/DataPreview";
import QueryList from "./QueryManager/QueryList";

class QueryManager extends Component {
  state = {
    queryList: [],
    querySelected: false,
    selectedQuery: "" //name of query selected
  };

  componentDidMount() {
    this.setState({ queryList: ["test1", "test2", "test3"] });
  }
  selectQuery = query => {
    //TODO
    //change querySelected to true
    //change selectedQuery
  };

  render() {
    let renderView;

    //if a query is selected, show DataPreview, otherwise, show full list of queries
    if (this.state.querySelected) {
      renderView = (
        <div>
          <h3>Data Preview</h3>
          <DataPreview />
        </div>
      );
    } else {
      renderView = (
        <div>
          <h3>Manage Queries</h3>
          <QueryList
            queries={this.state.queryList}
            onChange={this.selectQuery}
          />
        </div>
      );
    }
    return <div className="w-50 p-3 bg-light h-75">{renderView}</div>;
  }
}

export default QueryManager;
