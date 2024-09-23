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
