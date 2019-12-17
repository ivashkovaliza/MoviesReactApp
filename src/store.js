import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { initialState } from "./reducers/rootReducer";

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

console.log(store.getState());
store.subscribe(() => console.log('Changed store'));

export default store;
