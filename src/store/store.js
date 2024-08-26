import { configureStore } from "@reduxjs/toolkit";
// import localizationSlice from "./slices/localization";
import favoritesSlice from "./slices/favorites";
import homeProductsSlice from "./slices/home_products";
const store = configureStore({
  reducer: {
    // localization: localizationSlice,
    favorites: favoritesSlice,
    homeProducts: homeProductsSlice,
  },
});

export default store;
