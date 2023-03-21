import {username, password} from './secrets';

export const RECIEVE_MEMES = 'RECIEVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function recieveMemes(json){
    const {memes} = json.data;

    return {
        type: RECIEVE_MEMES,
        memes
    }
}

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
  //1) Outer layer sets up the createMeme function (imported to MemeItem.js) with an object passsed back out called new_meme_object
  export function createMeme(new_meme_object) {
    // 2) runs the dispatch function (above in this file) to return the meme json response (a bunch of meme templates)
    return function(dispatch) {
        // 3) Runs the postMemeJson function which takes our text as query (see function above in this file) parameters over to Flipimg's API via POST
      return postMemeJson(new_meme_object)
        .then(new_meme => dispatch(newMeme(new_meme)))
    }
  }