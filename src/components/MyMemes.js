// This file is what saves any memes you make and posts them near the top of our single-page app
// Basic hooks
import React, {Component} from 'react';
import {connect} from 'react-redux';

// Here's the actual meme HTML that will be posted in the app
class MyMemes extends Component {
    render() {
return(
    <div>
        {
            // If you want a quick refresher on props, here's a link https://www.w3schools.com/react/react_props.asp
            // Props really are what they sound like, they're just properties you apply to your components
            this.props.myMemes.map((meme,index) => {
                return (
                    <img 
                    key={index}
                    src={meme.data.url}
                    alt="my-meme"
                    className="my-meme-img"
                    />
                )
            })
        }
    </div>
)
    }
}

// Sends your latest submitted meme to the State which in turn displays it in the app
function mapStateToProps(state){
    return{
        myMemes:state.myMemes
    }
}

// This states that it's okay to pass data back to the state
// Export refrence https://www.w3schools.com/react/react_es6_modules.asp
export default connect(mapStateToProps, null)(MyMemes)