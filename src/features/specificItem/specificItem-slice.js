import{API} from "../../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadItem = createAsyncThunk(
	"@@specific-item/load-item",
	async ({ category, id }, { rejectWithValue }) => {
		try {
			const response = await fetch(`${API}/${category}?id=${id}`);
			const data = await response.json();
			return data;
		} catch (error) {
			rejectWithValue("Товар не знайден")
		}
	}
)

const initialState = {
	status: "idle",
	id: "",
	item: [],
	error: null
}

export const specificItemSlice = createSlice({
	name: "@@specific-item",
	initialState: initialState,
	reducers: {
		closePopup: () => {
			return initialState
		},
		openPopup: (state, action) => {
			state.id = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadItem.pending, (state, action) => {
				state.status = "loading";
				state.error = null
			})
			.addCase(loadItem.rejected, (state, action) => {
				console.log(action);
				state.status = "rejected";
				state.error = action.payload;
			})
			.addCase(loadItem.fulfilled, (state, action) => {
				state.status = "recieved";
				state.item = action.payload;
			})
	}
});

export const specificItemReducer = specificItemSlice.reducer;

export const { closePopup, openPopup } = specificItemSlice.actions;

export const selectItem = store => store.specificItem;