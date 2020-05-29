# MyReads Project

This React App is the final assessment project for Udacity's React Fundamentals course. 

## About the App
The project was kickstarted with a template is to time by providing a static example of the CSS and HTML markup that was needed, but without any of the React code that was needed to complete the project. My goal was to add interactivity to the app by refactoring the static code in the template.

It is a simple cataloging app that allows you to place books in one of three shelves or categories.

* Currently Reading
* Want to Read
* Read

It also allows you to search for books based on title and author.

## Getting started with the app:

* Clone the app `git clone https://github.com/Ezeebube5/myreads-react-app.git`
* install all project dependencies with `npm install`
* start the development server with `npm start`
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Files
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for use with the app.
├── package.json # npm package manager file. Not modified
├── public
│   ├── favicon.ico # Icon
│   └── index.html # NOT modified
└── src
    ├── App.css # Styles for app.
    ├── App.js # App root. 
    ├── App.test.js # Used for testing. Provided with Create React App. Testing was encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Images available for use within the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components 
    │   ├── BookItem.js
    │   ├── BookList.js
    │  
    ├── pages 
    │   ├── AddBooksPage.js
    │   ├── HomePage.js
    │   
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```


## Backend Server

To simplify development process, a backend server was provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend. Other search terms might not come up with any results.

## Tech Stack Used:
* React.js
* React Router
* Udacity API
* [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

