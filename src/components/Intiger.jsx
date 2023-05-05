import React from "react";
import integer_1 from "../assets/img/svg/integer1.svg";
import integer_2 from "../assets/img/svg/integer2.svg";
import integer_3 from "../assets/img/svg/integer3.svg";

function Intiger() {
  return (
    <>
      <section className="bg_white py-5">
        <div className="container">
          <h2 className="ff_konexy fw-normal fs_4xl mb-0 ">
            Integer et nisl non
          </h2>
          <div className="row mt-sm-5 pt-2 justify-content-center">
            <div
              className="col-lg-4 col-sm-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="text-center integer_box py-md-5 py-3 px-md-4 px-3 h-100">
                <img src={integer_1} alt="integer_1" />
                <h3 className="ff_inter fw-semibold fs_2xl text_black mb-0 mt-4 pt-2">
                  Enterprise WordPress Solutions{" "}
                </h3>
                <p className="ff_gilroy_normal fw-normal fs_xl text-black opacity-75 mb-0 mt-3 px-sm-3 mb-3 pb-1">
                  Pretium, a et sapien non nunc libero. Id dolor sed quis
                  convallis turpis purus feugiat nibh eu. Auctor cras hac ac,
                  sociis diam montes, turpis commodo elit.
                </p>
                <a
                  className="text_primary ff_gilroy_semibold fw-semibold fs_xl"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <div className="text-center integer_box py-md-5 py-3 px-md-4 px-3 h-100">
                <img src={integer_2} alt="integer_2" />
                <h3 className="ff_inter fw-semibold fs_2xl text_black mb-0 mt-4 pt-2">
                  Small to Mid Size Business Development
                </h3>
                <p className="ff_gilroy_normal fw-normal fs_xl text-black opacity-75 mb-0 mt-3 px-sm-3 mb-3 pb-1">
                  Et nunc fermentum id amet tempus, elementum. Eget ac ultrices
                  tortor, mattis amet blandit aenean amet. Massa diam lacus,
                  aliquam neque, cursus.
                </p>
                <a
                  className="text_primary ff_gilroy_semibold fw-semibold fs_xl"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <div className="text-center integer_box py-md-5 py-3 px-md-4 px-3 h-100">
                <img src={integer_3} alt="integer_3" />
                <h3 className="ff_inter fw-semibold fs_2xl text_black mb-0 mt-4 pt-2">
                  Support & Maintenance
                </h3>
                <p className="ff_gilroy_normal fw-normal fs_xl text-black opacity-75 mb-0 mt-3 px-sm-3 mb-3 pb-1">
                  Ac donec ipsum fringilla tortor, consectetur etiam sociis amet
                  quis. Viverra volutpat pretium non in fusce tellus sed urna.
                  Pharetra ullamcorper et donec aliquam.
                </p>
                <a
                  className="text_primary ff_gilroy_semibold fw-semibold fs_xl"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intiger;
