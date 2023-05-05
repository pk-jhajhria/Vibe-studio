import React from "react";
import agile_img from "../assets/img/png/agile img.png";

function Agile() {
  return (
    <>
      <section className="bg-white py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-easing="ease-in"
              data-aos-duration="1800"
              data-aos-delay="500"
            >
              <img className="w-100" src={agile_img} alt="agile_img" />
            </div>
            <div className="col-lg-7">
              <div className="ps-lg-5 ms-lg-4 mt-4 mt-lg-0">
                <h2
                  className="ff_konexy fs_4xl mb-0 fw-normal text_black"
                  data-aos="fade-down"
                  data-aos-easing="ease-in"
                  data-aos-duration="1800"
                  data-aos-delay="500"
                >
                  <span className="text_primary">Agile WordPress</span>
                  Development Project management
                </h2>
                <p
                  className="ff_gilroy_normal fw-normal fs_xl mb-2 text-black opacity-75 mt-2 pt-1 pe-lg-5"
                  data-aos="fade-left"
                  data-aos-easing="ease-in"
                  data-aos-duration="1800"
                  data-aos-delay="500"
                >
                  Suspendisse consequat egestas arcu et et. Viverra quis euismod
                  neque luctus bibendum. Fringilla in nibh fringilla vulputate
                  in. Elit, ultricies vitae pulvinar arcu dignissim ac non
                  rutrum. Lacus tortor sollicitudin risus eget euismod in
                  bibendum turpis.
                </p>
                <a
                  className="bg_primary rounded-5 explore_btn text_white ff_gilroy_semibold fw-semibold fs_xl mt-sm-4 mt-2 d-inline-block"
                  data-aos="fade-up"
                  data-aos-easing="ease-in"
                  data-aos-duration="1800"
                  data-aos-delay="500"
                  href="#"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Agile;
