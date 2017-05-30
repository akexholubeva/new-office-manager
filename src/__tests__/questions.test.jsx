import React from 'react';
import { mount } from 'enzyme';
import Questions from '../Questions';

describe('<Questions />', () => {
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
    output = mount(<Questions list={listOfQuestions} />);
    expect(output.find('ul li').length).toBe(6);
  });
  // it('Rendering <li> ', () => {
  //   output = mount(<Questions list={listOfThreeQuestions} />);
  //   expect(output.find('ul').children()).to.have.length(3);
  // });
});

