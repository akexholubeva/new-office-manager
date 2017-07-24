import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './common.css';
import Header from './components/Header';
import UserStories from './components/UserStories';
import Answer from './components/Answer';
import Filters from './components/Filters';
import userStoriesData from './data/userStories.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userStoriesData };
  }

  onFilterChange = (tags) => {
    this.setState({ userStoriesData: userStoriesData.filter((item =>
      tags.every(element => item.tags.includes(element))
    )) },
    );
  }
  render() {
    return (
      <div>
        <Header />
        <Filters onFilterChange={this.onFilterChange} />
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <UserStories list={this.state.userStoriesData} />
              )}
            />
            <Route
              path="/question/:questionId"
              render={({ match }) => (
                <Answer
                  data={userStoriesData.find(item => (
                  item.id.toString() === match.params.questionId
                ))}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default App;
