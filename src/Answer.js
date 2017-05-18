import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Answer extends Component {
  render() {
    return (
      <div>
        <p> {this.props.data.question} </p>
        <p> {this.props.data.answer} </p>
        <Link to={'/'}>
          <button className="back-button">Назад</button>
        </Link>
      </div>
    );
  }
}

Answer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Answer;
