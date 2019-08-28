import React, {Component} from 'react'
import axios from 'axios';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {events: []};
  }

  componentDidMount() {
    this.eventList();
  }

  eventList() {
    const baseUrl = 'https://localhost:1888/';
    const endpoint = 'front/api/v1/jobs/';
   
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      console.log(persons)
    })


    axios.get(baseUrl+endpoint)
      .then(res => {
        console.log(res.data)
        const events = res.data;
        this.setState({ events });
      })
    
      // $.getJSON(baseUrl + endpoint)  .then(({ results }) => this.setState({ person: results }));
  }

  render() {
    const events = this.state.events.map((item, i) => (
      <div>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.email }</span>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ events }</div>
      </div>
    );
  }
}

export default Event;
