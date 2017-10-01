import ReactDOM from 'react-dom';
import React from 'react'; // necessary to import for compilation
import App from './components/App';

require('./globals.scss');

//comment
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
