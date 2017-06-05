import React, { Component } from 'react';
import managerIcon from '../../asserts/img/manager.png';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <img className="manager" alt="Manager" src={managerIcon} />
        <span>Office-manager </span>
        <h2>Manager is ready to help you!</h2>
      </div>
    );
  }
}

export default Header;
