import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import QuestionData from './Questions.json';

class Questions extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          {QuestionData.map(item => (
            <Question key={item.id} data={item} />
          ))}
        </ul>
        <Link to={'/'}>
          <button className="back-button">Назад</button>
        </Link>
      </div>
    );
  }
}

export default Questions;
