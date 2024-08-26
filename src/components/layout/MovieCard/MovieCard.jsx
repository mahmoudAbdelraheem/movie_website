/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { StringManager } from "../../../core/constants/StringManager";
import { MdFavoriteBorder } from "react-icons/md";
import { addFavorite, removeFavorite } from "../../../store/slices/favorites";
import { MdOutlineFavorite } from "react-icons/md";
import { useContext } from "react";
import { LanguageContext } from "../../../context/language_context";
export default function MovieCard({
  id,
  title,
  releaseDate,
  overView,
  image,
  GoToDetailsPage,
}) {
  //? for get language state
  const favorite = useSelector((state) => state.favorites.favorites);
  const myDispatch = useDispatch();
  //? some for check if movie is favorite
  //? tests whether at least one element in the array passes the test
  const isFavorite = favorite.some((movie) => movie.id === id);

  const lang = useContext(LanguageContext);

  const addToFavorite = (movie) => {
    myDispatch(addFavorite(movie));
    console.log(favorite);
  };
  const removeFromFavorite = (id) => {
    myDispatch(removeFavorite(id));
    console.log(favorite);
  };
  return (
    <>
      <div
        dir={lang.language == "en" ? "ltr" : "rtl"}
        className="card col-lg-3 col-md-4 m-3 p-0"
      >
        <img
          src={StringManager.baseImagesUrl + image}
          className="card-img-top"
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <h5 className="card-title text-truncate ">{title}</h5>
            </div>
            <div className="col-2">
              {isFavorite ? (
                <MdOutlineFavorite
                  style={{ fontSize: "1.5rem", color: "red" }}
                  onClick={() => removeFromFavorite(id)}
                />
              ) : (
                <MdFavoriteBorder
                  style={{ fontSize: "1.5rem" }}
                  onClick={() =>
                    addToFavorite({ id, title, releaseDate, overView, image })
                  }
                />
              )}
            </div>
          </div>
          <h6 className="card-title text-muted">{releaseDate}</h6>
          <p className="card-text custom-text-style">{overView}</p>

          <button
            className="btn btn-primary"
            onClick={() => GoToDetailsPage(id)}
          >
            {lang.language == "en"
              ? StringManager.showDetails.en
              : StringManager.showDetails.ar}
          </button>
        </div>
      </div>
    </>
  );
}
