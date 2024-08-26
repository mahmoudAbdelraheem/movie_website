import { useParams } from "react-router-dom";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import { useEffect, useState } from "react";
import axiosInstance from "../../core/config/AxiosInstance";
import { StringManager } from "../../core/constants/StringManager";
export default function MovieDetails() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  //! fetch data from api
  async function fetchMovieDetailsData() {
    try {
      let response = await axiosInstance.get(
        StringManager.movieDetailsUrl + id + StringManager.apiKey
      );
      console.log(response.data);
      setMovieDetails(response.data);
    } catch (error) {
      console.error("Error fetching movie details data:", error);
    }
  }

  useEffect(() => {
    fetchMovieDetailsData();
  }, []);
  return (
    <>
      <Header />
      <div className="container mb-5">
        <div className="row my-2 ">
          <div className="col-md-12 d-flex justify-content-evenly">
            <p className=" badge bg-dark p-2 m-2 text-center text-danger">
              {movieDetails.release_date}
            </p>
            <p className=" badge bg-dark p-2 m-2 text-center text-danger">
              Rating: {movieDetails.vote_average}
            </p>
            <p className=" badge bg-dark p-2 m-2 text-center text-danger">
              {movieDetails.runtime} minutes
            </p>
            <p className=" badge bg-dark p-2 m-2 text-center text-danger">
              {" "}
              {movieDetails.genres &&
                movieDetails.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              src={`${StringManager.baseImagesUrl}${movieDetails.backdrop_path}`}
              className="img-fluid rounded shadow-lg my-3 "
            />  
            <img
              src={`${StringManager.baseImagesUrl}${movieDetails.poster_path}`}
              className="img-fluid rounded shadow-lg my-3 "
            />
          </div>
          <div className="col-md-8">
            <h1 className="fs-1 fw-bold">{movieDetails.title}</h1>
            <p className="fs-5 fw-bold">{movieDetails.overview}</p>
            <p>{movieDetails.tagline}</p>

            <a href={movieDetails.homepage} target="_blank">
              Movie Home Page
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
