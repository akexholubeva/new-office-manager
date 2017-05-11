import React, { Component } from 'react';
import Question from './Question';
import QuestionData from './Questions.json';

class Questions extends Component {
  render() {
    return (
      <ul>
        {QuestionData.map(item => (
          <Question key={item.id} data={item} />
        ))}
      </ul>
       <div>
        <Link to={'/'}>
          <button className="back-button">Назад</button>
        </Link>
      </div>
    );  
  }
}

export default Questions;