import React from "react";
import "./main.css";

const Main = () => {
  return (
    <>
      <div className="mainback">
        <img
          src="images/Rectangle.png"
          class="img-fluid"
          style={{ MaxWidth: "100%" }}
          alt="Rectangle"
        />
      </div>
      <div className="mainsub">
        <img
          src="images/Vector-image.png"
          class="img-fluid"
          alt="Vector-image"
        />
        <button type="button" class="btn btn-danger">
          일반대출
        </button>
        <button type="button" class="btn btn-primary">
          원큐가족
          <br />
          일반대출신청
        </button>
        <button type="button" class="btn btn-secondary">
          대출상담
        </button>
      </div>
    </>
  );
};

export default Main;
