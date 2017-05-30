import React from 'react';
import { mount } from 'enzyme';
import Question from '../Question';

describe('<Question />', () => {
  let output;
  const item = {
    question: 'Как пройти в библиотеку?',
    answer: 'Выйти из кабинета и следовать желтым стрелочкам',
    id: 1,
  };
  it('Contain text', () => {
    output = mount(<Question data={item} />);
    expect(output.text().length).not.toBe(0);
  });
  it('Contain links', () => {
    output = mount(<Question data={item} />);
    expect(output.html()).toBe('<li class="list"><a href="/question/1">Как пройти в библиотеку?</a></li>');
  });
});
