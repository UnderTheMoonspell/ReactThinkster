import { reducer as commentsReducer } from './comments/reducer';
import { combineReducers } from 'redux';
import * as actions from './action';
import postsData from '../data/posts';

const initialState = {
    posts: postsData
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return {...state, counter : state.counter++};
        default:
            return state;
    }
}

export const reducer = combineReducers({
    comments: commentsReducer,
    posts: postsReducer
})