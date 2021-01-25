import {createStore,combineReducers,applyMiddleware} from 'redux';
import productReducer from './Reducers/Product';
import companyReducer from './Reducers/Company';
import {add$ToCompanyName} from './MiddleWare/crud';

const reducer=combineReducers({productReducer,companyReducer});
const store=createStore(reducer,applyMiddleware(add$ToCompanyName));
window.store=store;
export default store;