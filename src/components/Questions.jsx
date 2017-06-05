import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import { QuestionType } from '../types';

class Questions extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map(item => (
          <Question key={item.id} data={item} />
        ))}
      </ul>
    );
  }
}

Questions.propTypes = {
  list: PropTypes.arrayOf(QuestionType).isRequired,
};

export default Questions;
