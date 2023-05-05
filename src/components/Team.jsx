import React from "react";
import team_img from "../assets/img/png/team img.png";

function Team() {
  return (
    <>
      <section className="bg_light_white pb-lg-5 py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2
                className="ff_konexy fw-normal fs_4xl mb-0 text_black mt-lg-5"
                data-aos="fade-down"
                data-aos-easing="ease-in"
                data-aos-duration="1800"
                data-aos-delay="500"
              >
                Team Full of Stars{" "}
              </h2>
              <p
                className="ff_gilroy_normal fw-normal fs_xl mb-2 text-black pe-lg-5 me-lg-4 mt-2 pt-1"
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="1800"
                data-aos-delay="500"
              >
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.{" "}
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
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-duration="1800"
              data-aos-delay="500"
            >
              <img
                className="w-100 transform_y_team mt-sm-5 mt-4 mt-lg-0"
                src={team_img}
                alt="team_img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
