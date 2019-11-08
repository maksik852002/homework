import React from 'react';
import img from './img/termcar.jpg'
import img1 from './img/nazcar.jpg'
import img2 from './img/djencar.jpg'

function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide mt-3" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img} className="d-block w-100" alt="terminator"/>
        </div>
        <div className="carousel-item">
          <img src={img1} className="d-block w-100" alt="backtofuture"/>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="djentelmensofluck"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}


export default Carousel;
