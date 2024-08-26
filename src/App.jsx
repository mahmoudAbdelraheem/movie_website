import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "./routes";
import store from "./store/store";
import { Provider } from "react-redux";
import { LanguageContextProvider } from "./context/language_context";
import { useState } from "react";

function App() {
 const [language , setLanguage ]= useState('en');
  return (
    <>
      <LanguageContextProvider value={{language , setLanguage}}>
        <Provider store={store}>
          <RouterProvider router={Routes} />
        </Provider>
      </LanguageContextProvider>
    </>
  );
}

export default App;

//  <BrowserRouter>
//    <Routes>
//      <Route index element={<Login />} />
//      <Route path={StringManager.homePage} element={<Home />} />
//      <Route
//        path={`${StringManager.movieDetailsPage}/:id`}
//        element={<MovieDetails />}
//      />
//      <Route path={StringManager.searchPage} element={<Search />} />
//      <Route path={StringManager.favoritePage} element={<FavoriteMovies />} />
//      <Route path="*" element={<NotFound />} />
//    </Routes>
//  </BrowserRouter>;
