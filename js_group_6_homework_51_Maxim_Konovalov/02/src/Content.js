import React from 'react';
import './Content.css';

function Content(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
      <div className="wrap">
        <h2 className="text-center my-3">{props.title}</h2>
        <hr/>
        <div className="d-flex flex-row-reverse">
          <div className="col-sm-8 align-self-center">
            <p><b>Год выпуска:</b> {props.year}</p>
            <p><b>Страна производства:</b> {props.country}</p>
            <p><b>Режисер:</b> {props.producer}</p>
            <p><b>Время фильма:</b> {props.time}</p>
          </div>
          <div className="col-sm-4 align-self-center"><img className="pb-3" width='100%' src={props.image} alt=""/></div>
        </div>
      </div>
    </div>
  );
}


export default Content;
