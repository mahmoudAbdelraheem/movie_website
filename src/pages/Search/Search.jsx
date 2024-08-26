import { useState } from "react";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import { FaSearch } from "react-icons/fa";
import axiosInstance from "../../core/config/AxiosInstance";
import { StringManager } from "../../core/constants/StringManager";
import { useNavigate } from "react-router-dom";
import MovieCard from "../../components/layout/MovieCard/MovieCard";


export default function Search() {
  const myNavigator = useNavigate();

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const setSearchValue = (event) => {
    setSearch(event.target.value);
  };

  const getMovies = async () => {
    try {
      let response = await axiosInstance.get(
        StringManager.movieSearchUrl+StringManager.apiKey+"&query=" + search
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };


    const GoToDetailsPage = (MovieID) => {
      myNavigator(`${StringManager.movieDetailsPage}/${MovieID}`);
    };


  return (
    <>
      <Header />
      {/* search input */}
      <div className="row bg-light mb-5">
        <div className="col-md-6  offset-md-3 my-2 ">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search for movies ..."
              onChange={(e) => {
                setSearchValue(e);
              }}
            />
            <span className="input-group-text border-0" id="search-addon">
              <FaSearch onClick={getMovies} />
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-fluid my-5">
          <div className="d-flex flex-wrap justify-content-center">
            {movies.map((movie) => (
              <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              overView={movie.overview}
              image={movie.backdrop_path}
              GoToDetailsPage={GoToDetailsPage}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
