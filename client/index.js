import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

const router = (
    <Router>
        <App />
    </Router>
)

render(router, document.getElementById('root'))