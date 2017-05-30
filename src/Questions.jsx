import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

class Questions extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map(item => (
            <Question key={item.id} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}

Questions.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Questions;
