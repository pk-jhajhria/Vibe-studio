import React, { useState } from "react";
import nav_logo from "../assets/img/png/nav logo.png";
import globel from "../assets/img/svg/uiw_global.svg";
import { Dropdown } from "react-bootstrap";

function Nav() {
  const [navShow, setNavShow] = useState(0);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <>
      <section className="position-relative" id="navbar">
        <nav className=" z_index_3 position-relative rounded-2 py-lg-3">
          <div
            className=""
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-duration="900"
          >
            <div className="container">
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="d-flex gap-5 align-items-center justify-content-center">
                  <a
                    className="ff_inter fw-bold fs_2xl text-white z_index1 my-2"
                    href="#"
                  >
                    <img className="nav_logo_w" src={nav_logo} alt="nav_logo" />
                  </a>{" "}
                  <ul className="d-flex gap-xl-3 gap-2 gap-xl-4 ps-4 py-3 list-unstyled d-none d-xl-flex align-items-center mb-0 justify-content-end">
                    <Dropdown className="dropdown_hover">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className=" mb-0 ff_gilroy_normal fw-normal fs_xl pe-1"
                      >
                        <div className="d-flex align-items-center mb-0 ff_gilroy_normal fw-normal fs_xl pe-1">
                          WordPress Solution
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                              stroke=" white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />{" "}
                          </svg>
                        </div>
                      </Dropdown.Toggle>{" "}
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action </Dropdown.Item>{" "}
                        <Dropdown.Item href="#/action-2">
                          Another action{" "}
                        </Dropdown.Item>{" "}
                        <Dropdown.Item href="#/action-3">
                          Something else{" "}
                        </Dropdown.Item>{" "}
                      </Dropdown.Menu>{" "}
                    </Dropdown>
                    <Dropdown className="dropdown_hover">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className=" mb-0 ff_gilroy_normal fw-normal fs_xl pe-1"
                      >
                        <div className="d-flex align-items-center mb-0 ff_gilroy_normal fw-normal fs_xl pe-1">
                          Services
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                              stroke=" white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />{" "}
                          </svg>
                        </div>
                      </Dropdown.Toggle>{" "}
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action </Dropdown.Item>{" "}
                        <Dropdown.Item href="#/action-2">
                          Another action{" "}
                        </Dropdown.Item>{" "}
                        <Dropdown.Item href="#/action-3">
                          Something else{" "}
                        </Dropdown.Item>{" "}
                      </Dropdown.Menu>{" "}
                    </Dropdown>
                    <span className="d-flex align-items-center">
                      <a
                        className="fw-normal fs_xl ff_gilroy_normal text_white ps-2 d-inline-block nav_text_hover"
                        href="#"
                      >
                        Portfolio
                      </a>
                    </span>
                    <Dropdown className="dropdown_hover">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className=" mb-0 ff_gilroy_normal fw-normal fs_xl pe-1"
                      >
                        <div className="d-flex align-items-center mb-0 ff_gilroy_normal fw-normal fs_xl pe-1">
                          About
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                              stroke=" white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />{" "}
                          </svg>
                        </div>
                      </Dropdown.Toggle>{" "}
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action </Dropdown.Item>{" "}
                        <Dropdown.Item href="#/action-2">
                          Another action{" "}
                        </Dropdown.Item>{" "}
                        <Dropdown.Item href="#/action-3">
                          Something else{" "}
                        </Dropdown.Item>{" "}
                      </Dropdown.Menu>{" "}
                    </Dropdown>
                    <span className="d-flex align-items-center">
                      <a
                        className="fw-normal fs_xl ff_gilroy_normal text_white ps-2 d-inline-block nav_text_hover"
                        href="#"
                      >
                        Blog
                      </a>
                    </span>
                  </ul>
                </div>
                <ul className="d-flex align-items-center mb-0 gap-4 d-none d-lg-flex">
                  <a
                    className=" text_white ff_inter fw-normal fs_xl nav_text_hover"
                    href="#"
                  >
                    1 888 266-6917 (eu?)
                  </a>
                  <span className=" primary_btn position-relative">
                    <a
                      className="fw-semibold text_white fs_md  rounded-5 bg_primary contact_us_btn before_line_nav_btn "
                      href="#"
                    >
                      Contact Us
                    </a>
                  </span>
                  <div className="d-flex">
                    <img className="cursor_pointer" src={globel} alt="globel" />
                    <Dropdown className="dropdown_hover">
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className=" mb-0 ff_gilroy_normal fw-normal fs_xl pe-1"
                      >
                        <div className="d-flex align-items-center mb-0 ff_gilroy_normal fw-normal fs_xl pe-1">
                          Eng
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                              stroke=" white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />{" "}
                          </svg>
                        </div>
                      </Dropdown.Toggle>{" "}
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Hindi </Dropdown.Item>{" "}
                        <Dropdown.Item href="#/action-2">
                          Punjabi{" "}
                        </Dropdown.Item>{" "}
                        <Dropdown.Item href="#/action-3">Japnes </Dropdown.Item>{" "}
                      </Dropdown.Menu>{" "}
                    </Dropdown>
                  </div>
                </ul>
                <div
                  style={{ zIndex: "1000" }}
                  className={
                    navShow
                      ? "threeline d-lg-none cursor_pointer my-2"
                      : "threeline d-lg-none cursor_pointer my-2"
                  }
                  onClick={() => setNavShow(!navShow)}
                >
                  <a href="#">
                    <div
                      className={navShow ? " falseline1" : "  threelinechild"}
                    ></div>
                    <div
                      className={navShow ? "falseline" : " threelinechild"}
                    ></div>
                    <div
                      className={navShow ? "falseline3 " : "threelinechild"}
                    ></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="d-lg-none d-flex flex-column">
              <div className={` ${navShow ? "shownav" : " hidenav"}`}>
                <div className="d-flex flex-column">
                  <div className="container">
                    <ul className="d-flex gap-xl-3 gap-2 gap-xl-4 py-3 list-unstyled d-xl-none flex-column align-items-center mb-0 justify-content-end">
                      <Dropdown className="dropdown_hover">
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className=" mb-0 ff_gilroy_normal fw-normal fs_xl pe-1"
                        >
                          <div className="d-flex align-items-center mb-0 ff_gilroy_normal fw-normal fs_xl pe-1">
                            WordPress Solution
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                                stroke=" white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />{" "}
                            </svg>
                          </div>
                        </Dropdown.Toggle>{" "}
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-1"
                          >
                            Action{" "}
                          </Dropdown.Item>{" "}
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-2"
                          >
                            Another action{" "}
                          </Dropdown.Item>{" "}
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-3"
                          >
                            Something else{" "}
                          </Dropdown.Item>{" "}
                        </Dropdown.Menu>{" "}
                      </Dropdown>
                      <Dropdown className="dropdown_hover">
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className=" mb-0 ff_gilroy_normal fw-normal fs_xl pe-1"
                        >
                          <div className="d-flex align-items-center mb-0 ff_gilroy_normal fw-normal fs_xl pe-1">
                            Services
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                                stroke=" white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />{" "}
                            </svg>
                          </div>
                        </Dropdown.Toggle>{" "}
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-1"
                          >
                            Action{" "}
                          </Dropdown.Item>{" "}
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-2"
                          >
                            Another action{" "}
                          </Dropdown.Item>{" "}
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-3"
                          >
                            Something else{" "}
                          </Dropdown.Item>{" "}
                        </Dropdown.Menu>{" "}
                      </Dropdown>
                      <span className="d-flex align-items-center">
                        <a
                          onClick={() => setNavShow(!navShow)}
                          className="fw-normal fs_xl ff_gilroy_normal text_white ps-2 d-inline-block nav_text_hover"
                          href="#"
                        >
                          Portfolio
                        </a>
                      </span>
                      <Dropdown className="dropdown_hover">
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className=" mb-0 ff_gilroy_normal fw-normal fs_xl pe-1"
                        >
                          <div className="d-flex align-items-center mb-0 ff_gilroy_normal fw-normal fs_xl pe-1">
                            About
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                                stroke=" white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />{" "}
                            </svg>
                          </div>
                        </Dropdown.Toggle>{" "}
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-1"
                          >
                            Action{" "}
                          </Dropdown.Item>{" "}
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-2"
                          >
                            Another action{" "}
                          </Dropdown.Item>{" "}
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-3"
                          >
                            Something else{" "}
                          </Dropdown.Item>{" "}
                        </Dropdown.Menu>{" "}
                      </Dropdown>
                      <span className="d-flex align-items-center">
                        <a
                          onClick={() => setNavShow(!navShow)}
                          className="fw-normal fs_xl ff_gilroy_normal text_white ps-2 d-inline-block nav_text_hover"
                          href="#"
                        >
                          Blog
                        </a>
                      </span>
                    </ul>
                  </div>
                  <ul className="d-flex align-items-center mb-0 gap-4 d-none d-lg-flex">
                    <a
                      className=" text_white ff_inter fw-normal fs_xl nav_text_hover"
                      href="#"
                    >
                      1 888 266-6917 (eu?)
                    </a>
                    <span className=" primary_btn position-relative">
                      <a
                        className="fw-semibold text_white fs_md  rounded-5 bg_primary contact_us_btn before_line_nav_btn "
                        href="#"
                      >
                        Contact Us
                      </a>
                    </span>
                    <div className="d-flex">
                      <img
                        className="cursor_pointer"
                        src={globel}
                        alt="globel"
                      />
                      <Dropdown className="dropdown_hover">
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          className=" mb-0 ff_gilroy_normal fw-normal fs_xl pe-1"
                        >
                          <div className="d-flex align-items-center mb-0 ff_gilroy_normal fw-normal fs_xl pe-1">
                            Eng
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665"
                                stroke=" white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />{" "}
                            </svg>
                          </div>
                        </Dropdown.Toggle>{" "}
                        <Dropdown.Menu>
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-1"
                          >
                            Hindi{" "}
                          </Dropdown.Item>{" "}
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-2"
                          >
                            Punjabi{" "}
                          </Dropdown.Item>{" "}
                          <Dropdown.Item
                            onClick={() => setNavShow(!navShow)}
                            href="#/action-3"
                          >
                            Japnes{" "}
                          </Dropdown.Item>{" "}
                        </Dropdown.Menu>{" "}
                      </Dropdown>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Nav;
