import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        return (
            <div>
                <ul id="recipe-note">
                    <li>1 1/2 Cups Milk</li>
                    <li>1/2 cups mascarpone</li>
                    <li>1/2 tsp pink salt</li>
                    <li>1 lb Black Mission Figs</li>
                    <li>1/2 cup brown sugar</li>
                    <li>2-4 tbsp water</li>
                    <li>1 1/2 cups heavy cream</li>
                    <li className="crossed">4/3 granulated sugar</li>
                    <li className="crossed"> 2 egg yolks</li>
                    <li>1 lemon, juiced</li>
                    <li>2 tbsp butter</li>
                    <li>1 cup honey roasted pecans, roughley chopped</li>
                </ul>
            </div>
        )
    }
}
