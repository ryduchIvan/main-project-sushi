//Instruments
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
//Components
import { goodsReducer } from "./features/goods/goods-slice";
import { searchReducer } from "./features/search/search-slice";
import { cartReducer } from "./features/cart/cart-slice";
import { specificItemReducer } from "./features/specificItem/specificItem-slice";



const rootReducer = combineReducers({
	goods: goodsReducer,
	search: searchReducer,
	cart: cartReducer,
	specificItem: specificItemReducer
})



export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
})
