# Foobar

This project is currently a backend for a soon to become a Student Resource Management Portal

## Installation

Use the yarn or npm package installer to install all the packages.

npm i 

or

yarn


## Setup

Create an account on https://developers.facebook.com/

Create an app (Buisness Type) on https://developers.facebook.com/apps/

Go to your newly created app and select the integrate with whatsapp option. Click on the setup Button.

You can use an existing buisness account or create a test buisness account

Follow the quickstart guide.

Your webhook should point to your server where you are trying to host the project.
Also the verify token which needs to be entered along with the callback URL can be anything and should be added in the env file with name VERIFY_TOKEN

Go the getting started tab.

You ll find the Temporary access token, add it to the env file an d name the variable ACCESS_TOKEN

You ll also find the api link to which you need to make calls in order to send the message , add that to the env file too, with name API_URL

You ll need a mongo db databse too. Add the connection url to the env file with the name DB_URL.

## env file

refer to the demo.env file for help

## How to start the project

node index.js


