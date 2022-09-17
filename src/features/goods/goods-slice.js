import {API} from "../../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadGoods = createAsyncThunk(
	"@@catalog/load-sushi",
	async (category, { rejectWithValue }) => {
		try {
			const response = await fetch(`${API}/${category}`);
			const data = await response.json();
			return data;
		} catch (error) {
			rejectWithValue("Error 404. Будь-ласка перезапустіть сайт")
		}
	}
)
const initialState = {
	status: "idle",
	list: [],
	error: null
}

export const goodsSLice = createSlice({
	name: "@@catalog",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadGoods.pending, (state, action) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loadGoods.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.error.message;
			})
			.addCase(loadGoods.fulfilled, (state, action) => {
				state.status = "received";
				state.list = action.payload;
			})
	}
});

export const selectGoods = store => store.goods;

export const goodsReducer = goodsSLice.reducer;

export const findsGoods = (store, search) => {
	return store.filter(goods => goods.name.toLowerCase().includes(search));
}