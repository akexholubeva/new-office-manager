import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  data: React.PropTypes.object.isRequired,
};

export default Answer;
