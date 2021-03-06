import React, { Component } from 'react'
import bottomFork from './lab-assets/small-logo.png';

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <img src={bottomFork} id="bottom-fork-icon" alt="fork icon" />
                <br/>
                <div id="bottom-text">Delicious &copy; 2013 &middot; All Rights Reserved.
                <br/>
                Proudly published with Ghost.
                </div>
            </div>
        )
    }
}
