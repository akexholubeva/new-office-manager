import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './common.css';
import Header from './components/Header';
import Questions from './components/Questions';
import Answer from './components/Answer';
import QuestionData from './data/questions.json';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <Questions list={QuestionData} />
              )}
            />
            <Route
              path="/question/:questionId"
              render={({ match }) => (
                <Answer
                  data={QuestionData.find(item => (
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
