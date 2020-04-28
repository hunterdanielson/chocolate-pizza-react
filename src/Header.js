import React, { Component } from 'react'
import logo from './lab-assets/logo.png';
import fbIcon from './lab-assets/fb-icon.png';
import twitIcon from './lab-assets/twit-icon.png';
import gpIcon from './lab-assets/gp-icon.png';
import instaIcon from './lab-assets/insta-icon.png';
import flicIcon from './lab-assets/flic-icon.png';
import pintIcon from './lab-assets/pint-icon.png';
import rssIcon from './lab-assets/rss-icon.png';
import emailIcon from './lab-assets/mail-icon.png';
import bar from './lab-assets/bar.png'


export default class Header extends Component {
    render() {
        return (
        <header>
            <div/>
                <img src={logo} alt='Company logo' id='logo'/>
                <div id='companyTitle'>
                <span id='delicious'>Delicious</span>
                <br></br>
                <span id='subTitle'>THE BEST FOOD BLOG ON THE WEB</span>
            </div>
            <div id='header-right'>
                <img src={fbIcon} alt='Facebook'/>
                <img src={twitIcon} alt ='Twitter'/>
                <img src={gpIcon} alt='Google Plus'/>
                <img src={instaIcon} alt='Instagram'/>
                <img src={flicIcon} alt='Flic'/>
                <img src={pintIcon} alt='Pinterest'/>
                <img src={rssIcon} alt='RSS' id='rss'/>
                <img src={emailIcon} alt='Email'/>
            </div>
        </header>
           
        )
    }
}