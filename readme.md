# RegalCredit Weather App

A Weather App Powered by Accuweather Locations & Forecast API.

## Features

- Searches City using Accuweather Location API
- A 3 Days Weather Forecast.
- Data consistency.

## Tech

RegalCredit Weather App uses a number of open source projects to work properly:

- [NodeJS v18.9.0] - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
- [ExpressJS] - fast node.js network app framework
- [Axios] - Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF.
- [express-handlerbars] - Handlebars. js is a templating engine similar to the ejs module in node. js, but more powerful and simple to use.
- [dotenv] - for storing environment variable e.g. (API URL, API key)
- [TailwindCSS] - A utility-first CSS framework.
- [jQuery]

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v16+ to run.

Update the API key under .env file located at the root project directory.
```sh
ACCUWEATHER_URL=http://dataservice.accuweather.com
ACCUWEATHER_KEY=your_api_key
```

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```
