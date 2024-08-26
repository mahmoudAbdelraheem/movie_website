import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import "./NotFound.css";
export default function NotFound() {
    return (
      <>
        <Header />
        <div
          className="container text-center m-5 p-5 "
        >
          <h1 className="text-danger fw-bold fs-1 text-style">Page Not Found</h1>
        </div>
        <Footer />
      </>
    );
}