import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './common.css';
import Header from './components/Header';
import UserStories from './components/UserStories';
import Answer from './components/Answer';
import RadioButtons from './components/RadioButtons';
// import QuestionData from './data/questions.json';
import userStoriesData from './data/userStories.json';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RadioButtons />
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <UserStories list={userStoriesData} />
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

export default App;
