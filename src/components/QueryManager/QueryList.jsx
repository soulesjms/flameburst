import React from "react";
import Query from "./Query";

class QueryList extends React.Component {
  state = {};

  render() {
    return (
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Query Name</th>
            <th scope="col">Status</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {this.props.queries.map((query, index) => {
            return (
              <Query
                name={query}
                key={query}
                status={query}
                onChange={() => this.props.selectQuery(index)}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default QueryList;
