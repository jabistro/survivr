import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import imageReducer from './images';
import albumReducer from './albums';
import commentReducer from './comments.js';
import likeReducer from './likes';
import usersReducer from './users';

const rootReducer = combineReducers({
    session: sessionReducer,
    images: imageReducer,
    albums: albumReducer,
    comments: commentReducer,
    likes: likeReducer,
    users: usersReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};


export default configureStore;
