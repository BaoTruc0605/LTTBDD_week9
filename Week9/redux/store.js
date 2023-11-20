import { createStore } from 'redux';
import reducer from "./reducers";
//store
var store = createStore(reducer);

export default store;