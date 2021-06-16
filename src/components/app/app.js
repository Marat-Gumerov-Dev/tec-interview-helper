import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/reset-style.scss';
import '../../styles/constants.scss';
import './app.scss';
import HomePage from "../home-page";


class App extends Component {
  
  render() {
     return (
        <HomePage />
     );
  };
 
};

export default App;