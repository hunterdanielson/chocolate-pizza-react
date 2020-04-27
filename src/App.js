import React, { Component } from "react";
import Header from './Header.js';
import Bar from './Bar.js';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Bar/>
      </div>
    )
  }
}
