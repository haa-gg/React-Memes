// Ap needs redux to run so this line checks out
import React from "react";
// We're going to be manipulating the DOM by adding our freshly built memes to the page so that's why this is here
import ReactDOM from "react-dom";
// Import the main file that does everything-- required so we can write <App/> in this file
import App from './components/App';

// Want info on redux? Here's a good explaination-- https://www.linkedin.com/pulse/what-redux-rany-elhousieny-phd%E1%B4%AC%E1%B4%AE%E1%B4%B0-1f
// The tl;dr is it's a handy way of moving data around in a react app
// In slightly more detail the process is...
// 1) We have a button component with an onClick action
// 2) The action is triggered when the button is clicked, let's say it posts our meme
// 3) The action does its thing with the data (post call to flipimg) and that kicks off the reducer
// 4) The reducer then goes and modifies the state of our app which causes our meme to show up
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
// What is thunk you ask? Here's a link https://www.digitalocean.com/community/tutorials/redux-redux-thunk the gist of it is middleware that allows our app to operate asychronusly
import thunk from 'redux-thunk';

// Pulls in the fetch memes action from src/actions/index.js
import {fetchMemes} from './actions';

// This is us setting up the store where state is sset
const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));
// Here's a good article on what dispatch does: https://dev.to/dustinmyers/what-even-is-a-dispatch-function-27ma
// The line below is saying to modify the state right away by fetching a bunch of memes from flipimg
store.dispatch(fetchMemes());

// This renders our app back out in index.html in the public directory
ReactDOM.render(
<Provider store={store}>
    <App/>
    </Provider>
, document.getElementById('root'));