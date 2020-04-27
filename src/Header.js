import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <header>
        <div>
            <img src='../lab-assets/logo.png'/>
            <h1>Delicious</h1>
            <h2>THE BEST FOOD BLOG ON THE WEB</h2>
        </div>
        <div id='header-right'>
            <img src='../lab-assets/fb-icon.png' id='fb-icon'/>
            <img src='../lab-assets/twit-icon.png' id='twit-icon'/>
            <img src='../lab-assets/gp-icon.png' id='gp-icon'/>
            <img src='../lab-assets/insta-icon.png' id='insta-icon'/>
            <img src='../lab-assets/flic-img.png' id='flic-img'/>
            <img src='../lab-assets/pint-icon.png' id='pint-icon'/>
            <img src='../lab-assets/rss-icon.png' id='rss-icon'/>
            <img src='../lab-assets/mail-icon.png' id='mail-icon'/>
        </div>
    </header>
           
        )
    }
}
