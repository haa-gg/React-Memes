// This file is the main spot where the action happens, individual components are pulled into here and rendered in this single-page app!
// Stock React imports...
import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';

// Import bootstrap components
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
// Import the meme components
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';
  
class App extends Component {
    constructor() {
        super();
// Setting initial variable values, in this case 10 memes per query, top text is blank and bottom text is blank
        this.state = {
            memeLimit: 10,
            text0: '',
            text1: ''
        }
    }

    // Here's where most of the app components (the actual meme generator) are assembled into something a user can interact with
    render() {
        return (
            <div>
                <h2><u>Welcome to the Meme Generator!</u></h2>
                <MyMemes />
                <h4><i>Write Some Text</i></h4>
                {/* Form objects we imported from react-bootstrap at the top */}
                <Form inline="true">
                    <FormGroup>
                    <FormLabel>Top</FormLabel>
                    {' '}
                    {/* When you type something in the input below, the onChange line actually assigns whatever you type to the text0 variable */}
                    <FormControl 
                    type="text"
                    onChange={event => this.setState({text0: event.target.value})}>
                    </FormControl>
                    </FormGroup>
                    {'   '}
                    <FormGroup>
                    <FormLabel>Bottom</FormLabel>
                    {'   '}
                    <FormControl 
                    type="text"
                    onChange={event => this.setState({text1: event.target.value})}>
                    </FormControl>
                    </FormGroup>
                </Form>
                {
                    // This line takes our meme json data (meme variable defined in src/index.js) and slices (grabs a set number of responses) it
                    // index can also be a little unintuitive but it's just a single meme object so you call the flipimg api and ask for 10 memes, index #7 will be meme #7
                    this.props.memes.slice(0, this.state.memeLimit).map((meme, index) =>{
                        return (
                            <MemeItem 
                            key={index}
                            meme={meme} 
                            text0={this.state.text0}
                            text1={this.state.text1}/>
                        )
                    } )
                }
                {/* When you click the button, it ups the memelimit by 10 which causes 10 more to load in */}
                <div className="meme-button" onClick={() => {
                    this.setState({memeLimit: this.state.memeLimit+10})
                }}>Load 10 more memes...</div>
            </div>
        )
    }
}

// What does this section do?
// This is where you what parts of the app can pass info to the others (scope and scale)
// In this case it's making the whole state available (this includes that very last line)
// Cool discussion on the topic here: https://stackoverflow.com/questions/38202572/understanding-react-redux-and-mapstatetoprops
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(App);