![alt text](https://github.com/haa-gg/React-Memes/blob/main/screenshots/app-screenshot.png?raw=true)
# What is this?

It's a meme generator that uses the flipimg API and React to spit up hot, fresh memes.

## Why?

Isn't the internet already chock full of meme generators? Yep! The real reason I built this was it made sense as something to build to see how apps, components and states all work together.

### How do you make it work if you download it?

1) Clone the git repo
2) Go to flipimg.com and sign up 
3) Make a secrets.js file in /src/actions with the following info...
```
const username = 'username';
const password = 'password';

export {username, password};
```
4) Run `npm start` in the repo
5) Make some memes!

### How does this work from a React standpoint?

The central point of this app is components/app.js and the components/ reducers all work in relation to that file.
_Sidenote: Technically /src/index.js might be considered more the central to the app but it's just a large series of import statements that really don't describe what's going on in the greater app_

In the App.js file, I've commented it with everything I thought someone just dipping their toes into React might be curious about

#### Quick rundown on redux

Quick video link: https://youtu.be/YsEE6LIkqrI

Above for the curious is a quick explaination of redux and below is a diagram of the same thing

![alt text](https://github.com/haa-gg/React-Memes/blob/main/screenshots/redux-image.png?raw=true)

Quick analagy-- Redux is a store to store the state of the variables in your app. Redux creates a process and procedures to interact with the store so that components will not just update or read the store randomly. Similar to the bank. It does not mean because you have money in the bank that you can go anytime, open the vault, and take money. You have to go through certain steps to withdrawal money.

Put a little more technically, it's a way to control scope or what bits of an app have access to other parts.

### Redux explaination of this app

*Components:* All files in the components folder of this app. These are individual parts of an app which can be just bits of javascript of visual parts of the application... or any combination of both

*Actions:* See the index.js file in the actions folder. These are the big things your app does, in this case that is making a meme.

*Reducers:* See index.js in our reducers file to see the specific actions. In broader terms reducers are what pass changes in the app such as a newly entered meme back into the main app section (e.g. Store)

*Store:* Defined in /src/index.js and this is the part of the app that actually holds submitted memes