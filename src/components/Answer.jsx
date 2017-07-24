import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { QuestionType } from '../types';
import arrowIcon from '../../asserts/img/arrow1.png';

class Answer extends Component {
  render() {
    return (
      <div className="answer">
        <p>{this.props.data.userStory}</p>
        <img className="arrow" alt="arrow1" src={arrowIcon} />
        <p>{this.props.data.answer}</p>
        <Link to={'/'}>
          <button className="back-button">Назад</button>
        </Link>
      </div>
    );
  }
}

Answer.propTypes = {
  data: PropTypes.shape(QuestionType).isRequired,
};

export default Answer;
