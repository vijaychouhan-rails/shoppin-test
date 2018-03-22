import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';

const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

export default store;
