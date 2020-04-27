import React, { Component } from 'react';
import vanPic from './lab-assets/van-pic.png';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <img src={vanPic} alt="van-pic"></img>
                <h3>Vanessa Stevenson</h3>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                <button id="share-recipe">Share Button</button>
            </div>
        )
    }
}
