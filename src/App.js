import './App.css';
import Header from './components/layout/Header';
import UserForms from './components/UserForms';

import React, {Component} from 'react';

export class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header/>
        <UserForms/>
      </div>
    )
  }
}

export default App
