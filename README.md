# UniForm
A form-building application with React/Node/Express/MongoDB/Mongoose/Material/Select/Autosize/Passport

## Description

*UniForm* is a full stack form-building application. *UniForm* allows users to build any kind of form in minutes and send it out to users with the click of a button. Users can even have their profile data autofill forms sent to them.

## Demo

The demo of *UniForm* can be found [here](https://uniformapp.herokuapp.com/) on Heroku. It has not been optimized for mobile devices, so please view it on desktop.

### Installation

To install the application, follow the instructions below:

``` Javascript
	git clone git@github.com:uniformapp/UniForm.git
	cd UniForm
	yarn install
```

### MongoDB Database Setup

In order to run this application, you should have MongoDB already set up on your machine. If you don't, visit the [MongoDB installation page](https://docs.mongodb.com/manual/installation/) to install the version you need for your operating system. Once you have MongoDB installed, run the command `mongod` in your terminal to open a MongoDB connection.
	
### Running Locally

To run the application locally and access it in your browser, open the UniForm parent folder in the terminal and enter the command `yarn start`. This will run the API server on Port 3001. 

Next, open the [client folder](./client) in another terminal and run `yarn start`. The application will now be running locally in your browser at the URL `http://localhost:3000`.

### Authors

* Louis Boehling:
 *Branding, Experience Design, Front-End Design, React Components, Landing Page, Constructor Pages, Presentation*

* Will Fisher:
 *Branding, Experience Design, Front-End Design, React Components, Logo, Constructor Pages*

* Lacie Forrest:
 *Back-End Logic, Passport Login, MongoDB Connections, Mongoose ORM*

* Luke Myers:
 *Back-End Functionality, Front-End Logic, State Management, Form-Builder, Autofill Functionality*