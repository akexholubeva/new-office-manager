import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Question extends Component {
  render() {
    return (
      <li className="circle">
        <Link to={`/question/${this.props.data.id}`}>
          {this.props.data.question}
        </Link>
      </li>
    );
  }
}

Question.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default Question;
