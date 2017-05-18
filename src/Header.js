import React, { Component } from 'react';
import managerIcon from '../img/manager.png';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img className="Manager" alt="Manager" src={managerIcon} />
        <span>Office-manager </span>
      </div>
    );
  }
}

export default Header;
