import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { StringManager } from "./core/constants/StringManager";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Search from "./pages/Search/Search";
import FavoriteMovies from "./pages/Favorite/FavoriteMovies";
import NotFound from "./pages/NotFound/NotFound";

export const Routes= createBrowserRouter([
   
    {index: true, element: <Login />},
    {path: StringManager.homePage, element: <Home /> },
    {path: `${StringManager.movieDetailsPage}/:id`, element: <MovieDetails />},
    {path: StringManager.searchPage, element: <Search />},
    {path: StringManager.favoritePage, element: <FavoriteMovies />},
    {path: "*", element: <NotFound />},

]);