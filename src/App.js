import React, {Component} from 'react';
import Header from './navigation/Header';
import Nav from './navigation/Nav';
import Content from './navigation/Content';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="top">
        <Router>
          <div className="sidebar nav">
            <Nav />
          </div>
          <div id="top" className="sidebar content">
            <Content />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
