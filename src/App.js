import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/Header';
import ResumeBody from './components/resumebody/ResumeBody';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="resume">
        <Header 
          currentDesignation="Software Engineer II"
          currentCity="Pune"
          currentPhoneNumber="+91 97666 66845"
          currentEmail="mujtaba.ahmad91@gmail.com"
        />

        <ResumeBody />
      </main>
    );
  }
}

export default App;
