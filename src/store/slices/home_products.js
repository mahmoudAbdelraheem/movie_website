import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../core/config/AxiosInstance";
import { StringManager } from "../../core/constants/StringManager";

export const ProductsThunkAction = createAsyncThunk("getAllProducts", async (page) => {
  try {
    let ressponce = await axiosInstance.get(
      StringManager.popularMoviesUrl + StringManager.apiKey + "&page="+page
    );
    console.log(ressponce.data.results);
    return ressponce.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error.message;
  }
});

 const HomeProductsSlice = createSlice({
  name: "homeProducts",
  initialState: {
    products: [],
    isLoading: false,
    errors: "",
  },
  extraReducers: (builder) => {
    //? pending state
    builder.addCase(ProductsThunkAction.pending, (state, action) => {
      state.isLoading = true; //? show loading
    });
    //? fulfilled state
    builder.addCase(ProductsThunkAction.fulfilled, (state, action) => {
      state.isLoading = false; //? hide loading
      state.products = action.payload; //? get data
    });
    //? rejected state
    builder.addCase(ProductsThunkAction.rejected, (state, action) => {
      state.isLoading = false; //? hide loading
      state.errors = action.error.message; //? get error
    });
  },
});

export default HomeProductsSlice.reducer;
