import { reducer as commentsReducer } from './comments/reducer';
import { reducer as likesReducer } from './likes/reducer';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
    commentsReducer,
    likesReducer
})