
import React, { Component } from 'react';
import "./App.css";
import Header from './Header.js';
import Bar from './Bar.js';
import Body from './Body.js'
import Recipe from './Recipe.js';
import Profile from './Profile.js';
import Footer from './Footer.js';



export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/
        <Bar/>
        <Body/>
        <Recipe/>
        <Profile/>
        <Footer/>
      </div>
    )
  }
}
