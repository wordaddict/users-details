import React, { Component } from 'react';

import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';
import Circle from '../components/Circle';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      showCirle: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    console.log('I was clicked');
    e.preventDefault();
    this.setState({
      loggedIn: !this.state.loggedIn,
      showCirle: !this.state.showCirle
    });
  }
  render() {
    const circle = this.state.showCirle
    const status = this.state.loggedIn ? 'Logout' : 'Login';
    const statusLogout = this.state.loggedIn ? 'Logout' : 'Signup';
    const statusLogin = this.state.loggedIn ? <Circle></Circle> : 'Login';
    return (
      <div className="App">
        <TopBar statusLogout={statusLogout} statusLogin={statusLogin} circle={circle} onClick={this.handleButtonClick}/>
        <HomeContent status={status} onClick={this.handleButtonClick}/>
      </div>
    );
  }
}

