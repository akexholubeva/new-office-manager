import React, { Component } from 'react';

class Header extends Component {
  render() {
    return ( 
      <div className="App-header">
        <img className="Manager"  alt="Picture of manager" src={'http://www.freeiconspng.com/uploads/person-outline-icon-png-person-outline-icon-png-person-17.png'} />
        <span>Office-manager </span>
      </div>
    );
  }
}

export default Header;