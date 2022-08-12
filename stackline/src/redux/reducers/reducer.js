import { combineReducers } from "@reduxjs/toolkit";

import orderReducer from './orderSlice';

const rootReducer = combineReducers({
    order: orderReducer,
})

export default rootReducer;