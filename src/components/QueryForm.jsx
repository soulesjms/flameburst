import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ClassificationPicker from "./QueryForms/ClassificationPicker.jsx";
import Justification from "./QueryForms/Justification.jsx";
import MmQuery from "./QueryForms/MmQuery/MmQuery.jsx";
import SizeForm from "./QueryForms/SizeForm.jsx";
import Enrichment from "./QueryForms/Enrichment.jsx";
import Source from "./QueryForms/Source.jsx";

class QueryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [{ label: "", checked: false }],
      enrichments: [{ label: "", checked: false }]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:9000/queryParameters")
      .then(res => res.json())
      .then(
        res => {
          const enrichments = res.NETFLOW.availableEnrichments.map(e => ({
            label: e,
            checked: false
          }));
          const sources = res.NETFLOW.availableSources.map(e => ({
            label: e,
            checked: false
          }));
          this.setState({ enrichments: enrichments });
          this.setState({ sources: sources });
        },
        err => {
          console.error("error: ", err);
        }
      )
      .catch(err => {
        console.error("error: ", err);
        return err;
      });
  }

  handleChange(event) {
    this.props.onChange(event.target);
  }
  handleStartDateChange(date) {
    this.props.onChange({ name: "startDate", value: date });
  }
  handleEndDateChange(date) {
    this.props.onChange({ name: "endDate", value: date });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  toggleEnrichment(index) {
    const { enrichments } = this.state;
    enrichments[index].checked = !enrichments[index].checked;
    enrichments.map(e => {
      if (e.checked) {
        return e.label;
      }
    });
    this.handleChange({ name: "enrichments", value: [enrichments] });
  }

  toggleSource(index) {
    const { sources } = this.state;
    sources[index].checked = !sources[index].checked;

    this.handleChange({ name: "sources" });
  }

  render() {
    const startDate = this.props.mmQuery.startDate;
    const endDate = this.props.mmQuery.endDate;

    return (
      <div className="w-50 px-3">
        <form onSubmit={this.handleSubmit}>
          <ClassificationPicker
            cType="justificationClassification"
            cLabel="Justification Classification"
            onChange={this.handleChange}
          />
          <Justification onChange={this.handleChange} />
          <DatePicker
            className="form-control"
            selected={startDate}
            onChange={this.handleStartDateChange}
            selectsStart
            startDate={startDate}
            maxDate={endDate || new Date()}
            placeholderText="Select a start date"
            required
          />
          <DatePicker
            className="form-control"
            selected={endDate}
            onChange={this.handleEndDateChange}
            selectsEnd
            endDate={endDate}
            minDate={startDate}
            maxDate={new Date()}
            placeholderText="Select an end date"
          />
          <ClassificationPicker
            cType="queryClassification"
            cLabel="Query Classification"
            onChange={this.handleChange}
          />
          <div>
            Select Enrichments: <br />
            {this.state.enrichments.map((enrichment, index) => {
              return (
                <Enrichment
                  enrichment={enrichment}
                  key={enrichment.label}
                  onChange={() => this.toggleEnrichment(index)}
                />
              );
            })}
          </div>
          <div>
            Select Data Sources: <br />
            {this.state.sources.map((source, index) => {
              return (
                <Source
                  source={source}
                  key={source.label}
                  onChange={() => this.toggleSource(index)}
                />
              );
            })}
          </div>
          <MmQuery onChange={this.handleChange} />
          <SizeForm onChange={this.handleChange} />
          <input type="submit" value="Get Data" />
        </form>
      </div>
    );
  }
}

export default QueryForm;
