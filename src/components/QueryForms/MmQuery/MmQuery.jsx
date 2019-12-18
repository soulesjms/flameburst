import React from "react";
import Textarea from "./Textarea";
import Selector from "./Selector";
import OriginSelector from "./OriginSelector";

class MmQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useLucene: false
    };
  }

  toggleLucene() {
    let useLucene = !this.state.useLucene;
    this.setState({ useLucene });
  }

  render() {
    let queryForm;
    if (this.state.useLucene) {
      queryForm = <Textarea onChange={this.props.onChange} />;
    } else {
      queryForm = (
        <div>
          <span>
            <Selector name="IP Address" />
            <OriginSelector />
          </span>
          <span>
            <Selector name="Port" />
            <OriginSelector />
          </span>
          <Selector name="Country Code" />
          <Selector name="Protocol Number" />
          <Selector name="Packets" />
          <Selector name="Bytes" />
          <Selector name="Duration" />
        </div>
      );
    }

    return (
      <div>
        Use Lucene{" "}
        <input type="checkbox" onChange={() => this.toggleLucene()} />
        {queryForm}
      </div>
    );
  }
}

export default MmQuery;
