import React, { Component } from 'react'


export default class Body extends Component {
    render() {
        return (
            <main>
                <p>
                    <span id='title'>Chocolate Pizza</span><br/>
                    <span id='date'>Posted On: {this.props.date} / Desserts</span>
                </p>
                <img src={this.props.mainPhoto} alt='Chocolate Pizza' class='image'/>
                <p class='description'>
                    For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and 
                    stir to dissolve. Ualve all of the figs and toss in the saucepan with water and lemon juice. 
                    Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with 
                    one or two stirs, set aside and let cool completly. <br/>
                    <br/>
                    Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely
                    dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait
                     until the fig mixture 
                    is cooled. <br/>
                    <br/>
                    Using an ice cream, machine, pour liquids into the frozen basin and process according to manufacturer
                    instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. 
                    Continue to process for +/- 10 minutes. Pour-semi frozen mixture into a pyrex dish or glass tupperware. Freeze for 
                    at least two hours before serving.
                </p>
            </main>
        )
    }
}
