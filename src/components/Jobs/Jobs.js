import React, {Component} from 'react'
import axios from 'axios';

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {jobs: []};
  }

  componentDidMount() {
    this.eventList();
  }

  eventList() {
    const baseUrl = `https://localhost:88888/`;
    const endpoint = `front/api/v1/events/`;

    axios.get(baseUrl+endpoint)
      .then(res => {
        console.log(res.data)
        const jobs = res.data;
        this.setState({ jobs });
      })
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
