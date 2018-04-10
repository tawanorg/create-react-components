## NPM Scripts
* `start`: run storybook, eslint, serving files at http://localhost:6006
* `guide`: run styleguidist server with eslint at http://localhost:6007
* `develop`: run styleguidist and storybook both at the same time in parallel mode
* `test`: run unit tests
* `test:watch`: run unit tests in watch mode
* `test:coverage`: run unit tests with coverage report
* `lint`: lint according to rules in `package.json` eslintConfig prop
* `clean`: remove dist and coverage directory
* `build`: bundle the lib to the dist dir using development settings
* `build:prod`: bundle the lib to the dist dir using production settings
* `build:guide`: bundle the styleguide app to the styleguide dir
* `typecheck`: run flowtype for check types in JS files
* `typecheck:coverage`: run flowtype with coverage
* `coverage`: run test, flow and generate reports into coverage dir

### Developing a Component
A typical UI component should comply with the following guidelines:

* It should begin with the `// @flow` annotation to enable Flow checker on the file.
* If it has no state, it should be declared as a [Dumb Component](#dumb-component).
* Unless having another team member approval, all components should have `className` and `style` props declared.
* [Flow coverage](#coverage-to-the-rescue) of the file must be above the configured threshold.
* It should have [tests](#running-tests) and code coverage must be above the configured threshold.
* It should have [Styleguidist examples](#document-the-component-with-styleguidist) about its usage.
* It should have a [story](#start-coding) declared. With knobs, preferably.
* All code must follow the configured code style.
* For any design concept, we try to follow [Lightning Design System](https://lightningdesignsystem.com/).

### Start Coding
We use [Storybook](https://storybook.js.org/) as our UI Development Environment.

Storybook monitors the `<root-dir>/src/components` directory for stories. All of them should be
called `<root-dir>/src/components/<Component-name>/<Component-name>.story.js`.

* Open a console (shell) and type: ```npm start```
* Open a browser at `http://localhost:6006`

#### Dumb Component

For a definition of Dumb Component, please read this [article](https://jaketrent.com/post/smart-dumb-components-react).

Dumb components should be declared as arrow functions like the following:

```javascript
type MyComponentProps = {
  myProp: boolean,
  anotherProp?: string
};

const MyComponent = ({ myProp, anotherProp }: MyComponentProps) => {
  ...
  return <final-JSX-code-here>;
};

MyComponent.defaultProps = {
  anotherProp: "foo"
};

export default MyComponent;
```

#### Verify that JS works
* Modify `./src/components/Example/Example.js`

```javascript
import React from 'react';
import type { Children } from 'react';
import cn from 'classnames/bind';
import styles from './Example.css';

const StatelessComponent = ({ message = 'world' }: Props) =>
  (<div className={cx('Message', 'info')}>
    <span>Hello {message}, React is awesome !!!</span>
  </div>);

export default StatelessComponent;
```

* Switch to browser and click the `Example` Story
* The message should be displayed with, e.g. `Hello world, React is awesome !!!`


#### Verify that CSS works
* Change background color, e.g. in `./src/components/Example/Example.css`

```css
info {
  background-color: green;
  ...
}
```
* Switch to browser
* The message background should be green


#### Troubleshooting

##### Importing React Children type

In order to import and use this type, the following code should be included:

```js
import type { Children } from "react";
...
type MyType = {
  children: Children<*>,
  ...
};
```

### Check your types
* `npm run typecheck` for run flow


### Running tests
Unit tests, uses Jest as test runner.
* `npm run test or npm run test:watch` for run the test optional with watching mode


### Coverage to the rescue
Istanbul is used for code coverage and reporting, so:
* `npm run coverage` and check your testing skills


### Try the bundle
* `npm run build or npm run build:prod` for bundle in develop o production mode


### Release the Kraken
Publish your lib into your private registry or share with the community
* `npm publish`

>**Note:** Before publish, if you will do it into your private registry, remember to add the url into package.json until continue.
```
  "publishConfig": {
    "registry": "https://registry.npmjs.com"
  },
```
