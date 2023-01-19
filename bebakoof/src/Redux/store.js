import {
  applyMiddleware,
  legacy_createStore,
} from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
 


const store = legacy_createStore(
  reducer,
 composeWithDevTools(applyMiddleware(thunk))
);

export { store };
