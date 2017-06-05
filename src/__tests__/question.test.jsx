import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Question from '../components/Question';

describe('<Question />', () => {
  let output;
  const item = {
    question: 'Как пройти в библиотеку?',
    answer: 'Выйти из кабинета и следовать желтым стрелочкам',
    id: 1,
  };
  it('Contain text', () => {
    output = mount(
      <Router>
        <div>
          <Question data={item} />,
        </div>
      </Router>,
    );
    expect(output.text().length).not.toBe(0);
  });
  it('Contain links', () => {
    output = mount(
      <Router>
        <div>
          <Question data={item} />,
        </div>
      </Router>,
    );
    expect(output.find('li')).toHaveLength(1);
  });
});
