import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import { reducer as postReducer } from '../post/reducer';
import { reducer as photoGridReducer } from '../photo-grid/reducer';

const appReducer = combineReducers({
    posts: postReducer,
    photogrid: photoGridReducer,
    router: routerReducer
})

const store = createStore(appReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    applyMiddleware(routerMiddleware(history), logger))
);

export const history = createBrowserHistory() //syncHistoryWithStore(createBrowserHistory(), store);

export default store;