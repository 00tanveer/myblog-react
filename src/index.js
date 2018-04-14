import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './containers/Landing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Landing />, document.getElementById('root'));
registerServiceWorker();
