#Timestamp Microservice

Timestamp Microservice recives string as a parameter and checks to see 
whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

If it does, it returns both the Unix timestamp and the natural language form of that date.

If it does not contain a date or Unix timestamp, it returns null for those properties.

The only dependency is *moment.js* module

timestamp Microservice requires [Node.js](https://nodejs.org/) v4+ to run.

Install and start the server.

```sh
$ npm install
$ npm start
```