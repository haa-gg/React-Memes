// This file holds the stuff to make a meme from the user input back in App.js

// basic imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
// Pulls in the createMeme function from index.js in the actions folder
// See the bottom of index.js to see what precisely this does 
import { createMeme } from '../actions';

// Sets inital meme hovered state to false
class MemeItem extends Component {
    constructor() {
        super();

        this.state={
            hovered: false
        }

    }

    // This segment is where we set up our POST to imgflip with our desired meme text
    postMeme(){
        console.log('this.props', this.props);
        const {text0, text1} = this.props;
        const memeObj={
            template_id: this.props.meme.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj);
    }

    // This section spits out the meme templates beneath where you enter your desired meme text
    render(){
        return(
            <div className="meme-item"
            onMouseEnter={() => this.setState({hovered:true})}
            onMouseLeave={() => this.setState({hovered:false})}
            onClick={() => this.postMeme()}
            >
            <img
            src={this.props.meme.url}
            alt={this.props.meme.name}
            className={this.state.hovered ? "meme-img darken-img" : "meme-img"}
            />
            <p className={this.state.hovered ? "meme-txt" : "no-txt"}>
                {this.props.meme.name}
            </p>
            </div>
        )
    }
};

// This section is saying any part of our app is allowed to access the data created in this component
export default connect(null, {createMeme})(MemeItem);