![alt text](https://github.com/haa-gg/React-Memes/blob/main/screenshots/app-screenshot.png?raw=true)
# What is this?

It's a mme generator that uses the flipimg API and React to spit up hot, fresh memes.

## Why?

Isn't the internet already chock full of meme generators? Yep! The real reason I built this was it made sense as something to build to see how apps, components and states all work together.

### How do you make it work if you download it?
1) Clone the git repo
2) Go to flipimg.com and sign up 
3) make a secrets.js file in /src/actions with the following info...
`const username = 'username';
const password = 'password';

export {username, password};`
4) Run `npm start` in the repo
5) Make some memes!
