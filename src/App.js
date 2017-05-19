import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Questions from './Questions';
import Answer from './Answer';
import QuestionData from './Questions.json';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <h2>Manager is ready to help you!</h2>
          <Route exact path="/" component={Questions} />
          <Route
            path="/question/:questionId"
            render={({ match }) => (<Answer data={QuestionData.find(item =>
            item.id.toString() === match.params.questionId)}
            />
       )} />
        </div>
      </Router>
    );
  }
}

export default App;
