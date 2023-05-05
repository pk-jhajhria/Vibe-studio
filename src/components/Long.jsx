import React from "react";
import long1 from "../assets/img/svg/long1.svg";
import long2 from "../assets/img/svg/long2.svg";
import long3 from "../assets/img/svg/long3.svg";
import long4 from "../assets/img/svg/long4.svg";
import long5 from "../assets/img/svg/long5.svg";
import long6 from "../assets/img/svg/long6.svg";

function Long() {
  return (
    <>
      <section className="bg_light_white py-sm-5 py-4 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2
                className=" ff_konexy fw-normal fs_4xl text_black pt-4 mb-0"
                data-aos="fade-down"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Long Term WordPress Partner
              </h2>
              <p
                className=" ff_gilroy_normal fw-normal fs_xl mb-0 text-black opacity-75 mt-3 pt-1"
                data-aos="fade-right"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Our motto is the long-term partnership – we will not only
                develop your perfect website, but will be behind you through the
                whole process. They already trusted us:
              </p>
            </div>
          </div>
          <div className="overflow-auto pb-4">
            <div className="row align-items-center mt-sm-5 pt-4 pt-sm-0 w_1290">
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <img className="  w_85 w_md_100 pe-3" src={long1} alt="long1" />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img className="  w_85 w_md_100 px-3" src={long2} alt="long2" />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <img className="  w_85 w_md_100 px-3" src={long3} alt="long3" />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1400"
                data-aos-delay="500"
              >
                <img className="  w_85 w_md_100 px-3" src={long4} alt="long4" />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1600"
                data-aos-delay="500"
              >
                <img className="  w_85 w_md_100 px-3" src={long5} alt="long5" />
              </div>
              <div
                className="col-2"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1800"
                data-aos-delay="500"
              >
                <img className="  w_85 w_md_100 ps-3" src={long6} alt="long6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Long;
