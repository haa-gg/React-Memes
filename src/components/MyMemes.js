// This file is what saves any memes you make and posts them near the top of our single-page app
// Basic imports
import React, {Component} from 'react';
import {connect} from 'react-redux';

// Here's the actual meme HTML that will be posted in the app
class MyMemes extends Component {
    render() {
return(
    <div>
        {
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
export default connect(mapStateToProps, null)(MyMemes)