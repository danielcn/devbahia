import React, {Component} from 'react'

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {jobs: []};
  }

  componentDidMount() {
    this.eventList();
  }

  eventList() {
    $.getJSON('https://localhost:88888')
      .then(({ results }) => this.setState({ jobs: results }));
  }

  render() {
    const jobs = this.state.jobs.map((item, i) => (
      <div>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.email }</span>
      </div>
    ));

    return (
      <div className="Jobs" id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ jobs }</div>
      </div>
    );
  }
}

export default Jobs;
