# Northcoders News App

https://richard-nc-news.netlify.app

The above link will take you to the hosted version of this app. This app was built with React as a front-end project for the Northcoders coding bootcamp. The user interface was built and designed to be optimised on most mobile device displays but will upscale to function as a standard website too. It connects to the NC News API which was also built for the Northocders bootcamp as a back-end course project.

Link: https://richard-nc-news.herokuapp.com/api \
Github: https://github.com/tubez7/backend-nc-news

The app will currently allow you to read articles which can be filtered by topic, ordered by various criteria (eg - date of publication, author's username etc), and sorted in either ascending or descending order.

The app will allow you to access a user profile page and log in as any of the pre-registered users. A user can log out from any point on the app and will be redirected back to the homepage.

Each article can be up-voted and down-voted by the user and a list of comments for the article can be read too. A user is only able to delete a comment from the database if the username of the logged in user matches that of the original comment's author. It is also possible to add a comment to any article provided the user has logged in as any one of the pre-registered users. Any user can also up-vote or down-vote an individual comment, whether they are logged in or not.


## Future Updates
As an ongoing work in progress, some of the features and functionality that will hopefully be incorporated and integrated into the app in conjunction with the back-end API include:
- Sign-up as new user/user creation
- Users can post a new article
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
