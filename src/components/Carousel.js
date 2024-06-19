import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id='carousel'>
          <div 
            className="carousel-caption d-flex justify-content-center align-items-center" 
            style={{ zIndex: "10", height: "100%", top: "0" }}
          >
            <form className="d-flex w-75">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                style={{ height: '50px', fontSize: '20px' }} // Larger input box
              />
              <button 
                className="btn btn-outline-success text-white bg-success" 
                type="submit"
                style={{ height: '50px', fontSize: '20px' }} // Larger button
              >
                Search
              </button>
            </form>
          </div>

          <div className="carousel-item active">
            <img src="/images/burger.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Burger"/>
          </div>
          <div className="carousel-item">
            <img src="/images/pizza.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Pizza"/>
          </div>
          <div className="carousel-item">
            <img src="/images/momo.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Momo"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}



