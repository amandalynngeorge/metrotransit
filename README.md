# MetroTransit

This React project provides MetroTransit stops for selected routes and directions base on the NexTrip API at https://svc.metrotransit.org/swagger/index.html

## Running this project

This project runs on node 18.1.0

### `npm i`

Runs the install for everything needed to use this app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Creating the App

I chose to create this app using React and Material UI for its easy of use in quickly creating a good looking web application. With not having a specific deadline I chose to start with creating the functionality first, then if there is more time left look into adding styles.

### Challenges I encountered: 

- Not realizing that NexTrip is using a new API and having the response for the first one that is not running initally give me cors errors.

- Testing useQuery and learning I needed to include the QueryClientProvider in the test files as well

- Triggering refetches with useQuery by passing it the prop that will change