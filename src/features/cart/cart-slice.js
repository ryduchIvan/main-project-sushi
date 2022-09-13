import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const cartSlice = createSlice({
	name: "@@cart",
	initialState: {
		items: [],
		validate: false,
		mobileVersion: false
	},
	reducers: {
		addToCart: (state, action) => {
			const id = action.payload.id;
			const itemIndex = state.items.findIndex(item => item.id === id);
			if (itemIndex < 0) {
				const newItem = {
					...action.payload,
					quintity: 1
				}
				state.items.push(newItem);
			} else {

				state.items.forEach((item, index) => {
					if (index === itemIndex) {
						return {
							...item,
							quintity: item.quintity++
						}
					} else {
						return item;
					}
				})
			}
		},
		removeFromCart: (state, action) => {
			const id = action.payload;
			state.items.forEach((item, index) => {
				if (item.id === id) {
					return state.items.splice(index, 1);
				}
			})
		},
		addQuantity: (state, action) => {
			const id = action.payload;
			state.items.map(item => {
				if (item.id === id) {
					return {
						...item,
						item: item.quintity++
					}
				} else {
					return item
				}
			})
		},
		minusQuantity: (state, action) => {
			const id = action.payload;
			state.items.forEach((item, index) => {
				if (item.id === id) {
					if (item.quintity <= 1) {
						return state.items.splice(index, 1);
					}
					else {
						return {
							...item,
							quintity: item.quintity--
						}
					}
				}
				else {
					return item;
				}
			})
		},
		handlerValidate: (state, action) => {
			state.validate = action.payload;
		},
		setMobileVersion: (state, action) => {
			state.mobileVersion = action.payload;
		}
	}
})

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, addQuantity, minusQuantity, handlerValidate, setMobileVersion } = cartSlice.actions;

export const selectCart = store => store.cart;