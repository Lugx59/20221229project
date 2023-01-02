import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div className="container-fluid">
        <a className="navbar-brand p-3" href="#">
          <img src="images/Group-166.png" alt="logo" />
        </a>
        <a className="nav-link" href="#">
          홈
        </a>
        <a className="nav-link" href="#">
          공유
        </a>
        <a className="nav-link" href="#">
          회원가입
        </a>
        <a className="nav-link" href="#">
          로그인
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#">
              홈
            </a>
            <a className="nav-link" href="#">
              공유
            </a>
            <a className="nav-link" href="#">
              회원가입
            </a>
            <a className="nav-link" href="#">
              로그인
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
