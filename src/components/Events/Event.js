import React, {Component} from 'react'

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {events: []};
  }

  componentDidMount() {
    this.eventList();
  }

  eventList() {
    $.getJSON('https://localhost:88888')
      .then(({ results }) => this.setState({ person: results }));
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
