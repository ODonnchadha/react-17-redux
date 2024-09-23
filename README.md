# Starter Kit for [Building Applications in React and Redux](http://www.pluralsight.com/author/cory-house) on Pluralsight

## Get Started
  - 1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)(https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
  - 2. **Navigate to this project's root directory on the command line.**
  - 3. **Install Node Packages.** - `npm install`
  - 4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
  - 5. Having issues? See below.

## Having Issues? Try these things first:
  - 1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
  - 2. Don't run the project from a symbolic link. It will cause issues with file watches.
  - 3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
  - 4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
  - 5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
  - 6. Nothing above work? Delete your node_modules folder and re-run npm install.

## Building Applications with React 17 and Redux by Cory House

- OVERVIEW:
  - Learn how to use React, Redux, React Router, and modern JavaScript to build an app with React.
  - Use Webpack, Babel, Jest, React Testing Library, Enzyme, and more to build a custom React development environment and build process from the ground up.

- INTRODUCTION:
  - Custom development environment. Jest, Enzyme, and React testing library.
  - Why Redux:
    - One store. Reduced boilerplate. Isomorphic. Immutable store. 
    - Hot reloading. Yime-travel debugging. Small.

- ENVIRONMENT BUILD:
  - Build a development environment.
    - Compile JSX.
    - Transpile JS.
    - Linting.
    - Generate index.html
    - Reload on save.
  - All via one command.
      - Node.
      - Webpack: Bundle your assets. Configured via object literal:
          - webpack.coonfig.dev.js
      - Babel: JavaScript compiler. We can use next-generation JavaScript.
        - Transpile modern JavaScript down to supported browsers.
        - Compile JSX to JavaScript. e.g.: React.createElement();
      - npm Scripts: "scripts" within package.json.
        - NOTE: EADDRINUSE error. 
        - Another instance of the app is running on the port.
      - ESLint: Quickly notified of potential issues within the codebase.
        - Tell ESLint to use the recommended settings.
          ```javascript
            { jsx: true}
          ```
          - Tell WebPack to run ESLint for us: e.g.: "eslint-loader"
          - NOTE: Rules are processed from the bottom up.
          - Programmatically enforce coding standards.
      - VS Code.
      - Prettier. Auto-format.
      - package.json

- REACT COMPONENT APPROACHES:
  - React component creation approaches:
  - Container versus Presentational Component.
  - Four common ways to create classes:
    - createClass:
      ```javascript
        var C = React.createClass({
          render: function() {
            return (
              <h1>Hello World</h1>
            );
          }
        });
      ```
    - ES class:
      ```javascript
        class C extends React.Component{
          constructor(props) {
            super(props);
          }
          render() {
            return (
              <h1>Hello World</h1>
            );
          }
        }
      ```
    - Function:
      ```javascript
        function C(props) {
          return (
            <h1>Hello World</h1>
          );          
        }
      ```
    - Arrow function:
      ```javascript
        const C = (props) => <h1>Hello World</h1>
      ```
  - Functional component benefits.
    - Why? Easier to understand. Avoid `this` keyword.
    - Eliminates binding. Transpiles to less code.
    - Higher signal-to-noise ratio.
    - Enhanced code completion/intellisense. Easy to test.
    - Improved performance. Classes may be removed in the future.
  - Class versus function component:
    - Class:
      - State. Refs. Licecycle methods.
    - Function:
      - React hooks.
        - useState(): State.
        - useEffect(): Handles side effects, replacing lifecycle methods.
        - useRef():
        - useMemo(): Avoid needless re-renders.
    - A function component cannot: 
      - componentDidError && getSnapshotBeforeUpdate.
  - Container versus Presentational Components:
    - Container:
      - Little to no markup. "The backend for the frontend."
      - Typically created with { connect }
      - Knows all about Redux.
      - Often stateful.
    - Presentational:
      - Nearly all markup.
      - Receive data and actions via props.
      - Knows nothing about Redux.
      - Not stateful. Just plain functions.

- INITIAL APP STRUCTURE:
  - First pages. Layout. Configure routing. Setup navigation.

- INTRO TO REDUX:
  - Do I need Redux?
    - React Context versus React with Redux.
      1. Lift state? With data passed down through props. Prop drilling.
      2. React Context. Exposed global data and functions. 
        - Import the context in ordeer to consume.
        - Declare a UserContext.Provider.
      3. Redux. Centralized store. Dispatch an action. Update the store. 
        - And connected components re-render.
      - Redux:
        - Complex data flows.
        - Inter-component communication.
        - Non-heirarchical data.
        - Many actions.
        - Same data used in many places.
  - Redux three (3) core principles:
    - Application state within one (1) immutable store.
    - Actions trigger changes.
    - State changes are handled by pure functions, called reducers.
      - Reducers update state.
  - Flux versus Redux:
    - Data flows down. Actions flow up.
    - Both: Unidirectional flow. Actions. Stores. (Flux. multiple stores.)
    - Redux:
      - Reducers: Current state in an action and then return new state.
      - Container components. And then down to dumb components.
      - Immutability.
      - No dispatcher. Pure functions. 1:M reducers.
      - Store and change logic are seperate.
      - One store. Single source of truth.
      - Single store with hierarchical reducers.
      - No dispatcher.
      - Container components utilize connect.
      - State is immutable.
    - Flux:
      - Action -> Dispatcher -> (event emmiter) Store -> React.
      - Stores contain state and change logic.
      - Multiple stores. User. Product.
      - Flat and disconnected stores.
      - Singleton dispatcher.
      - React components subscribe to stores.
      - State is mutaed.
  - Redux flow:
    - Action -> Store -> React.
      - Store -> Reducers -> Store.
    ```javascript
      { type: RATE_COURSE, rating: 5 }
      function appReducer(state = defaultState, action) {
        switch(action.type) {
          case: RATE_COURSE:
          // return new state.
        }
      }
    ```

- ACTIONS, STORES, AND REDUCERS:
  - 
