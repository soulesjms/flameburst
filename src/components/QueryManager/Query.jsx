import React from "react";

class Query extends React.Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.status}</td>
        <td>
          <button className="btn btn-secondary">
            <svg
              className="bi bi-pencil"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="btn btn-danger">
            <svg
              className="bi bi-trash-fill"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.5 3a1 1 0 00-1 1v1a1 1 0 001 1H5v9a2 2 0 002 2h6a2 2 0 002-2V6h.5a1 1 0 001-1V4a1 1 0 00-1-1H12a1 1 0 00-1-1H9a1 1 0 00-1 1H4.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM10 7a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 0110 7zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
          </button>
        </td>
      </tr>
    );
  }
}

export default Query;
