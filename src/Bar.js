import React, { Component } from 'react'
import bar from './lab-assets/bar.png';
export default class Bar extends Component {
    render() {
        return (
            <div>
                <img src={bar} alt='spacer' class='bar'/>
            </div>
        )
    }
}
