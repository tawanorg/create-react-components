## How to use

# General use
```
import styled, { ThemeProvider, ReactComponents } from 'create-react-components'

const {
  Button
} = ReactComponents

<ThemeProvider theme={styled.main}>
  <Button>Hello World</Button>
</ThemeProvider>
```

# Overwrite styling
```
import styled, { ThemeProvider, ReactComponents } from 'tgp-components'

const theme = Object.assign({}, styled.main, {
  color: 'red',
  button: Object.assign({}, styled.button, {
    borderColor: 'yellow',
  })
})

const {
  Button
} = ReactComponents

<ThemeProvider theme={theme}>
  <Button>Hello World</Button>
</ThemeProvider>
```

## NPM Scripts
* `start`: run storybook, eslint, serving files at http://localhost:9000
* `develop`: run styleguidist and storybook both at the same time in parallel mode
* `test`: run unit tests
* `test:watch`: run unit tests in watch mode
* `test:coverage`: run unit tests with coverage report
* `lint`: lint according to rules in `package.json` eslintConfig prop
* `clean`: remove dist and coverage directory
* `build`: bundle the lib to the dist dir using development settings
* `build:prod`: bundle the lib to the dist dir using production settings
* `coverage`: run test and generate reports into coverage dir

### Developing a Component
A typical UI component should comply with the following guidelines:

* If it has no state, it should be declared as a [Dumb Component](#dumb-component).
* Unless having another team member approval, all components should have `className` and `style` props declared.
* [coverage](#coverage-to-the-rescue) of the file must be above the configured threshold.
* It should have [tests](#running-tests) and code coverage must be above the configured threshold.
* It should have a [story](#start-coding) declared. With knobs, preferably.
* All code must follow the configured code style.

### Start Coding
We use [Storybook](https://storybook.js.org/) as our UI Development Environment.

Storybook monitors the `<root-dir>/src/components` directory for stories. All of them should be
called `<root-dir>/src/components/<Component-name>/<Component-name>.story.js`.

* Open a console (shell) and type: ```npm start```
* Open a browser at `http://localhost:9000`

#### Dumb Component

For a definition of Dumb Component, please read this [article](https://jaketrent.com/post/smart-dumb-components-react).

Dumb components should be declared as arrow functions like the following:

```
const MyComponent = () => {
  ...
  return <final-JSX-code-here>;
};

MyComponent.defaultProps = {
  anotherProp: "foo"
};

export default MyComponent;
```

### Running tests
Unit tests, uses Jest as test runner.
* `npm run test or npm run test:watch` for run the test optional with watching mode


### Coverage to the rescue
Istanbul is used for code coverage and reporting, so:
* `npm run coverage` and check your testing skills


### Try the bundle
* `npm run build or npm run build:production` for bundle in develop o production mode


### Release the package to NPM
Publish your lib into your private registry or share with the community
* `npm publish`

>**Note:** Before publish, if you will do it into your private registry, remember to add the url into package.json until continue.
```
  "publishConfig": {
    "registry": "https://registry.npmjs.com"
  },
```
