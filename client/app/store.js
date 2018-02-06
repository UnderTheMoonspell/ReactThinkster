import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import postsReducer from '../post/reducer';

const appReducer = combineReducers({
    posts: postsReducer,
    router: routerReducer
})

const store = createStore(appReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    applyMiddleware(routerMiddleware(history), logger))
);

export const history = createBrowserHistory() //syncHistoryWithStore(createBrowserHistory(), store);

export default store;