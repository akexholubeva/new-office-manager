import React, { Component } from 'react';
import PropTypes from 'prop-types';
import userStoriesData from '../data/userStories.json';

class UserStories extends Component {
  render () {
    return (
      <ul>
        <Answer
          data={userStoriesData.filter(item => (
            item.value() === 
          ))} 
        />
        {this.props.data.filter(function(item) {
          render() 
        } 
        if (radiobutton.value==office)  

        )}
      </ul>
    );
  }
}

UserStories.propTypes = {
  value: PropTypes.shape().isRequired,
};

export default UserStories;
