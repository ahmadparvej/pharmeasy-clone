import { createStore, combineReducers, applyMiddleware } from "redux";

import { signUpReducer } from "../Signup/reducer";
import { loginReducer } from "../Login/reducer";


import thunk from "redux-thunk";


const mainReducer = combineReducers({
    loginState : loginReducer,
    signupState : signUpReducer

});

export const store=createStore(mainReducer,applyMiddleware(thunk));