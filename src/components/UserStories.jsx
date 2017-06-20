import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserStory from './UserStory';
import { QuestionType } from '../types';

class UserStories extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map(item => (
          <UserStory key={item.id} data={item} />
        ))}
      </ul>
    );
  }
}

UserStories.propTypes = {
  list: PropTypes.arrayOf(QuestionType).isRequired,
};

export default UserStories;
