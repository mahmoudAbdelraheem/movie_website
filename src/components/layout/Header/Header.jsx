import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { StringManager } from "../../../core/constants/StringManager";
import "./Header.css";
// import { useDispatch, useSelector } from "react-redux";
// import { setLanguage } from "../../../store/slices/localization";
import { useContext } from "react";
import { LanguageContext } from "../../../context/language_context";
import { useSelector } from "react-redux";
export default function Header() {
  //? for get language state
  // const language = useSelector((state) => state.localization.language);
  const favorite = useSelector((state) => state.favorites.favorites);

  const {language, setLanguage} = useContext(LanguageContext);
  // console.log(language);

  //? for update language state
  // const myDispatch = useDispatch();

  const changeLanguage = () => {
    // myDispatch(setLanguage(language == "en" ? "ar" : "en"));
      setLanguage(language == "en" ? "ar" : "en");
  };
  return (
    <div dir={language == "en" ? "ltr" : "rtl"}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">TMDB</Navbar.Brand>
          <Nav className="me-auto ">
            <NavLink to={StringManager.homePage} className="defualt">
              {language == "en" ? StringManager.home.en : StringManager.home.ar}
            </NavLink>
            <NavLink to={StringManager.searchPage} className="defualt">
              {language == "en"
                ? StringManager.search.en
                : StringManager.search.ar}
            </NavLink>
            <NavLink to={StringManager.favoritePage} className="defualt">
              {language == "en"
                ? StringManager.favorite.en
                : StringManager.favorite.ar}
              {favorite.length == 0 ? (
                ""
              ) : (
                <span className="ms-2 translate-middle badge rounded-pill bg-danger">
                  {favorite.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              )}
            </NavLink>
          </Nav>
          <button className="btn btn-danger" onClick={changeLanguage}>
            {language == "en"
              ? StringManager.changeLanguage.en
              : StringManager.changeLanguage.ar}
          </button>
        </Container>
      </Navbar>
    </div>
  );
}
