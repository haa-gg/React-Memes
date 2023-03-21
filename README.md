![alt text](https://github.com/haa-gg/React-Memes/blob/main/screenshots/app-screenshot.png?raw=true)
# What is this?

It's a meme generator that uses the flipimg API and React to spit up hot, fresh memes.

## Why?

Isn't the internet already chock full of meme generators? Yep! The real reason I built this was it made sense as something to build to see how apps, components and states all work together.

### How do you make it work if you download it?
1) Clone the git repo
2) Go to flipimg.com and sign up 
3) make a secrets.js file in /src/actions with the following info...
```const username = 'username';
const password = 'password';

export {username, password};```
4) Run `npm start` in the repo
5) Make some memes!

### How does this work from a React standpoint?

The central point of this app is components/app.js and the components/ reducers all work in relation to that file.
_Sidenote: Technically /src/index.js might be considered more the central to the app but it's just a large series of import statements that really don't describe what's going on in the greater app_

In the App.js file, I've commented it with everything I thought someone just dipping their toes into React might be curious about