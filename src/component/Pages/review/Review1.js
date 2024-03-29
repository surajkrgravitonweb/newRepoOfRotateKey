import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card } from "antd";
import "./review.css";
import { BsFillStarFill } from "react-icons/bs";
import { isMobile } from "react-device-detect";
import { localUrl } from "../../env";

const { Meta } = Card;
const mobileStyle = {};
const desktopStyle = {
  height: "250px",
};

const Review1 = () => {
  var settings = {
    //   dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const [review, setReview] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(localUrl + "user/reviewSection", requestOptions)
      .then((response) => response.json())
      .then((result) => setReview(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <div className="mt-3" style={{ border: "1px solid #80808029" }}>
        <div className="text-center mb-3">
          <h2>What Our Users Say About Us</h2>
        </div>

        <Slider {...settings}>
          {review.map((resultReview, index) => (
            <div className="p-5">
              <div className="card mt-3" style={{ maxWidth: 640 }}>
                <div
                  className="row g-0"
                  style={isMobile ? mobileStyle : desktopStyle}
                >
                  <div className="col-md-4">
                    <img
                      src={resultReview.fields.image}
                      className="img-fluid rounded"
                      style={{ maxHeight: "200px", width: "100%" }}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">
                        {resultReview.fields.profile}
                      </h5>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "-10px",
                        }}
                      >
                        <p className="fs-14 text-muted">
                          {resultReview.fields.role}
                        </p>
                        <p className="fs-14 text-muted">
                          {" "}
                          <BsFillStarFill style={{ color: "#2b224c" }} />{" "}
                          {resultReview.fields.rating}
                        </p>
                      </div>
                      <b
                        style={{
                          marginTop: "-20px",
                        }}
                      >
                        {resultReview.fields.title.slice(0, 50)}
                      </b>
                      <p
                        className="card-text"
                        style={{
                          marginTop: "-5px",
                          height: "90px",
                        }}
                      >
                        {resultReview.fields.description.slice(0, 100)}
                      </p>
                      {/* <div style={{display:'flex',justifyContent:'space-between',marginTop:'-10px'}}>
       <button className="ReviewBt">Explore</button>
       <button className="ReviewBt">Explore</button>
        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Review1;
