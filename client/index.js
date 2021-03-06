import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './app/App';
import ErrorPage from './error-page/ErrorPage';

import { Router, Switch, Route } from 'react-router-dom';
import store, { history } from './app/store';

import { Provider } from 'react-redux';

import { ConnectedRouter } from 'react-router-redux';

const router = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/error" component={ErrorPage} />
                <Route path="/" component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>
)

render(router, document.getElementById('root'))