import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';

injectGlobal`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html{
        background-color: black;
        font-size: 62.5%;
        color: black;
    }
    body {
        box-sizing: border-box;
        position: relative;
    }
`

//ReactDOM.render(<Landing />, document.getElementById('root'));
ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
