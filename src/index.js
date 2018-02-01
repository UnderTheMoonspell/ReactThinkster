import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import { Provider } from 'react-redux';
import { promiseMiddleware } from './middleware/index';

const defaultState = { 
    appName: 'conduit',
    article: null
 };

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'HOME_PAGE_LOADED':
            return { ...state, articles: action.payload.articles }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
