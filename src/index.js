import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';

// Docs stylesheet
import './index.css';
// Coding formatter stylesheet
import 'highlight.js/styles/ocean.css';

ReactDOM.render(<Docs />, document.getElementById('root'));
registerServiceWorker();
