import { useSelector } from "react-redux";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import MovieCard from "../../components/layout/MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";
import { StringManager } from "../../core/constants/StringManager";

export default function FavoriteMovies() {
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log(favorites);
    const myNavigator = useNavigate();
    const GoToDetailsPage = (MovieID) => {
      myNavigator(`${StringManager.movieDetailsPage}/${MovieID}`);
    };

    return (
      <>
        <Header />
        <div className="container ">
          <div className="d-flex flex-wrap justify-content-center">
            {favorites.length > 0 ?   favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                releaseDate={movie.releaseDate}
                overView={movie.overView}
                image={movie.image}
                GoToDetailsPage={GoToDetailsPage}
              />
            )) : <h1 className="mt-5 text-center" style={{height:"400px"}}>No Favorites</h1>}
          </div>
        </div>

        <Footer />
      </>
    );
  }