import React, { useEffect, useState } from "react";
import { Overlay } from "react-bootstrap";

function Loader() {
  const [Loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  if (Loader === false) {
    document.body.style.Overflow = "hidden";
    document.documentElement.scrollTop = 0;
  } else {
    document.body.style.Overflow = "initial";
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      {Loader ? (
        <section
          style={{ zIndex: "399999" }}
          className=" position-fixed top-0 start-0  h-100 w-100 bg-black"
        >
          <div id="loader-1">
            <div className="loader-content"></div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Loader;
