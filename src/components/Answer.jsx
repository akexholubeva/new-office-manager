import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { QuestionType } from '../types';
import arrowIcon from '../../asserts/img/arrow1.png';

class Answer extends Component {
  render() {
    return (
      <div className="answer">
        <li>{this.props.data.userStory}</li>
        <img className="arrow" alt="arrow1" src={arrowIcon} />
        <li>{this.props.data.answer}</li>
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
