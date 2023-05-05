import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Work from "./components/Work";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Success from "./components/Success";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Intiger from "./components/Intiger";
import Long from "./components/Long";
import Agile from "./components/Agile";
import Team from "./components/Team";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Loader from "./components/Loader";
import Backtotop from "./components/Backtotop";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <Loader />
      <Backtotop />
      <div className=" bg_black overflow-hidden">
        <div className=" min_vh_100 d-flex flex-column justify-cont ent-center align-i tems-center position-relative">
          <div className="blue_shadow_hero z_index_1"></div>
          <div style={{ zIndex: "1230" }}>
            {" "}
            <Nav />
          </div>
          <div className=" flex-grow-1 d-flex flex-column justify-content-center alig n-items-center">
            <Header />
          </div>
        </div>
        <Featured />
        <Intiger />
        <Work />
        <Long />
        <Agile />
        <Team />
        <Success />
        <Footer />
      </div>
    </>
  );
}

export default App;
