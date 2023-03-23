// This file is where our actions get stored. Our app only has one action, "Build a meme" so this is pretty straightforward
// Get our top secret user info
import {username, password} from './secrets';

// Defining global variables
export const RECIEVE_MEMES = 'RECIEVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function recieveMemes(json){
  // This is where we define the meme variable which gets used in App.js
    const {memes} = json.data;

    return {
        type: RECIEVE_MEMES,
        memes
    }
}

// Runs a fetch command which grabs the meme templates.
// Fetch is a super simple javascript function that grabs API data and returns it as a JSON. 
// In practical terms though this utterly fantastic command allows us to grab content from around the web like tweets, spotify statistics, or all studio Ghibli movies and mash that data into whatever you can imagine
function fetchMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

export function fetchMemes() {
    return function(dispatch) {
        return fetchMemesJson()
        .then(json => dispatch(recieveMemes(json)))
    }
}

function newMeme(meme) {
    return {
      type: NEW_MEME,
      meme
    }
  }
  
  function postMemeJson(params) {
    params["username"] = username;
    params["password"] = password;
  
    const bodyParams = Object.keys(params).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');
  
    console.log('bodyParams', bodyParams);
  
    return fetch('https://api.imgflip.com/caption_image', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodyParams
    }).then(response => response.json());
  }
  
  // The logic here is kind of interesting...
  // It grabs our meme text and POSTs it to the Flipimg API but the exact steps are funky
  // 1) Outer layer sets up the createMeme function (imported to MemeItem.js) with an object passsed back out called new_meme_object
  export function createMeme(new_meme_object) {
    // 2) runs the dispatch function (above in this file) to return the meme json response (a bunch of meme templates)
    return function(dispatch) {
        // 3) Runs the postMemeJson function which takes our text as query (see function above in this file) parameters over to Flipimg's API via POST
      return postMemeJson(new_meme_object)
      // 4) Dispatches the new meme up to the app state
        .then(new_meme => dispatch(newMeme(new_meme)))
    }
  }