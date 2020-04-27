import React, { Component } from 'react';
import vanPic from './lab-assets/van-pic.png';

export default class Profile extends Component {
    render() {
        return (
            <div id="van-container">
                <img src={vanPic} alt="van-pic" id="van-pic"/>
                <h3>Vanessa Stevenson</h3>
                <p id="van-info">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                <button id="share-button">Share Button</button>
            </div>
        )
    }
}
