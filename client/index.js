import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './app/App';

import { BrowserRouter as Router } from 'react-router-dom';
import store, { history } from './app/store';

import { Provider } from 'react-redux';

const router = (
    <Router store={store}>
        <App />
    </Router>
)

render(router, document.getElementById('root'))