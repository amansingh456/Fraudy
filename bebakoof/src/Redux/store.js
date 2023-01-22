
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  
} from "redux";

import { reducer as DataReducer } from "./reducer";
import { reducer as AuthReducer } from "../AuthReducer/Reducer"
import thunk from "redux-thunk";
 
const rootReducer =  combineReducers({DataReducer,AuthReducer})




const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store };
