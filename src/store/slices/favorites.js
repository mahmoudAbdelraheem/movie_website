import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice =createSlice({
    name: "favorites",
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            //? add to favorites
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            //? remove from favorites by id
            state.favorites = state.favorites.filter((movie) => movie.id !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;