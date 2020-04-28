import React, { Component } from 'react';
import { recipeItems } from './data.js';

export default class Recipe extends Component {
    render() {
        const lis = recipeItems;

        return (
            <div>
                <ul id="recipe-note">
                    {lis.map(item => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}
