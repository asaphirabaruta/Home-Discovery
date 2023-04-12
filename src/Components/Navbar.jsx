import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top bg-body-secondary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" to="/">
            <svg
              width="30"
              height="30"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 230.262 230.262"
              style={{ enableBackground: "new 0 0 230.262 230.262" }}
              xmlSpace="preserve"
            >
              <path
                d="M228.065,125.587l-51.619-51.615V23.263c0-4.142-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5v35.709L120.43,17.96
	c-2.928-2.929-7.677-2.928-10.606,0L2.197,125.587c-2.929,2.929-2.929,7.678,0,10.606c2.93,2.929,7.678,2.929,10.608,0l18.72-18.72
	v89.525c0,4.142,3.357,7.5,7.5,7.5h152.215c4.143,0,7.5-3.358,7.5-7.5v-89.524l18.721,18.719c1.464,1.464,3.384,2.196,5.303,2.196
	c1.919,0,3.839-0.732,5.304-2.197C230.994,133.264,230.994,128.516,228.065,125.587z M183.739,199.499H46.524v-97.025l68.604-68.604
	l68.611,68.606V199.499z"
              />
            </svg>
            <span className="ms-2">Home Discovery</span>
          </Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div class="d-flex">
              <Link class="btn btn-outline-primary me-2" to="/sign-up">
                Sign Up
              </Link>
              <Link class="btn btn-primary" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
