import * as API from "api/pricingData";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const PRICING_SLICE_NAME = 'pricing';

const initialState = {
    priceCategories: [],
    isLoading: false,
    error: null,
};

const getPriceCategories = createAsyncThunk(
    `${PRICING_SLICE_NAME}/getPriceCategories`,
    async (arg, thunkAPI) => {
        try {
            const priceCategories = await API.getPricingData(arg);
            return priceCategories;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
        
const pricingSlice = createSlice({
    name: PRICING_SLICE_NAME,
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPriceCategories.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getPriceCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.priceCategories = action.payload;
        });
        builder.addCase(getPriceCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload; 
        });
    }
});

const { reducer } = pricingSlice; 

export {getPriceCategories};

export default reducer;