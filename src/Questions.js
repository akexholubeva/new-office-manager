import React, { PureComponent } from 'react';
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
      </div>
    );
  }
}

export default Questions;
