import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div
          style={{ textAlign: "center", backgroundColor: "#eee" }}
          className="container-fluid"
        >
          <div className="py-3">
            <a href="#">
              <i
                style={{ color: "gray" }}
                className="bi bi-twitter fs-3 mx-4"
              ></i>
            </a>
            <a href="#">
              <i
                style={{ color: "gray" }}
                className="bi bi-instagram fs-3 mx-4"
              ></i>
            </a>
            <a href="#">
              <i
                style={{ color: "gray" }}
                className="bi bi-facebook fs-3 mx-4"
              ></i>
            </a>
            <a href="#">
              <i
                style={{ color: "gray" }}
                className="bi bi-youtube fs-3 mx-4"
              ></i>
            </a>
          </div>
          <div className="social-media">
            <ul className="list-group">
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                개인정보처리방침 | 이용약관 | 관리자
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                주식회사 아름다운뱅캐시대부 | 사업자등록번호 481-81-02467
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                주소 서울특별시 서초구 신반포로324/4F
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                고객센터 : 02-546-6610 FAX : 02-546-6612
              </li>
              <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                Copyright © 2020 주식회사 아름다운뱅캐시대부. All right
                reserved.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
