import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


export const searchSlice = createSlice({
	name: "@@search",
	initialState: "",
	reducers: {
		setSearch: (state, action) => {
			state = action.payload;
			return state;
		}
	}
});

export const searchReducer = searchSlice.reducer;

export const { setSearch } = searchSlice.actions;

export const selectSearch = store => store.search;