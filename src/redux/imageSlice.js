import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImages = createAsyncThunk(
    "images/fetchImages",
    async (page) => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
        );
        return response.data;
    }
);

const imageSlice = createSlice({
    name: "images",
    initialState: {
        images: [],
        page: 1,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.loading = false;
                state.images = [...state.images, ...action.payload];
                state.page += 1;
            })
            .addCase(fetchImages.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default imageSlice.reducer;
