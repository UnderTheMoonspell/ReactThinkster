import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './app/App';
import ErrorPage from './error-page/ErrorPage';

import { Router, Switch, Route } from 'react-router-dom';
import store, { history } from './app/store';

import { Provider } from 'react-redux';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/error" component={ErrorPage} />
                <Route exact path="/" component={App} />  
            </Switch>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))