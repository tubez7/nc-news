# Northcoders News App

https://richard-nc-news.netlify.app

The above link will take you to the hosted version of this app. This app was built with React as a front-end project for the Northcoders coding bootcamp. The user interface was built and designed to be optimised on most mobile device displays but will upscale to function as a standard website too. It connects to the NC News API which was also built for the Northocders bootcamp as a back-end course project.

Link: https://richard-nc-news.herokuapp.com/api \
Github: https://github.com/tubez7/backend-nc-news

The app will currently allow you to read articles which can be filtered by topic, ordered by various criteria (eg - date of publication, author's username etc), and sorted in either ascending or descending order.

Each article can be up-voted and down-voted by the user and a list of comments for the article can be read too. A user is able to delete any comment from the database and is also able to add new comments by posting as the registered user "weegembump".


## Future Updates
As an ongoing work in progress, some of the features and functionality that will hopefully be incorporated and integrated into the app in conjunction with the back-end API include:
- A user profiles page 
- Functionality to sign in as different user
- Sign-up as new user
- Voting on an individual comment
- Comment deletion restricted to the original comment author
- Improved user interface/styling with added CSS framework and library integration
- Pagination and limits for articles and comments rendered on a single page


## Set-up & Local Installation 

### Fork and clone the project
Fork the repo and clone the forked repo on your computer by running the following command from your chosen local directory:
```
$ git clone /github-project-url/
``` 

### Install dependencies
From the root directory of the project run the following command: 
```
$ npm install
``` 

## View the App on a Local Server
```
$ npm start
``` 

## Create a Production Build
Run the commands:
```
$ npm build
``` 

## Minimum Requirements
You will need to make sure you have installed `Node.js v10.19.0` or above in order to run the project on your machine.
