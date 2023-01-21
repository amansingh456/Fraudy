
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  
} from "redux";

import { reducer } from "./reducer";
import {reducer as AuthReducer} from "../AuthReducer/Reducer"
import thunk from "redux-thunk";
 
const rootReducer=  combineReducers({reducer,AuthReducer})




const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export { store };
