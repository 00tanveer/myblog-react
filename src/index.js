import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './containers/Landing';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components';

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
    }
`

ReactDOM.render(<Landing />, document.getElementById('root'));
registerServiceWorker();
