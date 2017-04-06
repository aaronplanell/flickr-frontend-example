export const ABOUT_TEXT = `
# flickr-frontend-example
A frontend application with React for viewing a list of Pockémons grouped by their type.
It calls to its backend version [flickr-backend-example](https://github.com/aaronplanell/flickr-backend-example/)


## Who is this project for?
It is a good example of how using these tecnologies:
- [React](https://facebook.github.io/react/)
- [Create-React-App](https://github.com/facebookincubator/create-react-app)
- [React-Router v4.0.0](https://github.com/ReactTraining/react-router) (the last version)
- React middlewares like: [redux-thunk](https://github.com/gaearon/redux-thunk), [redux-logger](https://github.com/evgenyrodionov/redux-logger), [redux-freeze](https://github.com/buunguyen/redux-freeze) and [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)
- [Jest](https://facebook.github.io/jest/): Obviously with snapshots


## How to install/configure the project?

### Installation
Just:
\`\`\`
$ git clone https://github.com/aaronplanell/flickr-frontend-example.git
$ cd flickr-frontend-example
$ npm install
\`\`\`
Obviously, the last line can be replaced by:
\`\`\`
$ yarn install
\`\`\`

## How to run the project?
For running in development mode just run:
\`\`\`
$ npm start
\`\`\`
Or:
\`\`\`
$ yarn start
\`\`\`

Automagically the browser will be open with the application.

**Note**: The development mode has Hot Reloading configured even with Redux Store :D


## How create an optimized production build ?
For creating an optimized production build just run:
\`\`\`
$ npm run build
\`\`\`
Or:
\`\`\`
$ yarn build
\`\`\`

You will see a message like:
\`\`\`
The build folder is ready to be deployed.

Starting up http-server, serving ./build
Available on:
  http://127.0.0.1:3001
  http://192.168.1.2:3001
Hit CTRL-C to stop the server

\`\`\`

**Note**: The production mode has only the Redux Thunk middleware.


## How to test the project?
Easy... Just.
\`\`\`
npm run test
\`\`\`
Or:
\`\`\`
yarn test
\`\`\`

You will find all the tests in differents __tests__ folders. It checks:
- Action creators.
- Reducers + Selectors.
- Components
-- Render
-- Snapshot

It uses [Jest technology](https://facebook.github.io/jest/) :)

## Contributing
This project uses.
- [React](https://facebook.github.io/react/)
- [Create-React-App](https://github.com/facebookincubator/create-react-app)
- [React-Router v4.0.0](https://github.com/ReactTraining/react-router)
- React middlewares like:
-- [redux-thunk](https://github.com/gaearon/redux-thunk)
-- [redux-logger](https://github.com/evgenyrodionov/redux-logger)
-- [redux-freeze](https://github.com/buunguyen/redux-freeze)
-- [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)
- [Jest](https://facebook.github.io/jest/)

## License

GPL (GNU GENERAL PUBLIC LICENSE)
`
