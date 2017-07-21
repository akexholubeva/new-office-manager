import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { QuestionType } from '../types';

class UserStory extends Component {
  render() {
    return (
      <li className="list">
        <Link to={`/question/${this.props.data.id}`}>
          {this.props.data.userStory}
        </Link>
      </li>
    );
  }
}

UserStory.propTypes = {
  data: PropTypes.shape(QuestionType).isRequired,
};

export default UserStory;
