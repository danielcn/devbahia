import React, {Component} from 'react'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {jobs: []};
  }

  render() {
    return (
      <div className="Menu" id="layout-content" className="layout-content-wrapper">
        Menu
      </div>
    );
  }
}

export default Menu;
