### Starter Kit for [Building Applications in React and Redux](http://www.pluralsight.com/author/cory-house) on Pluralsight

### Get Started
  - 1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)(https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
  - 2. **Navigate to this project's root directory on the command line.**
  - 3. **Install Node Packages.** - `npm install`
  - 4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
  - 5. Having issues? See below.

### Having Issues? Try these things first:
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
  - Actions:
    - Action creators: Plain objects containing a description of the event. 
      - Must have a type property.
      - Do not pass around anything that is not serializable, like a function or a promise.
      - Action creators are not required.
  - Store:
    - Single responsibility principle.
    ```javascript
      let store = createStore(reducer);
      store.dispatch(action);
      store.subscribe(listener);
      store.getState();
      replaceReducer(nextReducer);
    ```
    - Must dispatch an action in order to update store.
  - Immutability:
    - To change state, return a new object.
    - Immutable already: number, string, boolean, undefined, null
    - Mutable: Objects, arrays, functions.
    - So, do not assign value to a property.
    - Easy ways to copy objects in JavaScript:
      - Object.assign creates a new object allowing us to use existing objects as a template.
        ```javascript
          Object.assign(target, ...sources);
          Object.assign({}, state, { role: 'admin' });
        ```
      - First parameter should be an empty obeject (in order to copy.)
      - Spread operator. Three dots. Ensures shallow copy.
        - Creates a new object or array.
        - Only creates a shallow copy, so you need to manually close nested objects if they are changing.
        ```javascript
          const copy = { ...user, address: {...user.adderss }};
        ```
        - Avoid blindly deep cloning. Expensive. Wasteful. Unnecessary renders.
        - libraries: immer.  Immutable.js.
      - Map. Filter. Reduce. Concat. Spread: Avoid Push. Pop. Reverse.
    - Why?
      - Clarity: Who changed that state? We know when and how. Reducer.
      - Performance: Each property: Has this changed? Reference comparison.
        - Is the old state referencing a new space in memory?
          - No? Then do not re-render.
      - Awesome sauce: Debugging. Time travel. Play interactions back.
        - Each state change can be played, replayed.
    - Enforcing:
      - Trust:
      - Warn: redux-immutable-state-invariant.
      - Enforce: Immer. Immutable.js. seamless-immutable.
  - Reducers:
    - A function that takes state in an action and returns new state.
      ```javascript
        function myReducer(state, action) {
          // return new state based upon the action type passed.
        }
      ```
    - Reducers must be pure functions:
      - Never: Mutate arguments.
      - Never: Perform side effects.
      - Never: Call non-pure functions. e.g.: math.random(). date.now().
    - Reducers should return an updated copy of state. 
      - Redux will use that copy to update the store.
    - One store: Multiple reducers. 
      - All reducers are called when an action is dispatched.
      - All reduces should return the untouched state.
    - Reducer: *Slice* of state. Handle pieces of the store in isolation.
      - Each action can be handled by 1:M reducers. 
      - And 1:M reducers can handle each action.

- CONNECTING REACT TO REDUX:
  - Container versus presentastional components:
    - Smart and dumb components.
      - How things work versus how things look.
      - Smart: Subscribe to Redux state. Dispatch Redux actions.
      - Dumb: Read data from props. Invoke callbacks on props.
  - React-Redux:
    - A seperate library since Redux is not exclusive to React.
      - Provider: Used at App root. Attaches the App to the Redux store.
        ```javascript
          <Provider store={this.props.store}>
            <App />
          </Provider>
        ```
      - It uses Context to pull this off.
      - Connnect:
          - Flux:
            ```javascript
              componentWillMount() {
                AuthorStore.addChangeListener(this.obChange);
              }
              componentWillUnmount() {
                AuthorStore.removeChangeListener(this.obChange);
              }
              onChange() {
                this.setState({authors: AuthorStore.getAll()});
              }
            ```
            - Redux:
              ```javascript
                function mapStateToProps(state, ownProps) {
                  return { authors: state.authors };
                }
                export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
            ```
            - What state do you want to pass to your component on props?
            - What actions do you want to pass to your component on props?
            - Redux benefits: No manual unsubscribe.
            - Declare what subset of state you want. Enhanced performance for free.
      - mapStateToProps: What part of the Redux store do you want to expose as props on tyour component.
        - This function returns an object.
          - Filter or transform state for use.
          - Being specific here improves performance. The component will only re-render when the specific data changes.
          - Upon every update, the mapStateToProps function is called.
            - Try not to perform expensive operations within. filter. mapping.
              - e.g.: Memoize. Was this called with the same parameters? If so, reuse.
      - mapDispatchToProps: What actions do I want to expose as props?
        - Dispatch as its lone parameter.
        - Four ways in which to handle: How you expose your actions to your components.
          - Ingore it: Use dispatch directly.
            ```javascript
              this.props.dispatch(loadCources());
            ```
            - Two downsides: Additional boilerplate. Redux concerns in child components. Tied to Redux.
          - Wrap manually: Wrap creators in dispatch calls.
            ```javascript
              function mapDispatchToProps(dispatch) {
                return {
                  loadCourses: () -> {
                    dispatch(loadCourses());
                  },
                  createCourse: (course) => {
                    dispatch(createCourse(course));
                  }
                }
              }
              // In component.
              this.props.loadCourses();
            ```
            - Wrapping each call to action creator in an anonymous function that calls dispatch.
          - bindActionCreators: This ships with Redux.
            ```javascript
              function mapDispatchToProps(dispatch) {
                return {
                  actions: bindActionCreators(actions, dispatch)
                };
              }
              // In component.
              this.props.actions.loadCourses();
            ```
            - bindActionCreators wraps action in dispatch call for you.
          - Return object: Wrapped in dispatch automatically. Most concise.
            ```javascript
              const mapDispatchToProps = {
                loadCourses
              };
              // In component.
              this.props.loadCourses();
            ```
  - A fireside chat with Redux:
    - React: SOmeone clicked "Save Course."
    - Action: I will dispatch an action so reducers that care can update state.
    - Reducer: I can a copy of the current state and the action to perform. I will make a new copy of the state and return it.
    - Store: Thank you for updating the state reducer. I will ensure that all connected components are aware.
    - React-Redux: Thank you for the new data, Store. I will now intelligently determine if I should rtell React about the change so that it only has to bother with updating the UI when necessary.
    - React: New data! I will update to UI to reflect this.

- REDUX FLOW:
  - Initial Redux Setup:
    1. Create action.
    2. Create reduce.
    3. Create root reducer.
    4. Configure store.
    5. Instantiate store.
    6. Connect component.
    7. Pass props via connect.
    8. Dispatch action.
  - Add feature:
    1. CReate action.
    2. Enhance reducer.
    3. Connect component.
    4. Dispatch action.
  ```javascript
    // Object spread to copy the state, and then override the title the title.
    // NOTE: With object spread, values on the right override thos on the left.
    const course = { ...this.state.course, title: event.target.value };
    // Object shorthand syntax. Clone existing state. Update it. 
    // And then called setState with that new object. 
    this.setState({course})
    // NOTE: Beware the method inheriting the *this* context of the caller.
    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.course.title}>
    // NOTE: THis is not ideal since a new function is allocated on every render.
    // In the constructor:
    this.handleChange = this.handleChange.bind(this);
    // Or this: Class field.
    // Arrow functions inherit the binding context of their enclosing scope.
    handleChange = event => {
      const course = { ...this.state.course, title: event.target.value };
      this.setState({course});
    }
  ```
  - React hooks let us use functions to avoid this complexity. For everything.
    - No confusion over thei `this` keyword binding.
  ```javascript
    // Not recommended to place this onClick handler to the submit button.
    // By attaching an onSubmit handler to the form, both the submit button and the enter key will submit the form.
    <form onSubmit={this.handleSubmit}>
    // Prevent the form to disallow the entire form to post back.
    handleSubmit = (event) => {
      event.preventDefault();
    }
  ```
  - Actions: Saving, deleting, and editing a course.
    ```javascript
      // Note: Object shorthand syntax
        export function createCourse(course) {
          return { type: "CREATE_COURSE", course };
        }
        // Function that will handle the action: reducer(s).
        // Remember: Each reducer handles a 'slice' of state. 
        // A portion of the entire Redux store.
        export default function courseReducer(state = [], action) {
          switch (action.type) {
            case: "CREATE_COURSE":
              // Ensure that you do not nutate state.
              // Clone state. And then clone the course passed in.
              return [...state, { ...action.course } ];
            default:
                return state;
          }
        }
        // Our store:
        const courses = [
          { id: 1, title: "Course 1" },
          { id: 2, title: "Course 2" },
        ]
        courses.find(c => c.id == 2);
        // By Id:
        const courses = {
          1: { id: 1, title: "Course 1" },
          2: { id: 2, title: "Course 2" },
        }
        courses[2];
        // normalizing state shape.
    ```
    - Combine reducers. And create and export rootReducer.
      - NOTE: When you export default you can name the import whatever you'd like.
    - Create Redux store. Define a function that configures the store. Import rootReducer.
      ```javascript
        // Redux middleware is a way to enhance Redux's behavior. 
        // reduxImmutableStateInvariant(). 
        // Note the (). This is a function that needs to be executede.
        export default function configureStore(initialState) {
          // Add support for Redux Dev Tools.
          const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
          return createStore(rootReducer, initialState, 
          composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())));
        }
      ```
      ```javascript
      // Remember: You have to dispatch an action. 
      // If you just call an action creator it won't do anything.
      // Action creators just return an object.
        this.props.dispatch(courseActions.createCourse(this.state.course));
        // Keys help React track earch array element.
        { this.props.courses.map(course => (
          <div key={course.title}>
            {course.title}
          </div>
        ))}
        CoursesPage.propTypes = {
          courses: PropTypes.array.isRequired,
          dispatch: PropTypes.func.isRequired
        };
        // connect automatically passes dispatch in if we omit mapDispatchToProps here.
        export default connect(mapStateToProps)(CoursesPage);
      ```
      ```javascript
        // Remember, if you don't call dispatch, nothing will happen.
        // Action creators must be called by dispatch. 
        function mapDispatchToProps(dispatch) {
          return {
            createCourse: course => dispatch(courseActions.createCourse(course));
          };
        }
        // We don't need to call dispatch here since that being handled in mapDispatchToProps.
        handleSubmit (event) => {
          event.preventDefault();
          this.props.createCourse(this.state.course);
        }
        CoursesPage.propTypes = {
          courses: PropTypes.array.isRequired,
          // Since we declared mapDispatchToProps, dispatch is no longer injected.
          // Only the actions we declared in mapDispatchToProps are passed in.
          createCourse: PropTypes.func.isRequired
        };
      ```
      ```javascript
        function mapDispatchToProps(dispatch) {
          return {
            actions: bindActionCreators(courseActions, dispatch);
          };
        }
        CoursesPage.propTypes = {
          courses: PropTypes.array.isRequired,
          actions: PropTypes.object.isRequired
        };
        this.props.actions.createCourse(this.state.course);
      ```
      ```javascript
        // When declared as an object, each property is automatically bound to dispatch.
        const mapDispatchToProps = {
          createCourse: courseActions.createCourse;
        }
      ```

- ASYNC IN REDUX:
  - Mock API merits. Ultra-fast. Test slowness.
    - json-server.
    - prestart:api will run before start:api because it has the same name, with `pre` on the front.
    - This mocb db (db.json) is created each time we start the API.
      - This assures that api starts with good data.
    - json-server simulates a database by writing to db.json.
    - run-p command allows us to run multiple npm scripts at the same time.
  - Setup.
  - Redux middleware.
    - action -> middleware -> reducer.
      - Handling async API calls. Logging. Crash reporting. Routing.
  - Async libraries.
    - redux-thunk: Returns functions from action creators.
      - Functions.
      - Clunky to test.
      - Easy to learn.
    - redux-promise: Use promises for async.
    - redux-observable: Use RxJS observables.
    - redux-saga: Use ES6 generators.
      - Generators. Functions that can pause and resume later.
      - Easy to test. Assert of effects.
      - Hard to learn. Large API and generators.
  - Implement thunks.
    ```javascript
      export function deleteAuthor(authorId) {
        return (dispatch, getState) => {
          return AuthorApi.deleteAuthor(authorId).then(() => {
            duspatch(deletedAuthor(authorId));
          }).catch(handleError);
        };
      }
    ```
    - Thunk: A function that returns a function.
      - A function that wraps an expression to delay its evaluation.
      - This allows use to avoid creating side effects with action, action creators, and components.
      - getState. Useful for cache and authentication.
    - Middleware isn't required to supprt async in Redux. But you probably want it.
      - Don't have to pass dispatch with middleware.
      - Big win with thunks. Your components can call sync and async actions the same way.
      1. Consistency.
      2. Purity. Avoid binding to side effects.
      3. Easier testing.
    - Load courses by dispatchig an action via Redux:
      - options for when to load courses:
        1. When the application loads.
        2. When the course page is loaded.
        ```javascript
          componentDidMount() {
            this.props.actions.loadCourses().catch(error => {
              // TODO:
            });
          }
        ```

- ASYNC WRITES IN REDUX:
  - With Redux, you'll often use the spread operator, map, filter, and reduce.
  - React router: { Redirect }
  - Reuseable Bootstrap form inputs.
  - Populated the form via:
    - mapStateToProps.
    - useEffect.

- ASYNC STATUS AND ERROR HANDLING:
  - Dedicated actions:
  - Dedicated reducers:

- TESTING REACT:

- TESTING REDUX:

- PRODUCTION BUILDS: