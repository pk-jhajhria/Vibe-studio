import React from "react";
import yahoo_img from "../assets/img/png/on1.png";
import finance from "../assets/img/png/on2.png";
import news from "../assets/img/png/on3.png";
import topics from "../assets/img/png/on4.png";
import life from "../assets/img/png/on5.png";
import trending from "../assets/img/png/on6.png";

function Featured() {
  return (
    <>
      <section className="bg_light_white py-sm-5 py-4 overflow-hidden">
        <div className="container">
          <h2
            className=" ff_konexy fw-normal fs_4xl text_black pt-4"
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-duration="1500"
          >
            Featured on
          </h2>
          <div id="scroll" className="overflow-auto pb-4">
            <div className="row align-items-center mt-sm-5 pt-4 w_1290">
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <img
                  className=" w_85 w_md_100 pe-3"
                  src={yahoo_img}
                  alt="yahoo_img"
                />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img
                  className=" w_85 w_md_100 px-3"
                  src={finance}
                  alt="finance"
                />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <img className="  w_85 w_md_100 px-3" src={news} alt="news" />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1400"
                data-aos-delay="500"
              >
                <img
                  className="  w_85 w_md_100 px-3"
                  src={topics}
                  alt="topics"
                />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1600"
                data-aos-delay="500"
              >
                <img className="  w_85 w_md_100 px-3" src={life} alt="life" />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1800"
                data-aos-delay="500"
              >
                <img
                  className="  w_85 w_md_100 ps-3"
                  src={trending}
                  alt="trending"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
