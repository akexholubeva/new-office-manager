import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Question extends Component {
  render() {
    return (
      <li className="list">
        <Link to={`/question/${this.props.data.id}`}>
          {this.props.data.question}
        </Link>
      </li>
    );
  }
}

React.PropTypes.shape({
  question: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
});

Question.propTypes = {
  data: PropTypes.shape.isRequired,
};

export default Question;
