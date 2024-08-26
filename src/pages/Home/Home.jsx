// import { useEffect, useState } from "react";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
// import axiosInstance from "../../core/config/AxiosInstance";
// import { StringManager } from "../../core/constants/StringManager";
import { useEffect, useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { ProductsThunkAction } from "../../store/slices/home_products";
import { useNavigate } from "react-router-dom";
import MovieCard from "../../components/layout/MovieCard/MovieCard";
import { StringManager } from "../../core/constants/StringManager";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
export default function Home() {
  // const [popularMovies, setPopularMovies] = useState([]);
  //! fetch data from api
  // async function fetchPopularMoviesData() {
  //   try {
  //     let ressponce = await axiosInstance.get(
  //       StringManager.popularMoviesUrl + StringManager.apiKey + "&page=" + page
  //     );
  //     console.log(ressponce.data.results);
  //     setPopularMovies(ressponce.data.results);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  // fetchPopularMoviesData();
  // }, []);
  // useEffect(() => {
  //   fetchPopularMoviesData();
  // }, [page]);
  const myNavigator = useNavigate();

  const [page, setPage] = useState(1);

  const popularMovies = useSelector((state) => state.homeProducts.products);
  const isLoading = useSelector((state) => state.homeProducts.isLoading);
  const homeDispatch = useDispatch();
  useEffect(() => {
    homeDispatch(ProductsThunkAction(page));
  }, []);

  useEffect(() => {
    homeDispatch(ProductsThunkAction(page));
  }, [page]);

  const getNextPage = () => {
    setPage(page + 1);
  };
  const getPrefvoirPage = () => {
    setPage(page - 1);
  };

  const GoToDetailsPage = (MovieID) => {
    myNavigator(`${StringManager.movieDetailsPage}/${MovieID}`);
  };

  return (
  <>
  
     <Header />


      <div className="container-fluid my-5">

        
       <div className="d-flex flex-wrap justify-content-center">
          {isLoading == true ? (
            <>
              <LoadingComponent />
              <LoadingComponent />
              <LoadingComponent />
              <LoadingComponent />
              <LoadingComponent />
              <LoadingComponent />
            </>
          ) : (
            popularMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                overView={movie.overview}
                image={movie.backdrop_path}
                GoToDetailsPage={GoToDetailsPage}
              />
            ))
          )}
        </div>

        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-between">
              <button
                className="btn btn-primary me-2"
                onClick={() => getPrefvoirPage()}
                disabled={page === 1}
              >
                Previous
              </button>
              <button
                className="btn btn-primary"
                onClick={() => getNextPage()}
                disabled={page === 5}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
