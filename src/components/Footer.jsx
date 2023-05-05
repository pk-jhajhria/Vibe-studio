import React from "react";
import footer_logo from "../assets/img/png/nav logo.png";
import white_search from "../assets/img/svg/white search.svg";
import arrow from "../assets/img/svg/arrow.svg";
import phn_img from "../assets/img/svg/phn.svg";
import mail_box from "../assets/img/svg/mail.svg";
import home_img from "../assets/img/svg/home.svg";
import git from "../assets/img/svg/git.svg";
import in_img from "../assets/img/svg/in.svg";
import twitter from "../assets/img/svg/twitter.svg";
import fb from "../assets/img/svg/fb.svg";
import insta from "../assets/img/svg/insta.svg";
import wiki from "../assets/img/svg/wiki.svg";

function Footer() {
  return (
    <>
      <section className="py-5">
        <div className="container pt-sm-5">
          <div className="row justify-content-between align-items-center pt-5">
            <div className="col-lg-2 col-sm-4">
              <a href="#">
                <img
                  className="nav_logo_w"
                  src={footer_logo}
                  alt="footer_logo"
                />
              </a>
            </div>
            <div className="col-lg-4 col-sm-5 mt-4 pe-5 pe-sm-0">
              <span className="d-flex align-items-center bg-white rounded-5">
                <input
                  className="w-100 py-3 px-4 bg-transparent outline_none border_none ff_gilroy_normal fw-normal fs_xl"
                  type="text"
                  placeholder="Search here...."
                />
                <a className="pe-3" href="#">
                  <img src={white_search} alt="white_search" />
                </a>
              </span>
            </div>
          </div>
          <div className="row pt-5 mt-lg-3">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6">
                  <p className="ff_gilroy_normal fw-normal fs_xl text_white mb-0">
                    Services
                  </p>
                  <div className="d-flex flex-column">
                    <span className="mt-3 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" />{" "}
                        WordPress Development
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" />{" "}
                        WooCommerce Development
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" />{" "}
                        WordPress Maintenance
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" /> Speed
                        Optimization
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" />{" "}
                        Dedicated WordPress Developer
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" />{" "}
                        Headless WordPress Development
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" /> White
                        Label Development
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 mt-5 mt-sm-0">
                  <p className="ff_gilroy_normal fw-normal fs_xl text_white mb-0">
                    Services
                  </p>
                  <div className="d-flex flex-column">
                    <span className="mt-3 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" />{" "}
                        WordPress Hosting
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" /> PSD,
                        XD, Figma to WordPress Conversion
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" /> Custom
                        WordPress Theme
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" /> Custom
                        WordPress Plugins
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" /> CMS to
                        WordPress
                      </a>
                    </span>
                    <span className="mt-2 text_stroke_nav d-inline-block">
                      <a
                        className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav"
                        href="#"
                      >
                        <img className=" pe-1" src={arrow} alt="arrow" />{" "}
                        WordPress Malware Removal
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row justify-content-between mt-5 mt-lg-0">
                <div className="col-sm-6 ps-lg-5">
                  <p className="ff_gilroy_normal fw-normal fs_xl mb-0 text_white">
                    Latest Articles
                  </p>
                  <div className="d-flex flex-column">
                    <a
                      className="ff_gilroy_normal fw-normal fs_xl text_white text_stroke_nav mt-3"
                      href="#"
                    >
                      7 WordPress Plugins to Create an Effective Newsletter
                      03.01.2022
                    </a>
                    <a
                      className="ff_gilroy_normal fw-normal fs_xl text_white text_stroke_nav mt-3"
                      href="#"
                    >
                      What’s the Perfect Blog Post Length for Your WordPress
                      Site’s SEO? 02.01.2022
                    </a>
                    <a
                      className="ff_gilroy_normal fw-normal fs_xl text_white text_stroke_nav mt-3"
                      href="#"
                    >
                      5 Reasons the Future of WordPress Is Headless 01.01.2022
                    </a>
                    <a
                      className="ff_gilroy_normal fw-normal fs_xl text_white text_stroke_nav mt-3"
                      href="#"
                    >
                      Viptor Says: Vipe Studio’s WordPress Developers Wrap Up
                      the Amazingly Successful 2021 30.12.2021
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-6 mt-5 mt-sm-0">
                  <p className="ff_gilroy_normal fw-normal fs_xl mb-0 text_white">
                    Contact
                  </p>
                  <div className="d-flex flex-column">
                    <a
                      className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav mt-3"
                      href="#"
                    >
                      <img className="pe-3" src={phn_img} alt="phn_img" />
                      EU: +359 988 993 128
                    </a>
                    <a
                      className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav mt-4"
                      href="#"
                    >
                      <img className="pe-3" src={phn_img} alt="phn_img" />
                      US: +1 (1 888) 266-6917
                    </a>
                    <a
                      className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav mt-4"
                      href="#"
                    >
                      <img className="pe-3" src={mail_box} alt="mail_box" />
                      office@vipestudio.com
                    </a>
                    <a
                      className="ff_gilroy_normal fw-normal fs_xsm text_white text_stroke_nav mt-4"
                      href="#"
                    >
                      <img className="pe-3" src={home_img} alt="home_img" />
                      14 Srebarna, Sofia 1407, Bulgaria
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border_top_footer mt-sm-4 pb-4">
        <div className="container pt-5">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <p className="ff_gilroy_normal fw-normal fs_xsm text_white mb-0">
                © Vipe Studio 2016-2022
              </p>
              <div className="d-flex mt-3">
                <a
                  className="text_stroke_nav ff_gilroy_normal fw-normal text_white border-end border-2 border-white pe-2"
                  href="#"
                >
                  Privacy
                </a>
                <a
                  className="text_stroke_nav ff_gilroy_normal fw-normal text_white border-end border-2 border-white pe-2 ms-2"
                  href="#"
                >
                  Careers
                </a>
                <a
                  className="text_stroke_nav ff_gilroy_normal fw-normal text_white border-end border-2 border-white pe-2 ms-2"
                  href="#"
                >
                  Media
                </a>
                <a
                  className="text_stroke_nav ff_gilroy_normal fw-normal text_white ms-2"
                  href="#"
                >
                  Client Area
                </a>
              </div>
            </div>
            <div className="d-flex gap-sm-3 gap-2 mt-4 mt-md-0">
              <a className="transform_y" href="#">
                <img src={git} alt="git" />
              </a>
              <a className="transform_y" href="#">
                <img src={in_img} alt="in_img" />
              </a>
              <a className="transform_y" href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a className="transform_y" href="#">
                <img src={fb} alt="fb" />
              </a>
              <a className="transform_y" href="#">
                <img src={insta} alt="insta" />
              </a>
              <a className="transform_y" href="#">
                <img src={wiki} alt="wiki" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
