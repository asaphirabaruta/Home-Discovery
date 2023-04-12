import React from "react";
import image1 from "../Assets/Images/image1.jpg";
import image2 from "../Assets/Images/image2.jpg";
import image3 from "../Assets/Images/image3.jpg";

export default function Details() {
  return (
    <div className="row mt-5">
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={image1}
                      class="d-block w-100 card-img"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={image2}
                      class="d-block w-100 card-img"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={image3}
                      class="d-block w-100 card-img"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card mt-2 shadow">
              <h5 class="card-header text-center">Featured</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <p class="card-text">With supporting text below as</p>
              </div>
              <div class="card-footer text-body-secondary">2 days ago</div>
            </div>
          </div>
        </div>
        <div class="card text-center my-2 shadow">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div class="card-footer text-body-secondary">2 days ago</div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card text-center mt-2 shadow">
          <div class="card-header">Similar</div>
          <div class="card-body p-1">
            <div class="card mb-2">
              <img src={image1} className="card-img" alt="" />
            </div>
            <div class="card mb-2">
              <img src={image2} className="card-img" alt="" />
            </div>
            <div class="card mb-2">
              <img src={image3} className="card-img" alt="" />
            </div>
            <div class="card mb-2">
              <img src={image1} className="card-img" alt="" />
            </div>
          </div>
          <div className="card-footer">Similar</div>
        </div>
      </div>
    </div>
  );
}
