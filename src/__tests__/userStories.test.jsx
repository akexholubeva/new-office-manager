import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import UserStories from '../components/UserStories';

describe('<UserStories />', () => {
  let output;
  const listOfQuestions = [{
    question: 'Как пройти в библиотеку?',
    answer: 'Выйти из кабинета и следовать желтым стрелочкам',
    id: 1,
  },
  {
    question: 'Сколько весит взрослый слон?',
    answer: 'В среднем 4 тонны',
    id: 2,
  },
  {
    question: 'Что появилось первое: курица или яйцо?',
    answer: 'Загугли!',
    id: 3,
  },
  {
    question: 'Как приготовить кофе?',
    answer: 'Взять кружку, засыпать кофе, залить кипятком',
    id: 4,
  },
  {
    question: 'Как приготовить пуэр?',
    answer: 'Сложно',
    id: 5,
  },
  {
    question: 'Какой шоколад полезнее?',
    answer: 'Горький',
    id: 6,
  }];
  const listOfThreeQuestions = [{
    question: 'Как пройти в библиотеку?',
    answer: 'Выйти из кабинета и следовать желтым стрелочкам',
    id: 1,
  },
  {
    question: 'Сколько весит взрослый слон?',
    answer: 'В среднем 4 тонны',
    id: 2,
  },
  {
    question: 'Что появилось первое: курица или яйцо?',
    answer: 'Загугли',
    id: 3,
  }];
  it('Rendering all questions', () => {
    output = mount(
      <Router>
        <div>
          <UserStories list={listOfQuestions} />,
        </div>
      </Router>,
      );
    expect(output.find('ul li').length).toBe(6);
  });
  it('Rendering <li> ', () => {
    output = mount(
      <Router>
        <div>
          <UserStories list={listOfThreeQuestions} />,
        </div>
      </Router>,
      );
    expect(output.find('ul li').length).toBe(3);
  });
});
