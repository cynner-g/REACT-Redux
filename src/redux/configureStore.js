import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Dishes} from './Reducers/dishes';
import {Comments} from './Reducers/comments';
import {Promotions} from './Reducers/promotions';
import {Leaders} from './Reducers/leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes
            , comments: Comments
            , promotions: Promotions
            , leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}