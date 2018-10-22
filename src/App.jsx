import React, { Component } from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App;
