
<h1 align='center'>
<a><img 
  src="https://wildcard.elixi.re/i/30qp.png"
  height="512"
  width="512"
  alt='Easy Rich Presence'
/>
<a/>
<h1/>

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple **rich presence** application created for **Discord**

## What you need to know

This app was designed with 'profiles' in mind, therefore you can have 'profiles' in the folder **profiles**. WE gave you one so you can use it as a example. You **will** need a machine capable of running node.
You will need to add assets to your application.
You will need to edit the config file in order to start the rich presence application. (You can find this under the folder presence-config)

## What you need

- Node version 8 or higher.
- A text editor capable of editing js and json files (Most are)
- [Discord](https://discordapp.com/download)
- A Discord application (I provide a simple one, but you can [make your own](https://discordapp.com/developers/applications/me) )

## How you can get Easy Rich Presence

Download it through github, its that easy.
Then run this command (In the correct directory):
```sh
$ npm install
```

## Some errors you need to know

The application will log a error and stop if something in the config is not within certain parameters.

- (warn) The timer is below 1500 (15 seconds in milliseconds).
- (Error) The clientId is non existant
- (Error) The name is non existant, or the application cannot find the profile with the name you put in the config.

# I made sure that everything in the config was only necessary.

- You need the clientId for the application to start
- You need the timer to choose how many seconds you want to wait for the rich presence to update.
- The name is there so the app knows what profile you want to use as a default/when the app starts
- The prompt is needed so you can either disable it (you are unable to change the profile once the app is running) or you can enable it (So you can update the profile while the app is running, just note: files do not save while the app is running, you have to restart the app if you want the file to update)

# Config values

- Prompt: true or false
- Timer: the time in milliseconds that you want to wait for the presence to update
- clientId: The id of your discord application
- Name: The name of the profile you want the app to start on.

# You can find a list of assets under the file `assets.txt`

## When done: 
You can run ```npm start``` To start the app

# Non-devDependencies

- discord-rpc