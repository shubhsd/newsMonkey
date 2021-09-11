import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_API_KEY;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={4}
          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key='general' country='in' category='general' /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key='business' country='in' category='business' /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key='entertainment' country='in' category='entertainment' /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' key='general' category='general' /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' key='health' category='health' /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' key='science' category='science' /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' key='sports' category='sports' /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country='in' key='technology' category='technology' /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

