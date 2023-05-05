import React from "react";
import vdo_btn from "../assets/img/svg/vdo btn.svg";
import hero_img from "../assets/img/png/hero img.png";
import search_icon from "../assets/img/svg/search icon.svg";
import spiner from "../assets/img/svg/spiner.svg";
import text_star from "../assets/img/svg/star text.svg";
import five_star from "../assets/img/svg/5 star.svg";

function Header() {
  return (
    <>
      <section className="bg_black header_section py-5 position-relative">
        <div className="blue_shadow_hero_2 z_index_1"></div>
        <div className="container z_index_4 position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1
                className="text_white mb-0 ff_konexy fw-normal fs_7xl hero_text_after position-relative"
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                WordPress Development Agency
              </h1>
              <h3
                className="ff_gilroy_bold fw-bold fs_2xl text_white mb-0 mt-4 pt-1"
                data-aos="fade-left"
                data-aos-easing="ease-in"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                for Enterprise + Friendly Team{" "}
              </h3>
              <p
                className="ff_gilroy_normal fw-normal fs_xl mb-0 mt-4 text_gray_b2 pe-xxl-5 z_index_3 position-relative"
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                Vipe Studio is a WordPress Agency for development - a long-term
                partner for any WordPress service. Websites and,online shops
                development, maintenance and customization is what we do best.
              </p>
              <div className="d-flex align-items-center mt-4 pt-1">
                <a
                  className="hero_btn border_transperent ff_gilroy_semibold fw-semibold fs_xl text_white d-inline-block"
                  data-aos="fade-right"
                  data-aos-easing="ease-in"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="ff_gilroy_normal fw-normal fs_xl d-inline-block text_gray_b2 ms-sm-4 ms-2 vdo_btn border_transperent rounded-5"
                  data-aos="fade-left"
                  data-aos-easing="ease-in"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                  href="#"
                >
                  <img className="me-2 pe-lg-1 " src={vdo_btn} alt="vdo_btn" />
                  What is Vipe? (1min)
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 z_index_4 position-relative"
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="2000"
              data-aos-delay="300"
            >
              <div className="star_box flex-column d-flex align-items-start justify-content-center z_index_5 px-sm-4 px-2 py-2 ">
                <img
                  className="text_star_h_w"
                  src={text_star}
                  alt="text_star"
                />
                <img
                  className="mt-1 star_h_w"
                  src={five_star}
                  alt="five_star"
                />
                <p className="fw-normal ff_jost fs_xl mb-0 text_white mt-2">
                  Rated 5.0 Excellent
                </p>
              </div>
              <img
                className="w-100 transform_translet_x mt-4 mt-lg-0"
                src={hero_img}
                alt="hero_img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="tell_bg_color mt-sm-5 z_index_4 position-relative">
        <div className="container">
          <div className="row  py-5 justify-content-between">
            <div className="col-lg-6">
              <h2
                className="ff_konexy fw-normal fs_3xxl text_white mb-0"
                data-aos="fade-down"
                data-aos-easing="ease-in"
                data-aos-duration="1500"
              >
                Tell us more....
              </h2>
              <p
                className="ff_gilroy_normal fw-normal fs_xl text_white mt-4 mb-0 pe-4"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1500"
              >
                Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                augue in quis. Magna vel orci sem neque fringilla et lectus
                laoreet.
              </p>
            </div>
            <div className="col-lg-5">
              <span
                className="d-flex align-items-center bg_browm  rounded-5 pe-3 input_border mt-4 mt-lg-0"
                data-aos="fade-left"
                data-aos-easing="ease-in"
                data-aos-duration="1500"
              >
                <input
                  className="w-100  bg-transparent ff_gilroy_normal fw-normal  fs_xl text_gray_b2 outline_none border_none  py-sm-3 py-2 px-3"
                  type="text"
                  placeholder="What do you need assistance with?		"
                />
                <a href="#">
                  <img src={search_icon} alt="search_icon" />
                </a>
              </span>
              <div className="d-flex mt-3 justify-content-between">
                <div
                  className="d-flex align-items-center"
                  data-aos="fade-right"
                  data-aos-easing="ease-in"
                  data-aos-duration="1500"
                >
                  <a href="#">
                    <img src={spiner} alt="spiner" />
                  </a>
                  <a
                    className="mb-0 ff_gilroy_normal fw-normal fs_xl text_white ms-2 text_hover transition"
                    href="#"
                  >
                    or send us an inquire?
                  </a>
                </div>
                <a
                  className="ff_gilroy_normal fw-normal fs_xl mb-0 text_white text_hover transition"
                  data-aos="fade-left"
                  data-aos-easing="ease-in"
                  data-aos-duration="1500"
                  href="#"
                >
                  Learn more about...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
