// This file is what's triggered after a component has an action go off, like a button being clicked and that setting off a need to modify the app state
// This file is the gatekeeper of the state and its job is to trigger the state change
import {combineReducers} from 'redux';
import {RECIEVE_MEMES, NEW_MEME} from '../actions';

// This reducer updates the state if the RECIEVE_MEMES action (/actions/index.js) goes off
function memes(state = [], action) {
    switch(action.type) {
        case RECIEVE_MEMES:
            return action.memes;
            default:
                return state;
    }
}

// This reducer updates the state when the NEW_MEME action (/actions/index.js) goes off
function myMemes(state = [], action){
    switch(action.type){
        case NEW_MEME:
            state = [...state, action.meme];
            return state;
            default:
                return state;
    }
}

const rootReducer = combineReducers({memes, myMemes});

export default rootReducer;