import React from "react";
import "./main.css";

const Main = () => {
  return (
    <>
      <div
        className="container-xl"
        style={{
          width: "100%",
          padding: "0",
        }}
      >
        <div className="container-image">
          <div className="container-text">
            <p className="h1">
              대출상품
              <p className="h2" style={{ fontSize: "0.4em" }}>
                HOME &gt; 뱅캐시 &gt; 대출상품 &gt; 일반대출
              </p>
            </p>
          </div>
          {/* <img
            src="images/Rectangle.png"
            className="mainImage"
            style={{ width: "522px", margin: "0", padding: "0" }}
            alt="rectangle"
          /> */}
          <div className="button-1">
            <button className="mainButton">
              <a href="#" target="_blank" style={{ textDecoration: "none" }}>
                일반대출
              </a>
            </button>
            <button className="mainButton-1">
              <a
                href="#"
                target="_blank"
                style={{ textDecoration: "none", color: "#3e526c" }}
              >
                BCAC담보대출
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="bg">
        <img
          src="images/Vector-image.png"
          className="img-fluid"
          style={{ width: "100%" }}
          alt="vector-image"
        />
        <div className="bg-white">
          <img src="images/Vector-28.png" />
          <input className="b-1" button="일반대출" value="일반대출" />
          <br />
          <p className="b-2">
            대출신청 &rarr; 심사후
            <br />
            대출한도 및 금리결정 (5~20%)
          </p>
          <br />
          <input className="b-3" button="원큐가족" value="원큐가족" />
          <br />
          <p className="b-4">
            원큐가족 누구나!
            <br />
            공헌 영업실적 대출
          </p>
          <div className="v-line"></div>
          <br />
          <br />
          <br />
          <p className="b-5">
            실정에 따라 본사 심의 후
            <br />
            대출한도 및 금리 (5~10%)
          </p>
          <div
            className="my-5 justify-content-around col"
            style={{
              height: "200px",
              display: "block",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <button
              type="button"
              className="btn btn-danger col-4"
              style={{ borderRadius: "25px", margin: "5px", fontSize: "15pt" }}
            >
              일반대출
            </button>
            <button
              type="button"
              className="btn btn-primary col-4"
              style={{
                borderRadius: "25px",
                fontSize: "8pt",
                margin: "5px",
                width: "120px",
              }}
            >
              원큐가족
              <br />
              일반대출신청
            </button>
            <button
              type="button"
              className="btn btn-secondary col-4"
              style={{
                borderRadius: "25px",
                fontSize: "15pt",
                margin: "5px",
              }}
            >
              대출상담
            </button>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </>
  );
};

export default Main;
