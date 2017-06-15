import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import UserStory from '../components/UserStory';

describe('<UserStory />', () => {
  let output;
  const item = {
    userStory: 'Я хочу выйти из офиса по улице Лермонтова и я последний в офисе',
    answer: 'Следуйте инструкции, которая висит около выхода',
    id: 1,
    tags: ['lermontova', 'before20', 'after20'],
  };
  it('Contain text', () => {
    output = mount(
      <Router>
        <div>
          <UserStory data={item} />,
        </div>
      </Router>,
    );
    expect(output.text().length).not.toBe(0);
  });
  it('Contain links', () => {
    output = mount(
      <Router>
        <div>
          <UserStory data={item} />,
        </div>
      </Router>,
    );
    expect(output.find('li')).toHaveLength(1);
  });
});
