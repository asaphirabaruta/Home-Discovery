import React from "react";
import Pagination from "../Components/Pagination";
import Card from "../Components/Card";
import image1 from "../Assets/Images/image1.jpg";
import image2 from "../Assets/Images/image2.jpg";
import image3 from "../Assets/Images/image3.jpg";
import image4 from "../Assets/Images/image4.jpg";
import image5 from "../Assets/Images/image5.jpg";
import image6 from "../Assets/Images/image6.jpg";
import image7 from "../Assets/Images/image7.jpg";
import image8 from "../Assets/Images/image8.jpg";

export default function Houses() {
  return (
    <div>
      <div className="d-flex justify-content-between mt-5">
        <div className="d-flex mt-4">
          <button className="btn btn-primary me-2 ">Filter</button>
          <select class="form-select me-2" aria-label="Default select example">
            <option selected>Location</option>
            <option value="1">Gisozi</option>
            <option value="2">Nyarutarama</option>
            <option value="3">Gacuriro</option>
          </select>
          <select class="form-select" aria-label="Default select example">
            <option selected>Price</option>
            <option value="1">$100k-$70</option>
            <option value="2">$69-$40</option>
            <option value="3">Under $40</option>
          </select>
        </div>
        <div>
          <form class="d-flex mt-4" role="search">
            <input
              class="form-control mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
        <div className="col">
          <Card
            image={image1}
            price={27000}
            Rooms={2}
            bathrooms={3}
            parking={1}
            area={421}
          />
        </div>
        <div className="col">
          <Card
            image={image2}
            price={27000}
            Rooms={2}
            bathrooms={3}
            parking={1}
            area={421}
          />
        </div>
        <div className="col">
          <Card
            image={image3}
            price={27000}
            Rooms={2}
            bathrooms={3}
            parking={1}
            area={421}
          />
        </div>
        <div className="col">
          <Card
            image={image6}
            price={27000}
            Rooms={2}
            bathrooms={3}
            parking={1}
            area={421}
          />
        </div>
        <div className="col">
          <Card
            image={image5}
            price={27000}
            Rooms={2}
            bathrooms={3}
            parking={1}
            area={421}
          />
        </div>
        <div className="col">
          <Card
            image={image6}
            price={27000}
            Rooms={2}
            bathrooms={3}
            parking={1}
            area={421}
          />
        </div>
        <div className="col">
          <Card
            image={image3}
            price={27000}
            Rooms={2}
            bathrooms={3}
            parking={1}
            area={421}
          />
        </div>
        <div className="col">
          <Card
            image={image8}
            price={27000}
            Rooms={2}
            bathrooms={3}
            parking={1}
            area={421}
          />
        </div>
        <div className="col">
          <Card
            image={image2}
            price={27000}
            Rooms={2}
            bathrooms={3}
            parking={1}
            area={421}
          />
        </div>
      </div>

      <Pagination />
    </div>
  );
}
